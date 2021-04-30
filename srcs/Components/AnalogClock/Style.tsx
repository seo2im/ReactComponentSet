import styled from 'styled-components'

export const Div = styled.div`

`
export const Clock = styled.div`
    position: relative;

    width: 30rem;
    height: 30rem;

    border: 5px solid black;
    border-radius: 50%;
`
export const Hand = styled.div<{ deg: number }>`
    position: absolute;
    bottom: 50%;
    left: 50%;

    transform-origin: bottom;
    transform: rotate(${({ deg }) => deg}deg);
`
export const HourHand = styled(Hand)`
    width: 7px;
    height: 50px;

    background-color: black;
` 
export const MinHand = styled(Hand)`
    width: 5px;
    height: 90px;

    background-color: black;
`
export const SecHand = styled(Hand)`
    width: 3px;
    height: 150px;
    
    background-color: grey;
`
export const TimeMaker = styled.div<{ num: number }>`
    position: absolute;

    width: 100%;
    height: 100%;
    
    text-align: center;
    transform: rotate(${({ num }) => num * 30}deg);
`