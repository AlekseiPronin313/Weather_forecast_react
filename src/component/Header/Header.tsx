import React from "react";
import Style from "./Header.module.scss";
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";

interface Props {

}

const Header = (props: Props) => {
    return (
        <header className={Style.header}>
            <div className={Style.wrapper}>
                <div className={Style.logo}><GlobalSvgSelector id={'header-logo'}/></div>
                <h1 className={Style.title}>React weather</h1>
            </div>
            <div className={Style.wrapper}>
                <div className={Style.change_theme}><GlobalSvgSelector id={'change_theme'}/></div>
            </div>
        </header>
    )
}

export default Header
