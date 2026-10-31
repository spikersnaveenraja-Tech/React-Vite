import EducationInfo from './EducationInfo'

export default function BasicInfo({ student
}){

     const { name,address} = student
    return (
        <>
         <div>
            <div className="h2 text-center text-primary">Basic Information</div>
         </div>
         <div className="container text-center mt-2">
            <span className="mt-2-text-success">Name:</span>
            <span className="mt-2 ms-1  text-secondary">{name}</span>
         </div>
         <div className="container text-center mt-2">
            <span className="mt-2-text-success">Address:</span>
            <span className="mt-2 ms-1 text-secondary">{address}</span>
         </div>

           <EducationInfo 
             student = {student}
           />
        </>
    )
}