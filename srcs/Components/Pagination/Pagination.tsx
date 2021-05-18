import React, { useState, useEffect } from 'react'
import { Div, Items, Item, Button } from './Style'
import { fetchLength, fetchArray } from './fetchData';

const usePagination = (): [number, (idx: number) => void, string[], number, boolean] => {
    const [pageNum, setPageNum] = useState<number>(5)
    const [length, setLength] = useState<number>(0)
    const [idx, setIdx] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(false)
    const [items, setItems] = useState<string[]>([])

    const nextPaging = async () => {
        setLoading(true)
        const newItems = await fetchArray(idx, pageNum)
        setItems(newItems)
        setLoading(false)
    }
    const getPageNum = async () => {
        const maxLength = await fetchLength()
        setLength(Math.floor(maxLength / pageNum))
    }

    useEffect(() => {
        getPageNum()
    }, [])
    useEffect(() => {
        nextPaging()
    }, [idx])
    
    return [idx, setIdx, items, length, loading]
}

const Pagination: React.FC = () => {
    const [idx, setIdx, items, length, loading] = usePagination()

    return (
        <Div>
            <Items>
                {loading ? 
                <h1>Loading</h1>
                : items.map((item, i) =>(
                    <Item key={`it{em_${i}`}>
                        {item}
                    </Item>
                ))}
            </Items>
            {Array.from({ length: length }).map((_, i) => (
                <Button 
                    key={`button_${i}`}
                    onClick={() => setIdx(i)}>
                    {i + 1}
                </Button>
            ))}
        </Div>
    )
};

export default Pagination;
