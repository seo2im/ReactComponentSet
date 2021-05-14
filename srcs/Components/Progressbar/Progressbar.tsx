import React, { useState, useRef } from 'react'
import { Div, Bar } from './Style'

const Progressbar: React.FC = () => {
    const [percent, setPercent] = useState<number>(25)
    const isLoading = useRef<boolean>(false)

    /* 지연 함수 */
    const delay = (delay: number) => {
        isLoading.current = true
        return new Promise(() => {
            setTimeout(() => { isLoading.current = false }, delay)
        })
    }

    const UP = async () => {
        if (isLoading.current) return
        if (percent == 100) return
        setPercent(percent + 25)
        await delay(500)
    }
    const DOWN = async () => {
        if (isLoading.current) return
        if (percent == 0) return
        setPercent(percent - 25)
        await delay(500)
    }


    return (
        <>
        <Div>
            <Bar percent={percent}/>
        </Div>
        <button onClick={() => DOWN()}>DOWN</button>
        <button onClick={() => UP()}>UP</button>
        </>
    )
}

export default Progressbar