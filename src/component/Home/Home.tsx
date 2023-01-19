import React from "react";
import Style from './Home.module.scss'
import ThisDay from "./ThisDay/ThisDay";
import ThisDayInfo from "./ThisDayInfo/ThisDayInfo";
import Days from "./Days/Days";

interface Props {

}

const Home = (props: Props) => {
    return (
        <section className={Style.home}>
            <div className={Style.wrapper}>
                <ThisDay/>
                <ThisDayInfo/>
            </div>
            <Days/>
        </section>
    )
}

export default Home
