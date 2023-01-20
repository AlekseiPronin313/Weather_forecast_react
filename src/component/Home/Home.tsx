import React, {useEffect} from "react";
import Style from './Home.module.scss'
import ThisDay from "./ThisDay/ThisDay";
import ThisDayInfo from "./ThisDayInfo/ThisDayInfo";
import Days from "./Days/Days";
import {useCustomDispatch, useCustomSelector} from "../../hooks/store";
import {fetchCurrentWeather} from "../../store/thunks/fetchCurrentWeather";
import {selectCurrentWeatherData} from "../../store/selectors";

interface Props {

}

const Home = (props: Props) => {
    const dispatch = useCustomDispatch()
    const {weather} = useCustomSelector(selectCurrentWeatherData)

    useEffect(() => {
        dispatch(fetchCurrentWeather('paris'))
    }, [])
    return (
        <section className={Style.home}>
            <div className={Style.wrapper}>
                <ThisDay weather={weather}/>
                <ThisDayInfo/>
            </div>
            <Days/>
        </section>
    )
}

export default Home
