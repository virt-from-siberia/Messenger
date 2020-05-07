//NOTE/: external
import React from "react";

//NOTE/: ant desing
import { Form, Input, Button, Checkbox } from "antd";

const LoginForm = () => {
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
                {...layout}
                name='basic'
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label='email'
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
                    label='Password'
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

                <Form.Item
                    {...tailLayout}
                    name='remember'
                    valuePropName='checked'
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type='primary' htmlType='submit'>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default LoginForm;
