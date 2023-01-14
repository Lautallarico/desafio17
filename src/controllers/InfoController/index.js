import { INFO } from "../../utils/index.js"

const systemInformation = (req, res) => {

    const data = INFO
    // console.log(data);
    res.render('info.hbs', { data })
}

export const InfoController = { systemInformation }