import React, { useState } from 'react'
import { Div, ToggleButtonDiv, Button, Text } from './Style'

const dummy = ['none', 'bold', 'italic']

const useToggle = (): [number, any, (content: string, i: number) => void] => {
    const [content, setContent] = useState<any>('none')
    const [idx, setIdx] = useState<number>(0)

    const setToggle = (content: string, i: number) => {
        setIdx(i)
        setContent(content)
    }
    
    return [idx, content, setToggle]
}

const ToggleButton: React.FC = () => {
    const [idx, content, setToggle] = useToggle()

    return (
        <Div>
            <ToggleButtonDiv>
            {dummy.map((content, i) => (
                <Button
                    key={`button_${i}`}
                    onClick={() => setToggle(content, i)}
                    click={i === idx}
                    border={i === (dummy.length - 1)}>
                        {content}
                </Button>
            ))}
            </ToggleButtonDiv>
            <Text font={content}>TOGGLE BUTTON</Text>
        </Div>
    )
}

export default ToggleButton
