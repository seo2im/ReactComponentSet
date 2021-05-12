import React, { useState, useRef, useEffect } from 'react'
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

const useAutoComplete = ()
: [string, string[], string, 
(text: string) => void,
(display: string) => void,
(overlay: boolean) => void,
() => void,
() => void, 
(auto: string) => void] => {
    const [text, setText] = useState<string>('')
    const [autoText, setAutoText] = useState<string[]>([])
    const [display, setDisplay] = useState<string>('none')
    const [overlay, setOverlay] = useState<boolean>(false)

    const getAutoText = debounce(async (text: string) => {
        const autos = await fetchData(text)
        setAutoText(autos)
    }, 500)

    const showAuto = async () => {
        getAutoText(text)
        setDisplay('block')
    }

    const setAutoToText = (auto: string) => {
        setText(auto)
        setDisplay('none')
    }
    
    const hideAuto = () => {
        if (overlay) return
        setDisplay('none')
    }

    return [text, autoText, display, setText, setDisplay, setOverlay, showAuto, hideAuto, setAutoToText]
}

const AutoComplete: React.FC = () => {
    const [text, autoText, display,
            setText, setDisplay, setOverlay,
            showAuto, hideAuto, setAutoToText] = useAutoComplete()

    const ref = useRef<HTMLInputElement>()
    const [pos, setPos] = useState<number>(0)

    useEffect(() => {
        setPos(ref.current.getBoundingClientRect().height)
    }, [])
    
    return (
        <Div>
            <Input
                ref={ref}
                value={text}
                onChange={e => setText(e.target.value)}
                onKeyUp={() =>  showAuto()}
                onFocus={() => showAuto()}
                onBlur={() => hideAuto()}
                />
            <AutoItems display={display} pos={pos}
                onMouseOver={() => {
                    setOverlay(true)
                }}
                onMouseOut={() => setOverlay(false)}>
                {autoText.map((auto, i) => (
                    <Item key={`item_${i}`}
                        onClick={() => setAutoToText(auto)}>
                        {auto}
                    </Item>
                ))}
            </AutoItems>
        </Div>
    )
}

export default AutoComplete