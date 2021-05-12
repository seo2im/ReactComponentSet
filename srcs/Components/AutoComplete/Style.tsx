import styled from 'styled-components'

export const Div = styled.div`

`
export const Input = styled.input`

`
export const Item = styled.div`

`
export const AutoItems = styled.div<{ display: string }>`
    display: ${({ display }) => display};
`