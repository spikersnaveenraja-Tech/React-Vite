import { Formik,Form,Field } from "formik"

export default function FieldInput(
     {
       header: {
        fieldLabel,
        fieldType,
        fieldName,
        fieldClassName,
        fieldId,
        fieldPlaceHolder,
        fieldVisible,
        fieldValue
    }
}
     
) 


{
    return (
        <>
        <div>
        <label className="form-label" htmlFor={fieldId}>{fieldLabel}</label>

        <Field
         id={fieldId}
         type={fieldType}
         name={fieldName}
         className={fieldClassName}
         placeholder={fieldPlaceHolder}
        />
     
        </div>
     </>
    )
}