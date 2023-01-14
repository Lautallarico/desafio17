import logger from "../loggers/loggers.js"

const errorRoutes = async (req, res, next) => {
    try {
        logger.warn('Ruta inexistente')
        res.redirect('/api/auth')
        next()
    } catch (error) {
        logger.error(`error with route: ` + error)
    }
}

export const IncorrectRoute = { errorRoutes }