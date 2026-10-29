import { Component } from "react"
export default class B_updatingPhase extends Component{

    constructor(){
       super()

       this.state={
         product : {
            name : "Apple",
            price : 20000,
            tax : 3
         }
       }
    }

    componentDidUpdate(prevProps,prevState){

        if(prevState.product.price !== this.state.product.price && this.state.product.price >= 30000){
            this.setState({
            product :{
                ...this.state.product,
                tax:4
            }
        })
    }

    }

    render(){
        return(
            <>
             <div className="container">
                <div className="h1 text-center text-primary">Product Update</div>
             
               <div className="mt-5">
                <span className="h3 text-success">ProductName : {this.state.product.name}</span>
                </div>
                <div  className="mt-2">
                  <span className="h3 text-success">ProductPrice : {this.state.product.price}</span>
                  <button onClick={
                         () => {
                            this.setState(
                                {
                                      product : {
                                        ...this.state.product,
                                        price : this.state.product.price+2000  
                                    }
                                }
                            )
                         }

                  }>Add Price</button>
                </div>
                 <span className="h3 text-success">Tax : {this.state.product.tax}</span>
               </div>
            </>
        )
    }
}