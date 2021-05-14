import styled from 'styled-components'

export const Div = styled.div`

`
export const Input = styled.input`

`
export const Item = styled.div`
    margin: 0.2rem 0.5rem;

    color : white;
`
export const AutoItems = styled.div<{ display: string, pos: number }>`
    display: ${({ display }) => display};

    position: absolute;
    top: ${({ pos }) => pos}px;

    background-color: grey;
`