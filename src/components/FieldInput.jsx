import { Formik, Form, Field, ErrorMessage } from "formik"


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
            fieldValue,
            fieldRows,
            fieldCols,
            fieldOption,
            fieldChildren,
            fieldInputClassName
        }
    }

) {

    return (
        <>
            {fieldVisible && (
                <div>
                    <label className="form-label" htmlFor={fieldId}>{fieldLabel}</label>

                    {fieldType === "select" ? (
                        <>
                            <Field
                                id={fieldId}
                                name={fieldName}
                                as="select"
                                className={fieldClassName}
                            >
                                {fieldOption?.length ? (
                                    fieldOption.map((value, key) => (
                                        <option key={key} value={value}>
                                            {value}
                                        </option>
                                    ))
                                ) : (
                                    <option value="">No Item Found</option>
                                )}
                            </Field>
                            <ErrorMessage 
                                name={fieldName} 
                                component={"div"} 
                                className="text-danger" 
                            />
                        </>
                    ) : (
                        <>
                            {fieldType === "radio" || fieldType === "checkbox" ?
                                (
                                    fieldChildren.map((value, key) => {
                                        return (
                                            <div key={key} className="form-check form-check-inline">
                                                <Field
                                                    id={fieldId}
                                                    type={fieldType}
                                                    name={fieldName}
                                                    className={fieldInputClassName}
                                                    value={value?.checkboxValue}
                                                />
                                                <label htmlFor={fieldId}> {value?.checkboxLabel}</label>
                                            </div>
                                        )
                                    })

                                ) : (
                                    <Field
                                        id={fieldId}
                                        name={fieldName}
                                        className={fieldClassName}
                                        placeholder={fieldPlaceHolder}
                                        {...(fieldType === "textarea" ? { as: "textarea", rows: fieldRows, cols: fieldCols } : { type: fieldType })}
                                    />
                                    
                                )}
                                 <ErrorMessage 
                                name={fieldName} 
                                component={"div"} 
                                className="text-danger" 
                            />
                       </>
                    )}
                </div>
            )}

        </>
    )
}