import { Router } from "express"
import { fork } from 'child_process'
import { IncorrectRoute } from "../../middlewares/index.js"


const router = Router()

router.get('/', (req, res) => {
    const cant = req.query.cant || 100000
    const subProcess = fork('randomNumbers.js')

    subProcess.send(cant)

    subProcess.on('message', (numbers) => {

        // res.send({ sucess: true, data: numbers })
        res.render('randoms.hbs', { data: numbers })
    })

})

router.get('*', IncorrectRoute.errorRoutes)


export { router as RandomRouter }