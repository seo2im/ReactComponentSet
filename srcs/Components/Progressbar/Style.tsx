import styled from 'styled-components'

export const Div = styled.div`
    width: 40rem;
    height: 2rem;
    
    padding: 1rem;
    border-radius: 2rem;

    background: black;
`
export const Bar = styled.div<{ percent: number }>`
    width: ${({ percent }) => percent}%;
    height: 2rem;
    
    border-radius: 2rem;
    
    background:green;

    transition: width 0.5s ease-out;
`