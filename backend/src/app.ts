import express from 'express'
import catchAll from './3-middlewares/catch-all'
import appConfig from './2-utils/app-config'
import routeNotFound from './3-middlewares/route-not-found'
import furnitureController from './6-controllers/furniture-controller'
import authController from './6-controllers/auth-contoller'
import cors from 'cors'
import sanitize from './3-middlewares/sanitize'
import expressRateLimit from 'express-rate-limit'
import helmet from 'helmet'

const server = express()

server.use("/api/", expressRateLimit({
    max: 1,
    windowMs: 1000
}))

// server.use(helmet())

server.use(cors({origin: appConfig.frontEndUrl}))

server.use(express.json())

server.use(sanitize)

server.use("/api", furnitureController)
server.use("/api/auth", authController)
server.use("*", routeNotFound)
server.use(catchAll)

server.listen(appConfig.port, ()=>console.log(`Listen on port ${appConfig.port}`))