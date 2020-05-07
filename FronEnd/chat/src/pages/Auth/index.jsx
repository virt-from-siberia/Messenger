//NOTE/: external
import React from "react";

//NOTE/: ant internal
import { LoginForm } from "../../modules";
import "./Auth.scss";

const Auth = () => {
    return (
        <div className='auth'>
            <div className='auth__content'>
                <div className='auth__top'>
                    <div className='block'>
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
