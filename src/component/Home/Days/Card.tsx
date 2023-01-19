import React from "react";
import Style from './Days.module.scss'
import {Day} from "./Days";
import {GlobalSvgSelector} from "../../../assets/icons/global/GlobalSvgSelector";

interface Props {
    item: Day
}

const Card = ({item}: Props) => {
    const {day, icon, day_info, info, temp_day, temp_night} = item
    return (
        <div className={Style.card}>
            <p className={Style.day}>{day}</p>
            <p className={Style.day_info}>{day_info}</p>
            <div className={Style.icon}>
                <GlobalSvgSelector id={icon}/>
            </div>
            <p className={Style.temp_day}>{temp_day}</p>
            <p className={Style.temp_night}>{temp_night}</p>
            <p className={Style.info}>{info}</p>
        </div>
    )
}

export default Card
