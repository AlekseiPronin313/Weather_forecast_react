import React from "react";
import Style from './ThisDay.module.scss'
import {GlobalSvgSelector} from "../../../assets/icons/global/GlobalSvgSelector";

interface Props {

}

const ThisDay = (props: Props) => {
    return (
        <div className={Style.this_day}>
            <div className={Style.top_block}>
                <div className={Style.wrapper}>
                <div className={Style.temp}>20°</div>
                <p className={Style.day_name}>Сегодня</p>
                </div>
                <GlobalSvgSelector id='sun'/>
            </div>
            <div className={Style.bottom_block}>
                <p className={Style.time}>Время: 21:54</p>
                <p className={Style.city}>Город: Санкт-Петербург</p>
            </div>
        </div>
    )
}

export default ThisDay
