import { useEffect, useState } from "react"
import { FetchApiService } from '../services/fetch.api.service'


export default function InitialPhase() {
    const [products, setproducts] = useState([])

    useEffect(() => {
        console.log('use Effect called ')

            FetchApiService('products', 'get')
                .then((results) => {
                    //result.flat()
                    setproducts(results)
                })
                .catch(error => console.error(error))
       
    }, [])



    return (
        <>
            {

                console.log('render phase', products)

                //  console.log(Array.isArray(products))
            }
            <div className="container">
                <div className="h4 text-primary text-center">Initial Phase</div>
                <div className="row">
                    {
                        products?.length > 0 ? (
                            products.map((obj) => {
                                return (

                                    <div className="col-lg-3 mb-3" key={obj.id}>
                                        <div className="card h-100 shadow-sm">
                                            <img
                                                src={obj.image}
                                                className="card-img-top"
                                                alt={obj.title}
                                                style={{ height: "250px", objectFit: "contain" }}
                                            />

                                            <div className="card-body">
                                                <h5 className="card-title">{obj.title}</h5>

                                                <p className="card-text text-muted">
                                                    {obj.category}
                                                </p>

                                                <h4 className="text-success">
                                                    ${obj.price}
                                                </h4>

                                                <p>
                                                    ⭐ {obj.rating?.rate} ({obj.rating?.count} reviews)
                                                </p>
                                            </div>

                                            <div className="card-footer bg-white border-0">
                                                <button className="btn btn-primary w-100">
                                                    View Product
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })

                        ) : (
                            <h4>Loading Products...</h4>
                        )

                    }
                </div>
            </div>
        </>
    )
}


{/* {
                        products?.length > 0 ? (
                            products.map(({ id, title, price }) => (
                                <div key={id}>
                                    <h4>{title}</h4>
                                    <p>${price}</p>
                                </div>
                            ))
                        ) : (
                            <h4>No Products Found</h4>
                        )
                    }  */}