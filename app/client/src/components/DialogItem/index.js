//NOTE/: external
import React from "react";
import classNames from "classnames";

//NOTE/: internal
import { Time, MessageStatus } from "../";
import { AvatarDialogs } from "../";
import "./DialogItem.scss";

//NOTE/: fns library --->
import format from "date-fns/format";
import isToday from "date-fns/is_today";

const getMessageTime = (created_at) => {
    if (isToday(created_at)) {
        return format(created_at, "HH:mm");
    } else {
        return format(created_at, "DD. MM. YYYY");
    }
};

const DialogItem = ({
    user,
    message,
    unread,
    isMe,
    onSelect,
    currentDialogId,
}) => {
    //FIXME: CONSOLE LOG ===========>
    // console.log(message);
    return (
        <div
            className={classNames("dialogs__item ", {
                "dialogs__item--online": user.isOnline,
                "dialogs__item--selected": currentDialogId === message._id,
            })}
            onClick={() => {
                onSelect(message._id);
            }}
        >
            <div className='dialogs__item-avatar'>
                {/* <img src={user.avatar} alt={`${user.fullname} avatar}`} />*/}
                <AvatarDialogs user={user} />
            </div>
            <div className='dialogs__item-info'>
                <div className='dialogs__item-info-top'>
                    <b>{user.fullname}</b>
                    <span>{getMessageTime(message.created_at)}</span>
                </div>
                <div className='dialogs__item-info-bottom'>
                    <p>{message.text}</p>
                    {/*//NOTE/: если userId совпадает с _id отправителя, то сообщению присваивается isMe */}
                    {isMe && <MessageStatus isMe={true} isReaded={false} />}
                    {!isMe && unread > 0 && (
                        <div className='dialogs__item-info-bottom-count'>
                            {unread > 99 ? "+99" : unread}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DialogItem;
