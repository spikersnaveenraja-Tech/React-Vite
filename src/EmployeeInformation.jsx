
import { useState } from "react";
export default function EmployeeInformation() {
    const [employee, setEmployee] = useState(
         {
            name:"Kishore",
            age : 27,
            degree:"MCA",
            work:"TCS",
            location : "Chennai"
        }
        
    );

    return(
        <>
         <div className="h2 text-center text-primary mt-2">Employee Information</div>
         <table className="table table-bordered border-primary  mt-2">
            <thead className="table-dark fs-5 text-center">
                <tr>
                    <td>col1</td>
                    <td>col2</td>
                    <td>col3</td>
                </tr>
            </thead>
            <tbody>
            <tr>
            <th className="text-center">Employee Name</th>
            <td>{employee.name}</td>
            <td>
                <button onClick={() => setEmployee( {...employee ,name : "Raja"})}>Update Name</button>
            </td>
            </tr>
            <tr>
            <th className="text-center mt-2">Employee Age</th>
            <td>{employee.age}</td>
            <td>
                <button onClick={() => setEmployee( {...employee ,age : 28})}>Update Age</button>
            </td>
            </tr>    
              
             <tr>
            <th className="text-center mt-2">Employee Degree</th>
            <td>{employee.degree}</td>
            <td>
                <button onClick={() => setEmployee( {...employee ,degree : "M.Sc"})}>Update Degree</button>
            </td>
            </tr>
             <tr>
            <th className="text-center mt-2">Employee Work</th>
            <td>{employee.work}</td>
            <td>
                <button onClick={() => setEmployee( {...employee ,work : "Infosys"})}>Update Work</button>
            </td>
            </tr>
             <tr>
            <th className="text-center mt-2">Employee location</th>
            <td>{employee.location}</td>
            <td>
                <button onClick={() => setEmployee( {...employee ,location : "Bangalore"})}>Update Location</button>
            </td>
            </tr>
            </tbody>
         </table>
        </>
    )

}