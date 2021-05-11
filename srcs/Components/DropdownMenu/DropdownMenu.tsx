import React, { useState, useEffect, useRef } from 'react'
import { Div, DropButton, Item, DropItems } from './Style'

const dummy: any[] = ['item1', 'item2', 'item3', 'item4']

const useDropdownMenu = ()
:[ number,
   boolean,
   (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
   (e: React.MouseEvent<HTMLDivElement, MouseEvent>, i: number) => void] => {
    const [idx, setIdx] = useState<number>(-1)
    const [open, setOpen] = useState<boolean>(false)

    useEffect(() => {
        document.body.addEventListener('click', closeMenu)

        return () => {
            document.body.removeEventListener('click', closeMenu)
        }
    }, [])

    const openMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
        setOpen(!open)
    }

    const closeMenu = () => {
        setOpen(false)
    }

    const changeSelect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, i: number) => {
        e.stopPropagation()
        setIdx(i)
        setOpen(false)
    }

    return [idx, open, openMenu, changeSelect]
}

const DropdownMenu: React.FC = () => {
    const [idx, open, openMenu, changeSelect] = useDropdownMenu()
    const [pos, setPos] = useState<number>();
    const ref = useRef<HTMLDivElement>();

    useEffect(() => {
        setPos(ref.current.getBoundingClientRect().height)
    }, [])

    return (
        <Div>
            <DropButton 
                ref={ref}
                onClick={openMenu}>
                {idx !== -1 ? dummy[idx] : 'No select'}
            </DropButton>
            <DropItems
                open={open}
                position={pos}>
                {dummy.map((content, i) => {
                    if (i === idx) return null
                    return (
                        <Item key={`item_${i}`}
                            onClick={(e) => changeSelect(e, i)}>
                            {content}
                        </Item>
                    )
                })}
            </DropItems>
        </Div>
    )
}

export default DropdownMenu