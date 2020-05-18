//NOTE/: external library
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ava from "../../assets/img/ava.jpg";

import "./Avatar.scss";

const Avatar = (user) => {
    if (user.avatar && user.avatar !== undefined) {
        return <img className='avatar' src={user.avatar} alt='avatar' />;
    } else {
        return (
            <div>
                <p className='name'>A</p>
                <img className='avatar' src={ava} alt='avatar' />
            </div>
        );
    }
};

Avatar.propTypes = {};

export default Avatar;
