//NOTE/: external
import React from "react";
import orderBy from "lodash/orderBy";

//NOTE/: internal
import "./Dialogs.scss";
import { DialogItem } from "../";

//NOTE/: ant library --->
import { Input, Empty } from "antd";

//NOTE/: fns library --->
import isToday from "date-fns/is_today";

const Dialogs = ({
    items,
    userId,
    onSearch,
    inputValue,
    onSelectDialog,
    currentDialogId,
    unread,
}) => {
    return (
        <div className='dialogs'>
            <div className='dialogs__search'>
                <Input.Search
                    placeholder='Поиск контактов'
                    // onSearch={onSearch}
                    onChange={(evt) => onSearch(evt.target.value)}
                    value={inputValue}
                />
            </div>

            {items.length ? (
                orderBy(items, ["created_at"], ["desc"]).map((item) => (
                    <DialogItem
                        key={item._id}
                        onSelect={onSelectDialog}
                        isMe={item.user._id === userId}
                        currentDialogId={currentDialogId}
                        user={item.user}
                        message={item}
                        unread={99}
                    />
                ))
            ) : (
                <Empty
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                    description='Совпадений не найдено...'
                />
            )}
        </div>
    );
};

export default Dialogs;
