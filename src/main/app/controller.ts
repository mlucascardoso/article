import { Application, json, urlencoded } from "express";

export class ApplicationController {
    private readonly app: Application

    constructor(expressApp: Application) {
        this.app = expressApp;
    }

    public async bootstrap(): Promise<Application> {
        this.initMiddlewares();
        await this.connectToDatabase();
        return this.app;
    }

    private initMiddlewares() {
        this.app.use(json());
        this.app.use(urlencoded({ extended: false })); // support for application/x-www-form-urlencoded post data
    }

    private async connectToDatabase(): Promise<void> { }
}