const sleep = () => new Promise((resolve) => setTimeout(resolve, 1000))

const postData = async (): Promise<number> => {
    await sleep();
    return 200
}

export default postData
