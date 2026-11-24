import { useEffect, useState } from "react"
import { FetchApiService } from "../services/fetch.api.service";


export default function Product() {

    const [currentProductId, setCurrentProductId] = useState(1)
    const [products, setProducts] = useState([])
  

    useEffect(() => {
       console.log("Effect Called");

        const controller = new AbortController()

        FetchApiService(`products/${currentProductId}`, 'get',controller)
            .then(data => setProducts(data))
            .catch(err => console.error(err))

            return(()=>{
                  console.log("Cleanup Called");
                controller.abort()
            })
    }, [])

    return (
        <>
        { console.log("render called")}
            {Array.isArray(products)?"":setProducts([products])}
            
                <div id="main" className="container">
                <div className="h3 text-center text-primary">Updating Phase-{currentProductId}</div>
                <div className="row">
                    {
                        products?.length > 0 ? (
                            products.map((data) => {
                                return (
                                    <div className="col-lg-3 col-md-4 mb-3" key={data.id}>
                                        <div className="card h-100">
                                            <img src={data.image}
                                                className="card-img-top"
                                                style={{ height: "250px", objectFit: "contain" }}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">{data.title}</h5>
                                                <p className="card-text text-muted">{data.category}</p>
                                                <h4 className="text-success">{data.price}</h4>
                                                <p>
                                                    ⭐ {data?.rating?.rate} ({data?.rating?.count} reviews)
                                                </p>
                                            </div>
                                            <div className="card-footer bg-white border-">
                                                <button className="btn btn-primary w-100">
                                                    View Product
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="btn btn-danger rounded" onClick={() => setCurrentProductId(currentProductId + 1)}> Next Product </button>
                                        </div>
                                    </div>

                                )
                            })
                        ) : (
                            <p> No records Found</p>
                        )
                    }
                </div>
            </div>
            
        </>
    )
}