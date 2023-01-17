import React from "react";
import Style from "./Header.module.scss";
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import Select from 'react-select'
interface Props {

}

const Header = (props: Props) => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <header className={Style.header}>
            <div className={Style.wrapper}>
                <div className={Style.logo}><GlobalSvgSelector id={'header-logo'}/></div>
                <h1 className={Style.title}>React weather</h1>
            </div>
            <div className={Style.wrapper}>
                <div className={Style.change_theme}><GlobalSvgSelector id={'change_theme'}/></div>
                <Select className={Style.select} options={options} />
            </div>
        </header>
    )
}

export default Header
