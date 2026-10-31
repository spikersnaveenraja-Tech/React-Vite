import { useState } from "react"
import BasicInfo from  './Component/BasicInfo'

export default function PortFolioMainpage(){

    const [student,setStudent] = useState(
        {
            name:"Naveen",
            address: "2nd cross st",
            sslc : 464,
            hsc :1082
        }
    )

    return(
        <>
          <BasicInfo
           student = {student}
          />
        </>
    )
}