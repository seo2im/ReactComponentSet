import React, { useState, useEffect } from 'react'
import { Div, DropButton, Item, DropItems } from './Style'

const dummy: any[] = ['item1', 'item2', 'item3', 'item4']

const DropdownMenu: React.FC = () => {
    const [idx, setIdx] = useState<number>(-1)
    const [open, setOpen] = useState<boolean>(false)

    const closeDropdown = () => {
        setOpen(false)
    }

    useEffect(() => {
        document.body.addEventListener('click', closeDropdown)

        return () => {
            document.body.removeEventListener('click', closeDropdown)
        }
    }, [])


    return (
        <Div>
            <DropButton onClick={(e) => {
                    e.stopPropagation();
                    setOpen(!open)
                }}>
                {idx !== -1 ? dummy[idx] : 'No select'}
            </DropButton>
            <DropItems open={open}>
                {dummy.map((content, i) => {
                    if (i === idx) return null
                    return (
                        <Item key={`item_${i}`}
                            onClick={(e) => {
                                e.stopPropagation()
                                setIdx(i)
                                setOpen(false)
                            }}>
                            {content}
                        </Item>
                    )
                })}
            </DropItems>
        </Div>
    )
}

export default DropdownMenu