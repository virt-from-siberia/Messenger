//NOTE/: external
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { eachWeekOfInterval } from "date-fns";

//NOTE/: internal
import { Time, Typing, MessageStatus } from "../";

import "./Message.scss";

const Message = ({
    avatar,
    text,
    date,
    user,
    isMe,
    isRead,
    attachemnts,
    isTyping,
}) => {
    return (
        <div
            className={classNames("message", {
                "message--isme": isMe,
                "message--is-typing": isTyping,
                "message--image": attachemnts && attachemnts.length === 1,
            })}
        >
            <div className='message__content'>
                <MessageStatus isMe={isMe} isRead={isRead} />
                <div className='message__avatar'>
                    <img src={avatar} alt={`Avatar ${user.fullName}`} />
                </div>
                <div className='message__info'>
                    {text && (
                        <div className='message__bubble'>
                            <p className='message__text'>{text}</p>
                        </div>
                    )}
                    {isTyping && (
                        <div className='message__typing'>
                            <div className='message__bubble'>
                                <Typing />
                            </div>
                        </div>
                    )}

                    <div className='message__attachments'>
                        <div className='message__attachments--items'>
                            {attachemnts &&
                                attachemnts.map((item, index) => (
                                    <img
                                        src={item.url}
                                        alt={item.filename}
                                        key={index}
                                    />
                                ))}
                        </div>
                    </div>
                    <div className='message__date'>
                        {date && (
                            <p>
                                <Time date={date} />
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

Message.defaultProps = {
    user: {},
};

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
};

export default Message;
