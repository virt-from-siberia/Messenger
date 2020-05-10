//NOTE/: external
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

//NOTE/: internal
import { AuthContext } from "../../../context/AuthContext";
import { Message, Dialogs } from "../../../components";
import "./Home.scss";

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
        <div className='home-page'>
            <h1>Home</h1>
            <div className='contact-list'></div>
            <div className='dialogs-list'>
                <Dialogs
                    userId={0}
                    items={[
                        {
                            _id: Math.random(),
                            text:
                                "We are the champions!!! Our frands and we need to improuve our skills",
                            isRead: false,
                            created_at: new Date(),
                            user: {
                                _id: 1,
                                fullname: "Aleksey Elchin",
                                avatar: null,
                            },
                        },
                        {
                            _id: Math.random(),
                            text: "Hello how are you ?",
                            created_at: "Sun May 10 2020 12:06:41 GMT+0900",
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
                    avatar={
                        "https://sun9-28.userapi.com/c854424/v854424294/1bf2d6/H65Wk4n6aFk.jpg?ava=1"
                    }
                    date='Sat May 09 2020 18:11:28 GMT+0900'
                    text='hi how are you ?'
                    isMe={true}
                    isReaded={false}
                />
            </div>
            <div className='current-dialog'></div>
        </div>
    );
};

export default Home;
