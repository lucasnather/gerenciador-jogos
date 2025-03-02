import { Router } from "express"
import { CreateMatchController } from "../../controller/create-match-controller.js"

const router = Router()

const createMatchController = new CreateMatchController()

router
    .post("/api/matches",(req, res) => createMatchController.post(req, res))

export { router }