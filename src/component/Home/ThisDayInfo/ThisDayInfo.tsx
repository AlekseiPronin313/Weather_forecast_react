import React from "react";
import Style from './ThisDayInfo.module.scss'
import cloud from '../../../assets/images/cloud.png'
import ThisDayItem from "./ThisDayItem";
import {Weather} from "../../../store/types/types";

interface Props {
    weather: Weather
}

export interface Item {
    icon_id: string;
    name: string;
    value: string;
}

const ThisDayInfo = ({weather}: Props) => {
    const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: `${Math.round(weather.main.temp)}° ощущается как ${Math.round(weather.main.feels_like)}°`,
        },
        {
            icon_id: 'pressure',
            name: 'Давление',
            value: `${weather.main.pressure} мм ртутного столба`,
        },
        {
            icon_id: 'precipitation',
            name: 'Осадки',
            value: `${weather.weather["0"].description}`,
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: `${Math.round(weather.wind.speed)} м/с`,
        },
    ];

    return (
        <div className={Style.this_day_info}>
            <ul className={Style.info_items}>
                {items.map((item: Item) => (
                    <ThisDayItem key={item.icon_id} item={item}/>
                ))}
            </ul>
            <img className={Style.cloud} src={cloud} alt='img'/>
        </div>
    )
}

export default ThisDayInfo
