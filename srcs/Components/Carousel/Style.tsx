import styled from 'styled-components'

export const Div = styled.div<{ width: number, height: number }>`
    position: relative;
    
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;

    overflow: hidden;
`
export const Slide = styled.div<{ width: number, height: number, num: number, idx: number, duration: number }>`
    display: flex;
    
    width: ${({ width, num }) => width * num}px;
    height: ${({ height }) => height}px;

    transition: transform ${({ duration }) => duration}ms ease-out;
    transform: translate(${({ width, idx }) => -idx * width}px, 0);
`
export const Card = styled.div<{ width: number, height: number, color: string }>`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    
    background-color: ${({ color }) => color};
`
export const Controller = styled.button<{ position: string}>`
    position: absolute;
    top: calc(50% - 2.5rem);
    ${({ position }) => position}: 0;

    background-color: transparent;
    border: none;

    color: black;
    font-size: 5rem;
    
    cursor: pointer;
    
    z-index: 99;

    &:focus {
        outline: none;
    }
`