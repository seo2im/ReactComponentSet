import React, { useState, useEffect } from 'react'
import { Div, Button, Lap, Text } from './Style'

type tTime = {
    min: number
    sec: number
    msec: number
}
const useStopWatch = ()
:[boolean, React.Dispatch<React.SetStateAction<boolean>>, tTime, tTime[], () => void, () => void] => 
{
    const [ isRun, setIsRun ] = useState<boolean>(false)
    const [ time, setTime ] = useState<tTime>({ min: 0, sec: 0, msec: 0 })
    const [ lap, setLap ] = useState<tTime[]>([])
    
    const updateTime = () => {
        setTime(({min, sec, msec}) => {
            msec += 1
            if (msec >= 100) {
                sec += 1
                msec = 0;
            }
            if (sec >= 60) {
                min += 1
                sec = 0
            }
            return { min, sec, msec }
        })
    }

    const lapping = () => {
        setLap([...lap, time])
    }

    const reset = () => {
        setLap([])
        setTime({ min: 0, sec: 0, msec: 0 })
    }

    useEffect(() => {
        let timerId: NodeJS.Timeout = null

        if (isRun) timerId = setInterval(updateTime, 10)
        return () => { clearInterval(timerId) }
    }, [isRun])

    return [ isRun, setIsRun, time, lap, lapping, reset ]
}

const timeSerialize = (() => {
    const format = (n: number) => (n < 10 ? '0' + n : n + '')
    return ({ min, sec, msec}: tTime) => `${format(min)}:${format(sec)}:${format(msec)}`
})()
const StopWatch: React.FC = () => {
    const [isRun, setIsRun, time, lap, lapping, reset] = useStopWatch()

    return (
        <Div>
            <Text>{timeSerialize(time)}</Text>
            <Button onClick={() => setIsRun((isRun) => !isRun)}>
                <Text>{isRun ? 'Stop' : 'Start'}</Text>
            </Button>
            <Button onClick={() => isRun ? lapping() : reset()}>
                <Text>{isRun ? 'Lap' : 'Reset'}</Text>
            </Button>
            <br />
            <Lap>
                <Text>Time</Text>
                {lap.map((time, i) => (
                    <Text key={`time_${i}`}>{timeSerialize(time)}</Text>
                ))}
            </Lap>
        </Div>
    )
}

export default StopWatch