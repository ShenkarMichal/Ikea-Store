export class ErrorsModel {
    public constructor(public status: number, public message: string) {}
}

export class RouteNotFoundErrorModel extends ErrorsModel {
    public constructor(route: string){
        super(404, `The route ${route} is not exists`)
    }
}

export class AuthErrorModel extends ErrorsModel {
    public constructor(msg: string){
        super(401, msg)
    }
}