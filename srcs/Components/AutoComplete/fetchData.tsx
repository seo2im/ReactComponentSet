const dummy = [
    'corn',
    'bacon',
    'strawberry',
    'orange',
    'fork',
    'meat',
    'cola',
    'street',
    'mention',
    'meatball',
    'kanbahn',
    'kite',
]

const fetchData = (word: string): Promise<string[]> => {
    return new Promise((resolve) => {
        resolve(
            word ? dummy.filter((data) => data.toLocaleLowerCase().indexOf(word.toLocaleLowerCase()) > -1) : []
        )
    })
}

export default fetchData