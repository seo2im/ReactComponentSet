import styled from 'styled-components'

export const Div = styled.div`
    width: 50rem;
    
    margin: 20rem auto;
    
    border: 1px solid black;
`
export const ContextBox = styled.div<{ last : boolean, isOpen: boolean }>`
    width: 100%;
    min-height: 3rem;

    ${props => props.last ? 'border-bottom: 1px solid black;' : null}
    &:hover:after {
        content: '${props => props.isOpen ? 'close' : 'open'}';
    }
`
export const Context = styled.p`
    margin: 1rem;
    padding: 0;
`
export const Menu = styled.div<{ isOpen: boolean }>`
    display: ${(props) => props.isOpen ? 'block' : 'none'};
`
