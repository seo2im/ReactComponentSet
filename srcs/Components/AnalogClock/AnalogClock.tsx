import React, { useState, useEffect } from 'react'
import { Div, Clock, HourHand, SecHand, MinHand, TimeMaker } from './Style'

type tTime = {
    hour: number
    min: number
    sec: number
}
const useClock = (): [ tTime ] => {
    const [time, setTime] = useState({ hour: 0, min: 0, sec: 0})

    const updateTime = () => {
        let { hour, min, sec } = time
        sec += 1
        if (sec > 60) {
            sec = 0
            min += 1
        }
        if (min > 60) {
            hour += 1
            min = 0
        }
        if (hour > 12) hour = 0
        setTime({ hour, min, sec })
    }
    useEffect(() => {
        let timeId: NodeJS.Timeout = null;
        timeId = setTimeout(() => updateTime(), 1000)

        return () => clearTimeout(timeId)
    }, [time])
    
    return [ time ]
}

const AnalogClock: React.FC = () => {
    const [ time ] = useClock()

    return (
        <Div>
            <Clock>
                <HourHand deg={time.hour * 30 + time.min * 0.5}/>
                <MinHand deg={time.min * 30 + time.sec * 0.5}/>
                <SecHand deg={time.sec * 6}/>
                {Array.from({ length: 12 }).map((_, i) => <TimeMaker key={`maker_${i + 1}`} num={i + 1}>{i + 1}</TimeMaker>)}
            </Clock>
        </Div>
    )
} 

export default AnalogClock
