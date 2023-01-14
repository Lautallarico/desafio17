const IS_ADMIN = true

const verifyRole = (req, res, next) => {
    if (!IS_ADMIN) return res.send({ error: 'NO TIENE LOS PERMISOS NECESARIOS PARA ACCEDER A LA RUTA SOLICITADA' })
    next()
}



export const Authentications = { verifyRole }