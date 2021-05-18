const dummy = Array.from({ length: 100 }).map((_, i) => i + '')
const sleep = () => {
    return new Promise(resolve => setTimeout(resolve, 1000))
}

export const fetchArray = async (start: number, num: number): Promise<string[]>  => {
    await sleep()
    return dummy.slice(start * num, (start + 1) * num)
}
export const fetchLength = async (): Promise<number> => {
    await sleep()
    return dummy.length
}
