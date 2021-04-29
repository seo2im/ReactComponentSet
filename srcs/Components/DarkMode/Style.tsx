import styled from 'styled-components'

export const Div = styled.div`
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.fontColor};
    width: 100%;
    height: 20rem;

    border: 1px solid black;
`
export const ThemeChangeButton = styled.button`
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.fontColor};
`