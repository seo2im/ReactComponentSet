import React, { useState, useCallback } from 'react'
import { Div, Slide, Card, Controller } from './Style'

const cardColor = ['red', 'blue', 'yellow']
const width = 500
const height = 200

const Carousel: React.FC = () => {
    const [idx, setIdx] = useState<number>(1)
    const [isMove, setIsMove ] = useState<boolean>(false)
    const [duration, setDuration] = useState<number>(500)
    const cardList = useCallback((contents: any[]) => {
        return [contents[contents.length - 1], ...contents, contents[0]]
    }, [cardColor])

    const move = useCallback((move: number) => {
        if (isMove) return
        else setIsMove(true)
        setDuration(500)
        setIdx(idx + move)
    }, [cardColor])

    const transitionEnd = () => {
        setIsMove(false)
        if (idx === 0) {
            setDuration(0)
            setIdx(cardColor.length)
        }
        if (idx === cardColor.length + 2) {
            setDuration(0)
            setIdx(0)
        }
    }

    return (
        <Div width={width} height={height}>
            <Slide width={width} height={height} duration={duration} num={cardColor.length + 2} idx={idx} onTransitionEnd={transitionEnd}>
                {cardList(cardColor).map((color, i) => (
                    <Card 
                        key={`card_${i}`}
                        width={width}
                        height={height}
                        color={color} />
                ))}
            </Slide>
            <Controller position="left" onClick={() => move(-1)}>{'<<'}</Controller>
            <Controller position="right" onClick={() => move(1)}>{'>>'}</Controller>
        </Div>
    )
}

export default Carousel
