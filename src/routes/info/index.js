import { Router } from "express"
import { IncorrectRoute } from "../../middlewares/index.js"
import compression from "compression"
import { InfoController } from '../../controllers/index.js'

const router = Router()

router.get('/', InfoController.systemInformation)

router.get('/compresion', compression(), InfoController.systemInformation)

router.get('*', IncorrectRoute.errorRoutes)

export { router as InfoRouter }