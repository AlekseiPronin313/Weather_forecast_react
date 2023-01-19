import React from "react";
import Style from './Days.module.scss'
import Card from "./Card";
import Tabs from "./Tabs";

interface Props {}

export interface Day {
    day: string
    day_info: string
    icon: string
    temp_day: string
    temp_night: string
    info: string
}

const Days = (props: Props) => {

    const days: Day[] = [
        {
            day: 'Сегодня',
            day_info: '28 авг',
            icon: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            day: 'Завтра',
            day_info: '29 авг',
            icon: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'небольшой дождь и солнце',
        },
        {
            day: 'Ср',
            day_info: '30 авг',
            icon: 'small_rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'небольшой дождь',
        },
        {
            day: 'Чт',
            day_info: '28 авг',
            icon: 'mainly_cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            day: 'Пт',
            day_info: '28 авг',
            icon: 'rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            day: 'Сб',
            day_info: '28 авг',
            icon: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            day: 'Вс',
            day_info: '28 авг',
            icon: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
    ];

    return (
        <>
            <Tabs/>
            <div className={Style.days}>{
                days.map((item: Day) => (
                    <Card key={item.day} item={item}/>
                ))}
            </div>
        </>

    )
}

export default Days
