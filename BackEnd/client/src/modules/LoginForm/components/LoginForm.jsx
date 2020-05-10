//NOTE/: external
import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
//NOTE/: internal
import { useHttp } from "../../../hooks/http.hook";
import openNotification from "../../../utils/helpers/openNotification";
import { AuthContext } from "../../../context/AuthContext";
import "./LoginForm.scss";
//NOTE/: ant
import { Form, Input, Button, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export const LoginForm = () => {
    const auth = useContext(AuthContext);
    const { loading, error, request, clearError } = useHttp();

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

    const loginHandler = async (values) => {
        try {
            const data = await request("/api/auth/login", "POST", {
                ...values,
            });
            auth.login(data.token, data.userId);
            if (!error) {
                openNotification({
                    text: "Вход выполнен успешно",
                    type: "success",
                    title: "Вход успешно ",
                });
            }
        } catch (err) {}
    };

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };

    const onFinish = (values) => {
        console.log("Success:", values);
        loginHandler(values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    return (
        <div className='auth'>
            <div className='auth__content'>
                <div className='block'>
                    <div className='block__header'>
                        <h2>Войти в аккаунт</h2>
                        <p>Пожалутса войдите в аккаунт</p>
                    </div>
                    {loading && (
                        <Spin className='spinner' indicator={antIcon} />
                    )}

                    <Form
                        className='login'
                        {...layout}
                        name='basic'
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label='E-mail'
                            name='email'
                            rules={[
                                {
                                    required: true,
                                    message: "Пожалуста введите имя!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label='Пароль'
                            name='password'
                            rules={[
                                {
                                    required: true,
                                    message: "Пожалуста введите пароль!",
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button
                                type='primary'
                                htmlType='submit'
                                disabled={loading}
                            >
                                Войти
                            </Button>
                        </Form.Item>
                        <Link to='/register'>Зарегистрироватся</Link>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
