import React, { useState } from 'react'
import { Div, NavDiv, NavItem, ContentDiv, Glider } from'./Style'


const dummy = [{
    title: 'Item',
    content: "Oh! this is good"
},{
    title: 'Item2',
    content: "Oh! this is shit!!!"
},{
    title: 'Item3',
    content: "Oh! this is not good"
}]
type NavProps = {
    contents: any[]
    idx: number
    setIdx: (idx: number) => void
}
const Nav = ({ contents, idx, setIdx } : NavProps) => {    
    return (
        <NavDiv>
            {contents.map((content, i) => (
                <NavItem 
                    key={`nav_item_${i}`}
                    onClick={() => setIdx(i)}>
                    {content}
                </NavItem>
            ))}
            <Glider idx={idx}/>
        </NavDiv>
    )
}
type ContentProps = {
    content: any
}
const Content = ({ content }: ContentProps) => {
    return (
        <ContentDiv>
            {content}
        </ContentDiv>
    )
}
const Tab: React.FC = () => {
    const [idx, setIdx] = useState<number>(0)

    return (
        <Div>
            <Nav 
                contents={dummy.map(({ title }) => title)}
                idx={idx}
                setIdx={setIdx} />
            {dummy.map(({ content }, i) => i === idx ? <Content key={`content_${i}`} content={content} /> : null)}
        </Div>
    )
}

export default Tab
