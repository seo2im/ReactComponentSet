import styled from 'styled-components'

export const Div = styled.div`
    position: relative;
`
export const Item = styled.div`

`
export const DropButton = styled(Item)`

`
export const DropItems = styled.div<{ open: boolean }>`
    display: ${({ open }) => open ? 'block' : 'none'};
    
    position: absolute;
    top: 20px;
`

