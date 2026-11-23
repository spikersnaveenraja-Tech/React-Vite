
import { BASEURL, URL, OPTIONS } from '../constants/url.constant'

export const getEndpoint = (pathName) => {

    const path = pathName.includes('/') ? pathName.split('/') : pathName

    if (typeof path === 'string')
        var endPointurl = `${BASEURL}/${URL[path]}`

    else

        var endPointurl = `${BASEURL}/${URL[path[0]]}/${path[1]}`

    debugger
    return endPointurl
}

export const getOption = (method, body = {}) => {

    OPTIONS.method = method

    if (method === "post" || method === "put" || method === "patch" && body != {})
        OPTIONS.body = JSON.stringify(body)

    return OPTIONS
}