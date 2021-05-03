import React, { useState } from 'react'
import { Div, TagDiv, InputTag, DeleteTagButton } from './Style'

const useTags = ()
: [string[],
  (e: React.KeyboardEvent<HTMLInputElement>) => void,
  (idx: number) => void,
  string,
  (text: string) => void] => {
    const [ tags, setTags ] = useState<string[]>([])
    const [ text, setText ] = useState<string>('')

    const addTags = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.which !== 13) return
        setTags([...tags, text])
        setText('') 
    }
    const delTags = (idx: number) => {
        setTags([...tags.slice(0, idx), ...tags.slice(idx + 1)])
    }

    return [ tags, addTags, delTags, text, setText ]
}

const ChipsUi: React.FC = () => {
    const [ tags, addTags, delTags, text, setText ] = useTags()
    
    return (
        <Div>
            {tags.map((tag, i) => (
                <TagDiv key={`tag_${i}`}>
                    {`# ${tag}`}
                    <DeleteTagButton
                        onClick={() => delTags(i)}>
                        X
                    </DeleteTagButton>
                </TagDiv>
            ))}
            <InputTag
                value={text}
                onChange={e => setText(e.target.value)}
                onKeyPress={addTags}
                placeholder="enter text..."/>
        </Div>
    )
}

export default ChipsUi
