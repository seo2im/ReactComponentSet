import React, { useState, useRef } from 'react'
import { Div, Bar } from './Style'

const useBar = (range :number): [number, () => Promise<void>, () => Promise<void>] => {
    const [percent, setPercent] = useState<number>(0)
    const isLoading = useRef<boolean>(false)

    const delay = (delay: number) => {
        isLoading.current = true
        return new Promise(() => {
            setTimeout(() => { isLoading.current = false }, delay)
        })
    }

    const UP = async () => {
        if (isLoading.current) return
        if (percent == 100) return
        const value = percent + range
        setPercent(value >= 100 ? 100 : value)
        await delay(500)
    }

    const DOWN = async () => {
        if (isLoading.current) return
        if (percent == 0) return
        const value = percent - range
        setPercent(value <= 0 ? 0 : value)
        await delay(500)
    }

    return [percent, UP, DOWN]
}

const Progressbar: React.FC = () => {
    const [percent, UP, DOWN] = useBar(25)


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