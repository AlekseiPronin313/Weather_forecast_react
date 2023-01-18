import React from "react";
import Style from './ThisDayInfo.module.scss'
import {Item} from "./ThisDayInfo";
import {IndicatorSvgSelector} from "../../../assets/icons/indicators/IndicatorSvgSelector";

interface Props {
    item: Item
}

const ThisDayItem = ({item}: Props) => {
    const { icon_id, name, value } = item;
    return (
        <li className={Style.item}>
            <div className={Style.indicator}>
                <IndicatorSvgSelector id={icon_id}/>
            </div>
            <p className={Style.indicator__name}>{name}</p>
            <p className={Style.indicator__value}>{value}</p>
        </li>
    )
}

export default ThisDayItem
