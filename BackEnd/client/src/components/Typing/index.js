import React from "react";
import "./Typing.scss";

const Typing = () => {
    return (
        <div className='ticontainer'>
            <p className='ticontainer-text'>Печатает</p>
            <div className='tiblock'>
                <div className='tidot'></div>
                <div className='tidot'></div>
                <div className='tidot'></div>
            </div>
        </div>
    );
};

export default Typing;
