import { UserDao } from "../../dao/index.js";
import { BCRYPT_VALIDATION } from "../../utils/bcrypt.js";

const signUp = async (req, res) => {
    try {

        const { name, lastname, email, password } = req.body

        if (!name || !lastname || !email || !password) return res.send({ success: false })

        const existUser = await UserDao.getOne({ email })

        if (existUser && existUser.password) {
            return res.redirect('/api/auth/signup-error')
        }

        if (existUser && !existUser.password) {
            const updateUser = await UserDao.updateById(existUser._id, { ...existUser, password })
            return res.send({ success: true })
        }

        await UserDao.save({ name, lastname, email, password: BCRYPT_VALIDATION.hashPassword(password) })

    } catch (error) {
        console.log(`error from AuthRouter-Post`);
        res.send({ success: false })
    }
}

const githubLogin = (req, res) => {
    res.send({ success: true, message: 'Bienvenido desde github' })
}


export const AuthControllers = { signUp, githubLogin }