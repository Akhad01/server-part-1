import express, { Request, Response, Router } from "express"

export class UsersContoller {
    private router: Router

    constructor () {
        this.router = express.Router()
        this.router.get("/", this.getUsers)
    }

    public getRouter = () => {
        return this.router
    }

    private getUsers = async (req: Request, res: Response) => {
        try {
            const users = [
                {name: "Akhadbek"},
                {name: "Majkl"},
                {name: "Tom"}
            ]
            res.send(users)
        } catch (error) {
            const err = error as Error
            res.send(err.message)
        }
    }
}