import dayjs from 'dayjs'

import customParseFormat from 'dayjs/plugin/customParseFormat.js'
dayjs.extend(customParseFormat)

const getTimestamp = () => {
    const date = new Date()
    const dateFormated = dayjs(date).format('DD/MM/YYYY hh:mm:ss')

    return `${dateFormated}`
}

export const DATE_UTILS = { getTimestamp }