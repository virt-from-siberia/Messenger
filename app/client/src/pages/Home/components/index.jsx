//NOTE/: external
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

//NOTE/: internal
import { AuthContext } from "../../../context/AuthContext";
import { Status, Dashboard } from "../../../components";
import { Dialogs, Messages } from "../../../containers";
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
                <Dashboard />

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
                        <Dialogs userId={0} />
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
