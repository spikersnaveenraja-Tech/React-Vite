
export default function ShowProfile({
    candidateName,
    candidateAge,
    handleEdit
}) {
    return (
        <>
            <div className="mt-3">
                <span className="h5">Cadidate Name:</span>
                <span>{candidateName}</span>
            </div>
            <div className="mt-3">
                <span className="h5 mt-3">Cadidate Age:</span>
                <span>{candidateAge}</span>
            </div>
            <button className="btn btn-primary mt-3" onClick={() => handleEdit(true)}>Edit</button>
        </>
    )
}