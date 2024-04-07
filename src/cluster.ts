const os = require('os')
const cluster = require('cluster')

const runPrimaryProcess = () => {
    const processCount = os.cpus().length
    console.log(`Primary ${process.pid} is running`) //tinha que ser as aspas do portugues errado
    console.log(`Forking Server with ${processCount} `)
    for (let index = 0; index < processCount; index++) cluster.fork
}

const runWorkerProcess = async () => {
    await import('./main')
}

cluster.isPrimary ? runPrimaryProcess() : runWorkerProcess()