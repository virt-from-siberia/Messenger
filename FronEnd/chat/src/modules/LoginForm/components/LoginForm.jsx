//NOTE/: external
import React from "react";
import { Link } from "react-router-dom";

//NOTE/: ant desing
import { Form, Input, Button, Checkbox } from "antd";

export const LoginForm = () => {
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
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <>
            <h2>Войти в аккаунт</h2>
            <p>Пожалутса войдите в аккаунт</p>
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
                    <Button type='primary' htmlType='submit'>
                        Отправить
                    </Button>
                </Form.Item>
                <Link to='/registration'>Зарегистрироватся</Link>
            </Form>
        </>
    );
};

export default LoginForm;
