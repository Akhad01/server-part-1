import express, { Express } from "express"
import dotenv from "dotenv"
import cors from 'cors'
import { UsersContoller } from "./controllers/usersContoller";

dotenv.config()

class App {
    private app: Express;
    constructor () {
        this.app = express()
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(express.static("public"))
        this.app.use(express.json())
        this.app.use(cors())
    }

    public init = async () => {
        try {
            this.app.listen(process.env.API_PORT, () => {
                console.log(`Sever is started on ${process.env.API_PORT}`)
            })
            this.app.get('/', (req, res) => {
                res.send("Hello express typescript")
            })
            this.app.use('/users', new UsersContoller().getRouter())
        } catch (error: unknown) {
            const err = error as Error
            console.log(err.message)
        }
    }
}

export const app = new App()

app.init().then(() => {
    console.log("Server is ok");
}).catch(() => {
    console.log("Server is nor ok");
})