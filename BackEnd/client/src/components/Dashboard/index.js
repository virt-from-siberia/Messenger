import React from "react";
import {
    UserAddOutlined,
    SettingOutlined,
    QuestionCircleOutlined,
    CommentOutlined,
    MenuOutlined,
} from "@ant-design/icons";

import instagram from "../../assets/img/social/inst.png";
import twit from "../../assets/img/social/twit.png";
import facebook from "../../assets/img/social/facebook.png";
import vk from "../../assets/img/social/vk.png";
import ok from "../../assets/img/social/ok.png";
import skype from "../../assets/img/social/skype.png";
import viber from "../../assets/img/social/viber.png";
import wats from "../../assets/img/social/wats.png";

import "./Dashboard.scss";

export const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className='dashboard-social'>
                <div className='hamburger'>
                    <MenuOutlined />
                </div>
                <div className='social-block'>
                    <div className='social-block-item'>
                        <img src={instagram} alt='instagram' />
                    </div>
                    <div className='social-block-item'>
                        <img src={twit} alt='instagram' />
                    </div>
                    <div className='social-block-item'>
                        <img src={facebook} alt='instagram' />
                    </div>
                    <div className='social-block-item'>
                        <img src={vk} alt='instagram' />
                    </div>
                    <div className='social-block-item'>
                        <img src={ok} alt='instagram' />
                    </div>
                    <div className='social-block-item'>
                        <img src={skype} alt='instagram' />
                    </div>
                    <div className='social-block-item'>
                        <img src={viber} alt='instagram' />
                    </div>
                    <div className='social-block-item'>
                        <img src={wats} alt='instagram' />
                    </div>
                </div>
            </div>

            <div className='dashboard-body'>
                <div className='dashboard__header'>
                    <div className='dashboard__header-text'>Messenger</div>
                    <div className='dashboard__header-invite'>
                        <UserAddOutlined />
                    </div>
                </div>
                <div className='dashboard__infoblock'>
                    <div className='dashboard__infoblock-messages'>
                        <ul className='messages'>
                            <li>Все сообшения</li>
                            <li>Непрочитанные</li>
                            <li>Важные</li>
                        </ul>

                        <ul className='counter'>
                            <li>7</li>
                            <li>15</li>
                            <li>12</li>
                        </ul>
                    </div>

                    <div className='dashboard__infoblock-groups'>
                        <ul className='groups'>
                            <li>Моя группа</li>
                            <li>Группа Чита</li>
                            <li>Еше группа</li>
                            <li>Одна группа</li>
                        </ul>

                        <ul className='counter'>
                            <li>0</li>
                            <li>5</li>
                            <li>2</li>
                        </ul>
                    </div>
                    <div className='dashboard__infoblock-settings'>
                        <ul className='settings'>
                            <div className='settings-item'>
                                <li>Помошь</li>
                                <QuestionCircleOutlined />
                            </div>
                            <div className='settings-item'>
                                <li>Настройки</li>
                                <SettingOutlined />
                            </div>
                            <div className='settings-item'>
                                <li>Обратная связь</li>
                                <CommentOutlined />
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
