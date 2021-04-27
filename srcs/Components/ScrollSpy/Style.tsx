import styled from 'styled-components'

export const Div = styled.div`
    
`
export const NavDiv = styled.div`
    position : fixed;
    top: 0;
    left: 0;
    
    display: flex;
    justify-content: space-between;
    
    width: 100%;
`
export const NavItem = styled.div<{ show: boolean }>`
    width : 100%;
    
    border: 1px solid black;
    
    text-align: center;

    background-color: ${props => props.show ? 'grey' : 'white'};
`
export const ContentDiv = styled.div`
    width: 100%;
    height: 70rem;
    
    font-size: 40rem;
    text-align: center;

    border-bottom: 1px solid black;
`