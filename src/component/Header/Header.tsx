import React from "react";
import Style from "./Header.module.scss";
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import {Theme} from '../../context/ThemeContext'
import {useTheme} from "../../hooks/useTheme";

interface Props {

}

const Header = (props: Props) => {
    const theme = useTheme();

    const changeTheme = () => {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    }

    return (
        <header className={Style.header}>
            <div className={Style.wrapper}>
                <div className={Style.logo}><GlobalSvgSelector id={'header-logo'}/></div>
                <h1 className={Style.title}>React weather</h1>
            </div>
            <div className={Style.wrapper}>
                <div className={Style.change_theme} onClick={changeTheme}>
                    <GlobalSvgSelector id={'change-theme'}/></div>
                <input className={Style.input}/>
                <button className={Style.button}>Поиск</button>
            </div>
        </header>
    )
}

export default Header
