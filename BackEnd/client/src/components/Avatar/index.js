//NOTE/: external library
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Avatar.scss";

const Avatar = ({ avatar }) => {
    if (avatar) {
        return <img className='avatar' src={avatar} alt={"lol"} />;
    } else {
        return <p>not</p>;
    }
};

Avatar.propTypes = {};

export default Avatar;
