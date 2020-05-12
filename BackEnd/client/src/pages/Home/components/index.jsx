//NOTE/: external
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

//NOTE/: internal
import { AuthContext } from "../../../context/AuthContext";
import { Message, Dialogs } from "../../../components";
import "./Home.scss";

//NOTE/: ant library --->
import {
    UsergroupAddOutlined,
    FormOutlined,
    EllipsisOutlined,
    BgColorsOutlined,
} from "@ant-design/icons";

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
            <div className='contact-list'></div>

            <div className='chat'>
                <div className='chat__sidebar'>
                    <div className='chat__sidebar-header'>
                        <div>
                            <UsergroupAddOutlined className='user-img' />
                            <span>Список диалогов</span>
                        </div>
                        <FormOutlined />
                    </div>

                    {/* //NOTE/: Dialogs ============> */}

                    <div className='chat__sidebar-dialogs'>
                        <Dialogs
                            userId={0}
                            items={[
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
                                    created_at:
                                        "Sun May 10 2020 12:06:41 GMT+0900",
                                    user: {
                                        _id: 0,
                                        fullname: "Michael jackson",
                                        avatar:
                                            "https://sun9-2.userapi.com/c858224/v858224987/1cd45f/wS-2xDSX9t8.jpg?ava=1",
                                    },
                                },
                            ]}
                        />
                    </div>
                </div>

                <div className='chat__dialog'>
                    <div className='chat__dialog-header'>
                        <div className='chat__dialog-header-center'>
                            <b className='chat__dialog-username'>Aleksey</b>
                            <div className='chat__dialog-status'>
                                <div className='status status--online'>
                                    online
                                </div>
                            </div>
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
                </div>
            </div>

            <div className='chat-body'>
                {/* // NOTE/: */}
                <Message
                    avatar={
                        "https://sun9-28.userapi.com/c854424/v854424294/1bf2d6/H65Wk4n6aFk.jpg?ava=1"
                    }
                    text='hello how are you what do you need ?'
                    date='Sat May 05 2020 13:1:28 GMT+0900'
                />

                <Message
                    avatar={
                        "https://sun1-86.userapi.com/5YDbNhS0f1mr4_7MP7QmdL6r8glHbacefDq6FA/-X64idwe4X4.jpg?ava=1"
                    }
                    text={
                        "Hello How are you  asdasda asdasdas asd asdasdas asdasdasdas asdasdas asdasdas asdasd dasdasd aasasdasd "
                    }
                    date='Sat May 09 2020 13:11:28 GMT+0900'
                    user={{}}
                    isMe={true}
                    isReaded={true}
                    attachments={[
                        {
                            filename: "image.jpg",
                            url:
                                "https://source.unsplash.com/100x100/?random=1&nature,water",
                        },
                        {
                            filename: "image.jpg",
                            url:
                                "https://source.unsplash.com/100x100/?random=2&nature,water",
                        },
                        {
                            filename: "image.jpg",
                            url:
                                "https://source.unsplash.com/100x100/?random=3&nature,water",
                        },
                        {
                            filename: "image.jpg",
                            url:
                                "https://source.unsplash.com/100x100/?random=3&nature,water",
                        },
                        {
                            filename: "image.jpg",
                            url:
                                "https://source.unsplash.com/100x100/?random=3&nature,water",
                        },
                        {
                            filename: "image.jpg",
                            url:
                                "https://source.unsplash.com/100x100/?random=3&nature,water",
                        },
                        {
                            filename: "image.jpg",
                            url:
                                "https://source.unsplash.com/100x100/?random=3&nature,water",
                        },
                    ]}
                />
                <Message
                    avatar={
                        "https://sun9-28.userapi.com/c854424/v854424294/1bf2d6/H65Wk4n6aFk.jpg?ava=1"
                    }
                    isTyping={true}
                />
                <Message
                    avatar={
                        "https://sun9-28.userapi.com/c854424/v854424294/1bf2d6/H65Wk4n6aFk.jpg?ava=1"
                    }
                    attachments={[
                        {
                            filename: "image.jpg",
                            url:
                                "https://source.unsplash.com/100x100/?random=1&nature,water",
                        },
                    ]}
                    date='Sat May 09 2020 18:11:28 GMT+0900'
                />
                <Message
                    date='Sat May 09 2020 18:11:28 GMT+0900'
                    text='hi how are you ?'
                    isMe={true}
                    isReaded={false}
                />

                <Message
                    avatar={
                        "https://sun9-28.userapi.com/c854424/v854424294/1bf2d6/H65Wk4n6aFk.jpg?ava=1"
                    }
                    date='Sat May 09 2020 18:11:28 GMT+0900'
                    audio='https://notificationsounds.com/soundfiles/38913e1d6a7b94cb0f55994f679f5956/file-6c_early-sunrise-song.mp3'
                />
            </div>
            <div className='current-dialog'></div>
        </div>
    );
};

export default Home;
