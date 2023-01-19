import React from 'react';
import Select from 'react-select';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import Style from './Popup.module.scss';
import ThisDayItem from "../Home/ThisDayInfo/ThisDayItem";
import {Item} from "../Home/ThisDayInfo/ThisDayInfo";

interface Props {}

export const Popup = ({}: Props) => {
    const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: '20° - ощущается как 17°',
        },
        {
            icon_id: 'pressure',
            name: 'Давление',
            value: '765 мм ртутного столба - нормальное',
        },
        {
            icon_id: 'precipitation',
            name: 'Осадки',
            value: 'Без осадков',
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: '3 м/с юго-запад - легкий ветер',
        },
    ];
    return (
        <>
            <div className={Style.blur}>
                <div className={Style.popup}>
                    <div className={Style.day}>
                        <p className={Style.temp}>20°</p>
                        <p className={Style.name}>Среда</p>
                        <div className={Style.img}>
                            <GlobalSvgSelector id="sun"/>
                        </div>
                        <p className={Style.time}>
                            Время: 21:54
                        </p>
                        <p className={Style.city}>
                            Время: Санкт-Петербург
                        </p>
                    </div>
                    <div className={Style.items}>
                        {items.map((item: Item) => (
                            <ThisDayItem key={item.icon_id} item={item}/>
                        ))}
                    </div>
                    <div className={Style.close}>
                        <GlobalSvgSelector id="close"/>
                    </div>
                </div>
            </div>
        </>
    );
};
