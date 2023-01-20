import React from "react";
import Style from "./Header.module.scss";
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import Select from 'react-select'
import {Theme} from '../../context/ThemeContext'
import {useTheme} from "../../hooks/useTheme";

interface Props {

}

const Header = (props: Props) => {
    const theme = useTheme();

    const options = [
        { value: 'city-1', label: 'Рязань' },
        { value: 'city-2', label: 'Актау' },
        { value: 'city-3', label: 'Калининград' }
    ]

    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor:
                theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: theme.theme === Theme.DARK ? '#fff' : '#000',
        }),
    }

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
                <Select
                    defaultValue={options[0]}
                    styles={colourStyles}
                    options={options} />
            </div>
        </header>
    )
}

export default Header
