import fsPromises from 'fs/promises'

async function logger(msg: string){
    const now = new Date()
    fsPromises.appendFile("./logger.txt", `${now}\n ${msg} \n ------------------`)
}

export default logger