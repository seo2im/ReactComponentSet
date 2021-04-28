import React, { useState, useRef, useEffect } from 'react'
import { Div, ListDiv, ItemDiv, LoadingDiv } from './Style'
import { fetchData } from './FetchingDummy'

type ItemProps = {
    content: any
}
const Item = ({ content }: ItemProps) => {
    return (
        <ItemDiv>
            {content}
        </ItemDiv>
    )
}
type ListProps = {
    contents: any[]
}
const List = ({ contents }: ListProps) => {
    return (
        <ListDiv>
            {contents.map((content, i) => (
                <Item key={`item_${i}`} content={content} />
            ))}
        </ListDiv>
    )
}
type LoadingProps = {
    loading: boolean
    setLoadCount: React.Dispatch<React.SetStateAction<number>>
}
const Loading = ({ loading, setLoadCount }: LoadingProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const Observer = new IntersectionObserver(([{ isIntersecting }]) => {
        if ( isIntersecting  && !loading ) setLoadCount((prev) => prev + 1)
    });

    useEffect(() => {
        Observer.observe(ref.current)
        return () => {
            Observer.unobserve(ref.current)
        }
    })

    return (
        <LoadingDiv loading={loading ? "loading" : ""} ref={ref}>
            Loading...
        </LoadingDiv>
    )
}

const InfiniteScroll: React.FC = () => {
    const [ loading, setLoading ] = useState<boolean>(false)
    const [ contents, setContents ] = useState<any[]>([])
    const [ loadCount, setLoadCount ] = useState<number>(0)
    
    const fetching = async () => {
        setLoading(true)
        const newContent = await fetchData(loadCount)
        setContents([...contents, ...newContent])
        setLoading(false)
    }
    useEffect(() => { fetching() }, [loadCount])

    return (
        <Div>
            <List contents={contents}/>
            <Loading loading={loading} setLoadCount={setLoadCount}/>
        </Div>
    )
}

export default InfiniteScroll