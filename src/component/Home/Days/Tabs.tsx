import React from "react";
import Style from './Days.module.scss'

interface Props {}

interface Tab {
    value: string
}
const Tabs = (props: Props) => {

    const tabs: Tab[] = [
        {
            value: 'На неделю',
        },
        {
            value: 'На 10 дней',
        },
        {
            value: 'На месяц',
        },
    ];

    return (
        <div className={Style.tabs}>
            <div className={Style.wrapper}>
                {tabs.map(tab => (
                        <button className={Style.tab} key={tab.value}>{tab.value}</button>
                    ))}
            </div>
            <button className={Style.cancel}>Отменить</button>
        </div>
    )
}

export default Tabs
