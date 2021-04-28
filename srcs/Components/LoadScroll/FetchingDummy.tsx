const dummy = Array.from({ length: 100 }).map((_, i) => i)
const sleep = () => {
    return new Promise(resolve => setTimeout(resolve, 1000))
}

export const fetchData = async (args: number): Promise<number[]>  => {
    await sleep()
    return dummy.slice(args * 20, (args + 1) * 20)
}