//NOTE/: external
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

//NOTE/: internal
import { AuthContext } from "../../../context/AuthContext";
import { Messages, Status, Dashboard } from "../../../components";
import { Dialogs } from "../../../containers";
import "./Home.scss";

//NOTE/: ant library --->
import {
    UsergroupAddOutlined,
    FormOutlined,
    EllipsisOutlined,
    BgColorsOutlined,
} from "@ant-design/icons";
import ChatInput from "../../../components/ChatInput";

const Home = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);
    //NOTE/: LOG OUT FUCTION !!!!
    const logoutHandler = (evt) => {
        evt.preventDefault();
        auth.logout();
        history.push("/");
    };
    return (
        <div className='home'>
            <div className='chat'>
                {/* Important_NOTE///:  DASHBOARD*/}
                {/* <Dashboard /> */}

                {/* Important_NOTE///: SIDEBAR*/}
                <div className='chat__sidebar'>
                    <div className='chat__sidebar-header'>
                        <div>
                            <UsergroupAddOutlined className='user-img' />
                            <span>Список диалогов</span>
                        </div>
                        <FormOutlined />
                    </div>

                    {/* Important_NOTE///:  DIALOGS*/}
                    <div className='chat__sidebar-dialogs'>
                        <Dialogs
                            userId={0}
                            items={[
                                {
                                    _id: "1",
                                    text:
                                        "We are the champions!!! Our frands and we need to improuve our skills",
                                    isRead: false,
                                    created_at: "Wed May 13 2020 12:46:19 ",
                                    user: {
                                        _id: 1,
                                        fullname: "Aleksey Elchin",
                                        avatar: null,
                                        isOnline: true,
                                    },
                                },
                                {
                                    _id: "2",
                                    text: "We are the champions!!! Our ",
                                    isRead: false,
                                    created_at: "Wed May 11 2020 12:46:19 ",
                                    user: {
                                        _id: 2,
                                        fullname: "Maksim Elchin",
                                        avatar:
                                            "https://sun9-2.userapi.com/c858224/v858224987/1cd45f/wS-2xDSX9t8.jpg?ava=1",
                                        isOnline: true,
                                    },
                                },
                                {
                                    _id: "3",
                                    text: " we need to improuve our skills",
                                    isRead: true,
                                    created_at: "Wed May 13 2020 11:26:19 ",
                                    user: {
                                        _id: 3,
                                        fullname: "Ivan Elchin",
                                        avatar: null,
                                        isOnline: false,
                                    },
                                },
                                {
                                    _id: "4",
                                    text:
                                        " Our frands and we need to improuve our skills",
                                    isRead: true,
                                    created_at: "Wed May 13 2020 12:46:19 ",
                                    user: {
                                        _id: 4,
                                        fullname: "Daneil Elchin",
                                        avatar:
                                            "https://sun9-28.userapi.com/c854424/v854424294/1bf2d6/H65Wk4n6aFk.jpg?ava=1",
                                        isOnline: false,
                                    },
                                },
                                {
                                    _id: "5",
                                    text:
                                        "We are the champions!!! Our frands and we need to improuve our skills",
                                    isRead: true,
                                    created_at: "Wed May 13 2020 12:46:19 ",
                                    user: {
                                        _id: 5,
                                        fullname: "Aleksey Elchin",
                                        avatar: null,
                                        isOnline: true,
                                    },
                                },
                                {
                                    _id: "6",
                                    text:
                                        "We are the champions!!! Our frands and we need to improuve our skills",
                                    isRead: true,
                                    created_at: "Wed May 13 2020 12:46:19 ",
                                    user: {
                                        _id: 6,
                                        fullname: "Yaroslav Elchin",
                                        avatar: null,
                                        isOnline: true,
                                    },
                                },
                                {
                                    _id: Math.random(),
                                    text:
                                        "We are the champions!!! Our frands and we need to improuve our skills",
                                    isRead: true,
                                    created_at: new Date(),
                                    user: {
                                        _id: 1,
                                        fullname: "Aleksey Elchin",
                                        avatar: null,
                                        isOnline: true,
                                    },
                                },
                                {
                                    _id: Math.random(),
                                    text: "Hello how are you ?",
                                    isRead: false,
                                    created_at:
                                        "Sun May 10 2020 12:06:41 GMT+0900",
                                    user: {
                                        _id: 0,
                                        fullname: "Michael jackson",
                                        avatar:
                                            "https://sun9-2.userapi.com/c858224/v858224987/1cd45f/wS-2xDSX9t8.jpg?ava=1",
                                    },
                                },
                                {
                                    _id: Math.random(),
                                    text: "Hello how are you ?",
                                    isRead: false,
                                    created_at:
                                        "Sun May 10 2020 12:06:41 GMT+0900",
                                    user: {
                                        _id: 0,
                                        fullname: "Michael jackson",
                                        avatar:
                                            "https://sun9-2.userapi.com/c858224/v858224987/1cd45f/wS-2xDSX9t8.jpg?ava=1",
                                    },
                                },
                                {
                                    _id: Math.random(),
                                    text: "Hello how are you ?",
                                    isRead: false,
                                    created_at:
                                        "Sun May 10 2020 12:06:41 GMT+0900",
                                    user: {
                                        _id: 0,
                                        fullname: "Michael jackson",
                                        avatar:
                                            "https://sun9-2.userapi.com/c858224/v858224987/1cd45f/wS-2xDSX9t8.jpg?ava=1",
                                    },
                                },
                                {
                                    _id: Math.random(),
                                    text: "Hello how are you ?",
                                    isRead: false,
                                    created_at:
                                        "Sun May 10 2020 12:06:41 GMT+0900",
                                    user: {
                                        _id: 0,
                                        fullname: "Michael jackson",
                                        avatar:
                                            "https://sun9-2.userapi.com/c858224/v858224987/1cd45f/wS-2xDSX9t8.jpg?ava=1",
                                    },
                                },
                                {
                                    _id: Math.random(),
                                    text: "Hello how are you ?",
                                    isRead: false,
                                    created_at:
                                        "Sun May 10 2020 12:06:41 GMT+0900",
                                    user: {
                                        _id: 0,
                                        fullname: "Michael jackson",
                                        avatar:
                                            "https://sun9-2.userapi.com/c858224/v858224987/1cd45f/wS-2xDSX9t8.jpg?ava=1",
                                    },
                                },
                                {
                                    _id: Math.random(),
                                    text: "Hello how are you ?",
                                    isRead: false,
                                    created_at:
                                        "Sun May 10 2020 12:06:41 GMT+0900",
                                    user: {
                                        _id: 0,
                                        fullname: "Michael jackson",
                                        avatar:
                                            "https://sun9-2.userapi.com/c858224/v858224987/1cd45f/wS-2xDSX9t8.jpg?ava=1",
                                    },
                                },
                                {
                                    _id: "7",
                                    text:
                                        "We are the champions!!! Our frands and we need to improuve our skills",
                                    isRead: true,
                                    created_at: "Wed May 13 2020 12:46:19 ",
                                    user: {
                                        _id: 7,
                                        fullname: "Aleksey Elchin",
                                        avatar: null,
                                        isOnline: true,
                                    },
                                },
                                {
                                    _id: "8",
                                    text:
                                        "We are the champions!!! Our frands and we need to improuve our skills",
                                    isRead: true,
                                    created_at: "Wed May 13 2020 12:46:19 ",
                                    user: {
                                        _id: 8,
                                        fullname: "Aleksey Elchin",
                                        avatar: null,
                                        isOnline: true,
                                    },
                                },
                                {
                                    _id: "9",
                                    text:
                                        "We are the champions!!! Our frands and we need to improuve our skills",
                                    isRead: true,
                                    created_at: "Wed May 13 2020 12:46:19 ",
                                    user: {
                                        _id: 9,
                                        fullname: "Michael Elchin",
                                        avatar: null,
                                        isOnline: true,
                                    },
                                },
                                {
                                    _id: "10",
                                    text:
                                        "We are the champions!!! Our frands and we need to improuve our skills",
                                    isRead: true,
                                    created_at: "Wed May 13 2020 12:46:19 ",
                                    user: {
                                        _id: 10,
                                        fullname: "Aleksey Elchin",
                                        avatar: null,
                                        isOnline: true,
                                    },
                                },
                            ]}
                        />
                    </div>
                </div>

                {/* Important_NOTE///:  MESSAGES*/}
                <div className='chat__dialog'>
                    <div className='chat__dialog-header'>
                        <div></div>
                        <div className='chat__dialog-header-center'>
                            <b className='chat__dialog-username'>
                                Aleksey Elchin
                            </b>
                            {/*<div className='chat__dialog-status'>*/}
                            {/*    <div className='status status--online'>*/}
                            {/*        online*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <Status online={true} />
                        </div>
                        <div>
                            <BgColorsOutlined
                                style={{
                                    paddingRight: "20px",
                                    fontSize: "20px",
                                    cursor: "pointer",
                                }}
                            />
                            <EllipsisOutlined
                                className='img'
                                style={{ fontSize: "16px", cursor: "pointer" }}
                            />
                        </div>
                    </div>
                    {/* Important_NOTE///:  MESSAGES*/}
                    <div className='chat__dialog-messages'>
                        <Messages />
                    </div>
                    {/* Important_NOTE///:  CHAT INPUT*/}
                    <div className='chat__dialog-input'>
                        <ChatInput />
                    </div>
                </div>
            </div>

            <div className='chat-body'>{/* // NOTE/: */}</div>
            <div className='current-dialog'></div>
        </div>
    );
};

export default Home;
