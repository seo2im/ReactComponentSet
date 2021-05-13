import styled from 'styled-components'

export const Background = styled.div<{ open : number }>`
    height: 50rem;
    background-color: ${({ open }) => open === 1 ? 'rgba(0, 0, 0, 0.5)' : 'white'};
`
export const Button = styled.button`

`
export const ModalDiv = styled.div<{ open : number }>`
    display: ${({ open }) => open === 1 ? 'float' : 'none'};
    
    width: 10rem;
    height: 10rem;

    margin: auto;

    background: white;
`