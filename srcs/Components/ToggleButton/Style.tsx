import styled from 'styled-components'

export const Div = styled.div`
   
`
export const ToggleButtonDiv = styled.div`
    display: flex;
    width: fit-content;

    flex-wrap: wrap;
    

    border: 1px solid black;
    border-radius: 2px;
`
export const Button = styled.div<{ border: boolean, click: boolean }>`
    ${({ border }) => border ? 'border-left: 1px solid black;' : ''}
    background-color: ${({ click }) => click ? 'grey' : 'white'};

    padding: 10px;
`
export const Text = styled.p<{ font : string }>`
    margin-top: 10px;
    padding: 0;
    ${({ font }) => font === 'italic' ? 'font-style: italic;' : font === 'bold' ? 'font-weight: bold;' : ''}
`