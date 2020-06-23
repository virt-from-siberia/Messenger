//external
import React from "react";
// import PropTypes from "prop-types";

//material
import AppsIcon from "@material-ui/icons/Apps";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import ChatIcon from "@material-ui/icons/Chat";
import PostAddIcon from "@material-ui/icons/PostAdd";

//internal
import UserSetting from "./features/UserSetting/UserSetting";
import "./UserNavBar.scss";

const UserNavBar = () => {
    return (
        <div className='topPanel'>
            <div className='topPanel__leftside'>
                <div className='item item-left'>
                    <AppsIcon />
                </div>
            </div>
            <div className='topPanel__rightside'>
                <div className='item '>
                    <div className='item__header'>
                        <PostAddIcon />
                    </div>
                </div>
                <div className='item '>
                    <div className='item__header'>
                        <PostAddIcon />
                    </div>
                </div>
                <div className='item '>
                    <div className='item__header'>
                        <ChatIcon />
                    </div>
                </div>
                <UserSetting />
                <div className='item '>
                    <div className='item__header'>
                        <SettingsOutlinedIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

// UserNavBar.propTypes = {
//     // name: PropTypes.string,
// };

export default UserNavBar;
