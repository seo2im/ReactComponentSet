import React, { useEffect, useState, useRef } from 'react'
import { Div, NavDiv, NavItem, ContentDiv } from './Style'

const dummy = Array.from({ length : 5 }).map((_, i) => i);

type NavProps = {
    contents : any[]
    idx: number
    moveToContent: (idx: number) => void
}
const Nav = ({ contents, idx, moveToContent } : NavProps) => {    
    return (
        <NavDiv>
            {contents.map((content, i) => (
                <NavItem 
                    key={`nav_item_${i}`}
                    show={idx === i}
                    onClick={() => moveToContent(i)}>
                    {content}
                </NavItem>
            ))}
        </NavDiv>
    )
}

type ContentProps = {
    content : any
}
const Content = React.forwardRef<HTMLDivElement, ContentProps>(({ content }, ref) => {
    return (
        <ContentDiv ref={ref}>
            {content}
        </ContentDiv>
    )
})

/*
    IntersectionObserver 
*/
const ScrollSpy: React.FC = () => {
    const [idx, setIdx] = useState<number>(0)
    const ref = useRef<any[]>([])

    const moveToContent = (idx: number) => {
        ref.current[idx].scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        })
    }

    const Observer = new IntersectionObserver(
        entries => {
            entries.forEach(({ isIntersecting, boundingClientRect }) => {
                const scrollTop = window.pageYOffset
                const { height } = boundingClientRect
                
                if (isIntersecting) {
                    const index = Math.round(scrollTop / height);
                    setIdx(index);
                }
            })
        },
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        }
    )

    useEffect(() => {
        ref.current.forEach(content => Observer.observe(content))

        return () => {
            ref.current.forEach(content => Observer.unobserve(content))
        }
    }, [])

    return (
        <Div>
            <Nav contents={dummy} idx={idx} moveToContent={moveToContent}/>
            {dummy.map((content, i) => (
                <Content key={`content_${i}`} content={content} ref={(r) => ref.current[i] = r}/>
            ))}
        </Div>
    )
}

export default ScrollSpy