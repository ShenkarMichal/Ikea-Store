import { NextFunction, Request, Response } from "express";
import logger from "../2-utils/logger";
import appConfig from "../2-utils/app-config";

function catchAll(err: any, request: Request, response: Response, next: NextFunction){

    console.log(err)

    const status = err.status || 500

    if(status === 500){
        logger.logError("CatchAll error", err)
    }
    
    const message = appConfig.isDevelopment ? err.message : "Some err occoured, please try again"
    response.status(status).send(message)
}

export default catchAll