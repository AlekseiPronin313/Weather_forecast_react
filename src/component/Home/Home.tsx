import React from "react";
import Style from './Home.module.scss'
import ThisDay from "./ThisDay/ThisDay";

interface Props {

}

const Home = (props: Props) => {
    return (
        <div className={Style.home}>
           <ThisDay/>
        </div>
    )
}

export default Home
