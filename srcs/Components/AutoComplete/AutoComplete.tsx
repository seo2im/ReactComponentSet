import React, { useState } from 'react'
import { Div, Input, AutoItems, Item } from './Style'
import fetchData from './fetchData'

const debounce = (callback: (...args: any[]) => void, delayTime: number) => {
    let timeId: NodeJS.Timeout = null

    return (...args: any[]) => {
        if (timeId) clearTimeout(timeId)
        
        timeId = setTimeout(() => {
            callback(...args)
            clearTimeout(timeId)
        }, delayTime)
    }
}

const AutoComplete: React.FC = () => {
    const [text, setText] = useState<string>('')
    const [autoText, setAutoText] = useState<string[]>([])
    const [display, setDisplay] = useState<string>('none')
    const [overlay, setOverlay] = useState<boolean>(false)
    
    const getAutoText = debounce(async (text: string) => {
        const autos = await fetchData(text)
        setAutoText(autos)
    }, 500)


    return (
        <Div>
            <Input 
                value={text}
                onChange={e => setText(e.target.value)}
                onKeyUp={() =>  {
                    getAutoText(text)
                    setDisplay('block')
                }}
                onFocus={() => setDisplay('block')}
                onBlur={() => {
                    if (overlay) return
                    setDisplay('none')
                }}
                />
            <AutoItems display={display}
                onMouseOver={() => setOverlay(true)}
                onMouseOut={() => setOverlay(false)}>
                {autoText.map((text, i) => (
                    <Item key={`item_${i}`}
                        onClick={() => {
                            setText(text)
                            setDisplay('none')
                            }}>
                        {text}
                    </Item>
                ))}
            </AutoItems>
        </Div>
    )
}

export default AutoComplete