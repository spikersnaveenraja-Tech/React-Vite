import { useState } from "react"
import ShowProfile from './Components/ShowProfile'
import EditProfile from './Components/EditProfile'


export default function ProfileInfo() {

    const [formData, setFormData] = useState({
        candidateName: "Naveen",
        candidateAge: 35
    })

    const [edit, setEdit] = useState(false)

    const handleEdit = (data) => setEdit(data)

    const handleSubmit = (e) => {
        e.preventDefault()
        setEdit(false)
    }

    return (
        <>
            <div className="container">
                <div className="h3 text-center text-primary">Profile Info</div>
                <div className="card" style={{ width: "400px" }}>
                    {!edit ?
                        (
                            <>
                                <ShowProfile
                                    candidateName={formData.candidateName}
                                    candidateAge={formData.candidateAge}
                                    handleEdit={handleEdit}
                                />
                            </>
                        )
                        :
                        (
                            <>
                                <EditProfile
                                    formData={formData}
                                    setFormData={setFormData}
                                    handleSubmit={handleSubmit}

                                />
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}