//NOTE/: external library
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ava from "../../assets/img/ava.jpg";

import "./Avatar.scss";

const AvatarDialogs = ({ user }) => {
    if (user.avatar && user.avatar !== undefined) {
        return <img className='avatar' src={user.avatar} alt='avatar' />;
    } else {
        const firstChar = user.fullname.slice(0, 1);

        return (
            <div>
                <p className='name-dialogs'>{firstChar}</p>
                <img className='avatar' src={ava} alt='avatar' />
            </div>
        );
    }
};

AvatarDialogs.propTypes = {};

export default AvatarDialogs;
