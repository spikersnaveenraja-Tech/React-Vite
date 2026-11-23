import { getEndpoint, getOption } from '../services/url.service'


export const FetchApiService = async (path, method) => {
   
    try{
    const url = getEndpoint(path)
    const options = getOption(method)

    const response = await fetch(url, options, options?.body ?? {})

    return await response.json()
    }
    catch(error){
          console.error("error::::",error)
    }

}