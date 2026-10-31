

export default function EducationInfo({
    student:{
        sslc,
        hsc
    }
}){

   
    return(
        <>
         <diV>
            <div className="h2 mt-5 text-center text-dark">Education Info</div>
         </diV>
         <div className="container text-center mt-2">
            <span className="mt-2-text-success">SSLC:</span>
            <span className="mt-2 ms-1 text-secondary">{sslc}</span>
         </div>
         <div className="container text-center mt-2">
            <span className="mt-2-text-success">HSC:</span>
            <span className="mt-2 ms-1 text-secondary">{hsc}</span>
         </div>
        </>
    )
}