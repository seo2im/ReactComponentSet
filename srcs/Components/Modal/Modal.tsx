import React, { useState } from 'react'
import { Background, Button, ModalDiv } from './Style'

const Modal: React.FC = () => {
    const [open, setOpen] = useState<number>(0)
    const [overlay, setOverlay] = useState<boolean>(false)

    return (
        <>
        <Background open={open} onClick={() => {
                if (overlay) return
                setOpen(0)
            }}>
            
            <ModalDiv 
                open={open}
                onMouseOver={() => setOverlay(true)}
                onMouseOut={() => setOverlay(false)}>
                This is Modal
            </ModalDiv>
        </Background>
        <Button onClick={(e) => {
                    e.stopPropagation()                
                    setOpen(open => 1 - open)
                }}>
                Modal open
        </Button>
        </>
    )
}

export default Modal