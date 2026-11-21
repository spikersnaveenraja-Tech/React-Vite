import *as  Yup from 'yup'

export const initialValue = {

    candidateName: "",
    candidateAge: "",
    candidateEmail: "",
    candidatePassword: "",
    gender: "",
    address: "",
    info: {
        city: "",
        zip: ""
    },
    country: ""
}

export const handleSubmit = (value) => {
    console.log("Form Submitted====>", value)
    // Api - code
}

export const validationSchema = Yup.object(
    {
        candidateName: Yup.string().required("Candidate Name is Mandatory"),
        candidateAge: Yup.string().required("Candidate Age is Required"),
        candidateEmail: Yup.string().required("Email should not be empty"),
        candidatePassword: Yup.string().required("Password is Mandatory"),
        // gender : Yup.string().required("Please select one gender"),
        gender: Yup.string()
            .oneOf(["male", "female"], "Please select a valid gender")
            .required("Gender is required"),
        country: Yup.string()
            .required("Please select country"),

        address: Yup.string().required("Address Mandatory"),
        info: Yup.object({
        city: Yup.string().required("City is required"),
        zip: Yup.string().required("ZIP is required")
         })

    }
)