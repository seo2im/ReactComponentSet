import styled, { keyframes } from 'styled-components'

export const Button = styled.button`

`

const spinner = keyframes`
    0% {
        transform: rotate(0deg);
    } 100% {
        transform: rotate(360deg);
    }
` 

export const Div = styled.div<{ load: boolean }>`
    display: ${({ load }) => load ? 'block' : 'none'};
    
    background: rgba(0,0,0,0.5);
    
    position: fixed;
    top: 0;
    left: 0;

    width :100%;
    height: 100%;
`
export const Spinner = styled.div`
    width: 1rem;
    height: 1rem;
    
    border-radius: 0.5rem;

    margin: 25% auto;

    box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;

    animation: ${spinner} 1500ms infinite linear;    
`