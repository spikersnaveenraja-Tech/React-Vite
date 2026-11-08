
const BASEURL = "https://fakestoreapi.com"

export const Apicall = async (payLoad) => {

     try{
      const url = BASEURL+"/users"
        const option = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payLoad)
        }

            const  response = await fetch(url,option)
            const  responseData = await response.json()
            return responseData

        }
        catch(e){

        }
}