import React, { useState } from 'react'
import { Div, Button, Spinner } from './Style'
import postData from './postData'

const Loading: React.FC = () => {
    const [load, setLoad] = useState<boolean>(false);

    const post = async () => {
        setLoad(true);
        await postData()
        setLoad(false);
    }

    return (
        <>
        <Button onClick={() => post()}>post data</Button>
        <Div load={load}>
            <Spinner/>
        </Div>
        </>
    )
}

export default Loading