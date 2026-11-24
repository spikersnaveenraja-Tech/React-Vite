import { getEndpoint, getOption } from '../services/url.service'


export const FetchApiService = async (path, method,controller) => {
   
    try{
    const url = getEndpoint(path)
    const options = getOption(method,controller)
    console.log(options)
    const response = await fetch(url, options, options?.body ?? {})

    return await response.json()
    }
    catch(error){
          console.error("error::::",error)
    }

}