//external
import React, { useRef, useState } from "react";
import classNames from "classnames";
// import PropTypes from "prop-types";

//material
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Button from "@material-ui/core/Button";
import TuneIcon from "@material-ui/icons/Tune";
import DeleteIcon from "@material-ui/icons/Delete";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
//internal
import useOutsideClick from "@/hooks/outsideClick.hook";

const UserSetting = () => {
    // const [loading, setLoading] = useState(true);
    const [show, setSate] = useState(false);
    const [slide, setSlide] = useState({
        slide: false,
        name: "",
    });
    const ref = useRef();

    useOutsideClick(ref, () => {
        if (show) setSate(false);
        setSlide({ slide: false, name: "" });
    });

    const changeFullName = (
        <>
            <p className='current-val current-fullname'>Aleksey Elchin</p>

            <input
                type='text'
                name='changename'
                autoComplete='off'
                placeholder='Введите имя'
                spellCheck='false'
                // value={}
                // onChange={}
            />

            <input
                type='text'
                name='changesecondname'
                autoComplete='off'
                placeholder='Введите фамилию'
                spellCheck='false'
                // value={}
                // onChange={}
            />
            <Button className=''>Сохранить изменения</Button>
        </>
    );

    const changePhone = (
        <>
            <p className='current-val current-phone'>8914-453-5974</p>
            <input
                type='tel'
                name='changphone'
                autoComplete='off'
                placeholder='Введите телефон'
                spellCheck='false'
                // value={}
                // onChange={}
            />
            <Button className=''>Сохранить изменения</Button>
        </>
    );

    const changeEmail = (
        <>
            <p className='current-val current-email'>alonso85@mail.ru</p>
            <input
                type='email'
                name='changemail'
                autoComplete='off'
                placeholder='Введите Email'
                spellCheck='false'
                // value={}
                // onChange={}
            />
            <Button className=''>Сохранить изменения</Button>
        </>
    );
    const changeOptions = (
        <>
            <p className='current-val '></p>

            <Button className='delete-btn' startIcon={<DeleteIcon />}>
                удалить профиль
            </Button>
        </>
    );

    const changePassword = (
        <>
            <p className='current-val current-password'>Введите новый пароль</p>
            <input
                type='password'
                name='changepassword'
                autoComplete='off'
                placeholder='Введите пароль'
                spellCheck='false'
                // value={}
                // onChange={}
            />
            <input
                type='password'
                name='cconfirmpassword'
                autoComplete='off'
                placeholder='Подтвердите  пароль'
                spellCheck='false'
                // value={}
                // onChange={}
            />
            <Button className=''>Сохранить изменения</Button>
        </>
    );

    const logOut = (
        <>
            <p className='current-val '>Выйти из системы</p>
            <Button className='exit-btn' startIcon={<ExitToAppIcon />}>
                Выйти
            </Button>
        </>
    );

    return (
        <div className='item profile'>
            <div className='item__header' onClick={() => setSate(!show)}>
                <AccountCircleOutlinedIcon />
            </div>

            <div
                className={classNames("item__dropdown", {
                    "item__dropdown-show": show,
                })}
                ref={ref}
            >
                <div className='item__dropdown-body'>
                    <div
                        className={classNames("body-block", {
                            "body-block_slide": slide.slide,
                        })}
                    >
                        <div
                            className='body-block-item name'
                            onClick={() =>
                                setSlide({ slide: true, name: "name" })
                            }
                        >
                            <AccountBoxOutlinedIcon />
                            <p>Aleksey Elchin</p>
                        </div>
                        <div
                            className='body-block-item phone'
                            onClick={() =>
                                setSlide({ slide: true, name: "phone" })
                            }
                        >
                            <PhoneOutlinedIcon />
                            <p>8914-453-5974</p>
                        </div>
                        <div
                            className='body-block-item email'
                            onClick={() =>
                                setSlide({ slide: true, name: "email" })
                            }
                        >
                            <MailOutlineOutlinedIcon />
                            <p>alonso85@mail.ru</p>
                        </div>
                        <div
                            className='body-block-item language'
                            onClick={() =>
                                setSlide({
                                    slide: true,
                                    name: "language",
                                })
                            }
                        >
                            <LanguageOutlinedIcon />
                            <p>Язык Русский</p>
                        </div>
                        <div
                            className='body-block-item password'
                            onClick={() =>
                                setSlide({
                                    slide: true,
                                    name: "password",
                                })
                            }
                        >
                            <LockOpenOutlinedIcon />
                            <p>Пароль</p>
                        </div>
                        <div
                            className='body-block-item options'
                            onClick={() =>
                                setSlide({
                                    slide: true,
                                    name: "options",
                                })
                            }
                        >
                            <TuneIcon />
                            <p>Настройки</p>
                        </div>
                        <div
                            className='body-block-item exit'
                            onClick={() =>
                                setSlide({
                                    slide: true,
                                    name: "exit",
                                })
                            }
                        >
                            <ExitToAppOutlinedIcon />
                            <p>Выход</p>
                        </div>
                    </div>
                    <div
                        className={classNames("body-block-about", {
                            "body-block-about_slide": slide.slide,
                        })}
                    >
                        <div className='eidt '>
                            <div className='edit__header'>
                                <div
                                    className='edit__header-arrow'
                                    onClick={() =>
                                        setSlide({
                                            slide: false,
                                            name: "",
                                        })
                                    }
                                >
                                    <ArrowBackIcon />
                                </div>
                                <div className='edit__header-title'>
                                    {slide.name === "name" ? (
                                        <p>Изменить Имя</p>
                                    ) : null}
                                    {slide.name === "phone" ? (
                                        <p>Изменить телефон</p>
                                    ) : null}
                                    {slide.name === "email" ? (
                                        <p>Изменить Email</p>
                                    ) : null}
                                    {slide.name === "password" ? (
                                        <p>Изменить пароль</p>
                                    ) : null}
                                    {slide.name === "language" ? (
                                        <p>Изменить язык</p>
                                    ) : null}
                                    {slide.name === "options" ? (
                                        <p>Настройки</p>
                                    ) : null}
                                    {slide.name === "exit" ? <p></p> : null}
                                </div>
                            </div>
                            <div className='edit__body '>
                                {slide.name === "name" ? changeFullName : null}
                                {slide.name === "phone" ? changePhone : null}
                                {slide.name === "password"
                                    ? changePassword
                                    : null}
                                {slide.name === "email" ? changeEmail : null}
                                {slide.name === "options"
                                    ? changeOptions
                                    : null}
                                {slide.name === "exit" ? logOut : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserSetting;
