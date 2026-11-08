
export default function EditProfile(
    {
        formData,
        setFormData,
        handleSubmit
    }
){
    return(
        <>
                 <form onSubmit={handleSubmit}>
                  <div>
                    <label className="form-label">Candidate Name:</label>
                    <input type="text" className="form-control mt-2" name = "candidateName" value={formData.candidateName}
                     onChange = {(e)=>{
                        setFormData(
                            {
                                ...formData,
                                candidateName : e.target.value
                            }
                        )
                     }}
                    />
                  </div>
                   <div className="row">
                    <label className="form-label">Candidate Age:</label>
                    <input type="text" className="form-control mt-2" name = "candidateAge" value={formData.candidateAge}
                     onChange = {(e)=>{
                        setFormData(
                            {
                                ...formData,
                                candidateAge : e.target.value
                            }
                        )
                     }}
                    />
                  </div>
                  <div>
                    <button className="btn btn-primary mt-2" type="submit">Submit</button>
                  </div>
                  </form>
                 </>
    )
}