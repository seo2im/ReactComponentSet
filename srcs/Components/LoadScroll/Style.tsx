import styled from 'styled-components'

export const Div = styled.div`

`
/*
    TODO: styled-component props boolean issue check
    https://mygumi.tistory.com/382
*/
export const LoadingDiv = styled.div<{ loading: string }>`
    visibility: ${props => props.loading === "load" ? 'visible' : 'hidden'};
    
    width: 100%;
    height: 5rem;

    border: 1px solid black;
    background-color: grey;
`
export const ListDiv = styled.div`

`
export const ItemDiv = styled.div`
    width: 100%;
    height: 5rem;

    border: 1px solid black;
`