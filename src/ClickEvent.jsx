import { useState } from "react";

export default function ClickEvent() {

    const [employee, setEmployee] = useState({
        name: "Kishore",
        age: 26,
        degree: "MCA",
        work: "TCS",
        location: "Chennai"
    })

     const bulkUpdate = () => {
        
        setEmployee(
            {
                ...employee,
                name:"Vimal",
                age : 29,
                degree:"M.tech",
                work:"Infosys",
                location : "Banglore"
            }
        )
    }

    return (
        <>
         <div className="h2 text-center text-primary"> Employee information </div>
         <div>
             <table className="table">
                    <tr>
                        <th>Employee Name </th>
                        <td>{employee.name}</td>   
                    </tr>
                    <tr>
                        <th>Employee Age </th>
                        <td>{employee.age}</td>
                        
                    </tr>
                    <tr>
                        <th>Employee degree </th>
                        <td>{employee.degree}</td>
                       
                    </tr>
                    <tr>
                        <th>Employee work </th>
                        <td>{employee.work}</td>
                       
                    </tr>
                    <tr>
                        <th>Employee location </th>
                        <td>{employee.location}</td> 
                    </tr>
                </table>
         </div>
          <div>
                <button className="btn btn-info" onClick = {bulkUpdate}> Bulk Update </button>
            </div>
         
        </>
    )
}