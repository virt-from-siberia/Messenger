//NOTE/: external
import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
//NOTE/: internal
import { useHttp } from "../../../hooks/http.hook";
import openNotification from "../../../utils/helpers/openNotification";
//NOTE/: ant
import { Form, Input, Tooltip, Button, Spin } from "antd";
import { QuestionCircleOutlined, LoadingOutlined } from "@ant-design/icons";

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const RegisterForm = () => {
    const history = useHistory();
    const { loading, error, request, clearError } = useHttp();
    const [form] = Form.useForm();

    useEffect(() => {
        if (error) {
            console.log(error);
            openNotification({
                text: "",
                type: "error",
                title: error,
            });
        }

        clearError();
    }, [error, clearError]);

    const registerHandler = async (values) => {
        try {
            const data = await request("/api/auth/register", "POST", {
                ...values,
            });
            if (!error) {
                openNotification({
                    text: "Вы успешно зарегестрировались",
                    type: "success",
                    title: "Регистрация успешно ",
                });
                setTimeout(() => {
                    history.push("/login");
                }, 1500);
            }
        } catch (err) {}
    };

    const onFinish = (values) => {
        console.log("Received values of form: ", values);
        registerHandler(values);
    };

    return (
        <div className='auth'>
            <div className='auth__content'>
                <div className='block'>
                    <div className='block__header'>
                        <h2>Регистрация</h2>
                        <p>Зарегестрируйте аккаунт</p>
                    </div>
                    {loading && (
                        <Spin className='spinner' indicator={antIcon} />
                    )}

                    <Form
                        {...formItemLayout}
                        form={form}
                        name='register'
                        onFinish={onFinish}
                        scrollToFirstError
                    >
                        <Form.Item
                            name='email'
                            label='E-mail'
                            rules={[
                                {
                                    type: "email",
                                    message: "Введите валидный Email",
                                },
                                {
                                    required: true,
                                    message: "Введите Email",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name='password'
                            label='Password'
                            rules={[
                                {
                                    required: true,
                                    message: "Введите пароль!",
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name='confirm'
                            label='Confirm Password'
                            dependencies={["password"]}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: "Подтвердите пароль!",
                                },
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        if (
                                            !value ||
                                            getFieldValue("password") === value
                                        ) {
                                            return Promise.resolve();
                                        }

                                        return Promise.reject(
                                            "Пароли должны совпадать!"
                                        );
                                    },
                                }),
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name='fullname'
                            label={
                                <span>
                                    Nickname&nbsp;
                                    <Tooltip title='Ваше имя'>
                                        <QuestionCircleOutlined />
                                    </Tooltip>
                                </span>
                            }
                            rules={[
                                {
                                    required: true,
                                    message: "Введите Ваше имя!",
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item {...tailFormItemLayout}>
                            <Button
                                type='primary'
                                htmlType='submit'
                                disabled={loading}
                            >
                                Зарегестрировтся
                            </Button>
                        </Form.Item>
                    </Form>
                    <Link to='/'>Войти</Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
