import styled from 'styled-components'

export const Div = styled.div`
    display: flex;
`
export const InputTag = styled.input`
    border : none;

    margin-left: 10px;

    &:focus {
        outline: none;
    }
`
export const TagDiv = styled.div`
    display: flex;
    
    border : 1px solid black;
    border-radius: 10px;
    
    padding: 5px 10px;
    margin-left: 10px;
`
export const DeleteTagButton = styled.div`
    margin-left: 10px;
    
    background-color: grey;
    border-radius: 4px;
    
    padding: 2px 3px;

    color: white;
`
