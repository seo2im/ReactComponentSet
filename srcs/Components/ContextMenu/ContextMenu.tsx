import React, { useState, useEffect } from 'react'
import { Div, Context, ContextBox, Menu } from './Style'

const dummyData: any[] = [
    { context: 'oh my got', explain: 'some explain' },
    { context: 'have some problem', explain: 'this explain' },
]

type Props = {
    data: any
    idx: number
    last: boolean
    open: number
    setOpen: (idx: number) => void
}
const ContextItem
= ({ data, idx, last, open, setOpen } : Props) => {
    const OpenMenu = (e: React.MouseEvent) => {
        e.stopPropagation()
        setOpen(idx === open ? -1 : idx)
    }

    return (
        <ContextBox last={last} isOpen={idx === open} onClick={OpenMenu}>
            <Context>{data.context}</Context>
            <Menu isOpen={open === idx}>{data.explain}</Menu>
        </ContextBox>
)
}

const ContextMenu = () => {
    const [open, setOpen] = useState<number>(-1)
    
    const CloseMenu = (e: Event) => {
        setOpen(-1)
    }
    useEffect(() => {
        document.body.addEventListener('click', CloseMenu)

        return () => { document.body.removeEventListener('click', CloseMenu) }
    })


    return (
        <Div>
            {dummyData.map((e, i) => (
                <ContextItem
                    key={`Context_${i}`}
                    last={i !== dummyData.length - 1} 
                    idx={i}
                    open={open}
                    setOpen={setOpen}
                    data={e}/>
            ))}
        </Div>
    )
}

export default ContextMenu