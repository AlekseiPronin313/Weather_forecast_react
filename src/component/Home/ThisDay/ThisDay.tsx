import React from "react";
import Style from './ThisDay.module.scss'
import {GlobalSvgSelector} from "../../../assets/icons/global/GlobalSvgSelector";
import {Weather} from "../../../store/types/types";

interface Props {
    weather: Weather
}

const ThisDay = ({weather}: Props) => {

    return (
        <div className={Style.this_day}>
            <div className={Style.top_block}>
                <div className={Style.wrapper}>
                <div className={Style.temp}>{Math.round(weather.main.temp)}°</div>
                <p className={Style.day_name}>Сегодня</p>
                </div>
                <GlobalSvgSelector id={weather.weather["0"].icon}/>
            </div>
            <div className={Style.bottom_block}>
                <p className={Style.time}>Время: 21:54</p>
                <p className={Style.city}>Город: {weather.name}</p>
            </div>
        </div>
    )
}

export default ThisDay
