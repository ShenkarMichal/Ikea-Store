import express from 'express'
import catchAll from './3-middlewares/catch-all'
import appConfig from './2-utils/app-config'
import routeNotFound from './3-middlewares/route-not-found'
import furnitureController from './6-controllers/furniture-controller'

const server = express()

server.use(express.json())
server.use("/api", furnitureController)
server.use("*", routeNotFound)
server.use(catchAll)

server.listen(appConfig.port, ()=>console.log(`Listen on port ${appConfig.port}`))