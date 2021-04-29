import styled from 'styled-components'

export const Div = styled.div`

`
export const NavDiv = styled.div`
    --tab-width: 300;
    
    position: relative;

    display: flex;
    justify-content: space-between;
    
    width: calc(var(--tab-width) * 1px);
`
export const Glider = styled.div<{ idx: number }>`
    width: calc((var(--tab-width) / 3) * 1px);
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    background-color: grey;

    transition: 0.25s ease-out;
  transform: translate3D(${({ idx }) => idx * 100}%, 0, 0);
`
export const NavItem = styled.div`
    width : 100%;
    
    border: 1px solid black;
    
    text-align: center;

    z-index: 1;
`
export const ContentDiv = styled.div`

`