import styled from 'styled-components'

export const Div = styled.div`
    position: relative;
`
export const Item = styled.div`
    background-color: grey;

    width: 5rem;

    text-align: center;
    color: white;
`
export const DropButton = styled(Item)`
`
export const DropItems = styled.div<{ open: boolean, position: number }>`
    visibility: ${({ open }) => open ? 'visible' : 'hidden'};
    
    position: absolute;
    top: ${({ position }) => position}px;

    transition: transform 0.3s ease-out;
    
    transform: scale(${({open}) => open ? '1, 1' : '1, 0'});
    transform-origin: top;
`

