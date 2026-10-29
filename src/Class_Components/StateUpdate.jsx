import { Component } from "react";

export default class StateUpdate extends Component{

    constructor(){
        super()

        this.state = {
            name : "Naveen",
            age : 35,
            address :{
                temp : "Chennai",
                perm : "Cumbum"
            }
        }
    }

    render(){

        return(
            <>
              <div>
                <div className="h1 text-center text-primary">Employee Info</div>
              </div>
              <div className = "mt-3">
                <div classname = "mt-1">
                    <span className="h4 text-secondary">Candidate Name</span>
                    <span> {this.state.name}</span>
                    <div>
                        <button onClick = { ()=>  this.setState({name : "jacob"}) }>Update Name</button>
                    </div>
                </div>
                <div classname = "mt-1">
                    <span className="h4 text-secondary">Candidate age</span>
                    <span> {this.state.age}</span>
                    <div>
                        <button onClick = { () => this.setState( { age : 36 }) }>Update Age</button>
                    </div>
                </div>
                <div classname = "mt-1">
                    <span className="h4 text-secondary">Temproary Address</span>
                    <span> {this.state.address.temp}</span>
                    <div>
                        <button onClick = { () => this.setState( { address : { temp : "Bangalore" }})}>Update Temp Address</button>
                    </div>
                </div>
                <div classname = "mt-1">
                    <span className="h4 text-secondary">Permanent Address</span>
                    <span> {this.state.address.perm}</span>
                    <div>
                        <button onClick = { () => this.setState( { address : { perm : "Madurai" }})}>Update Perm Address</button>
                    </div>
                </div>
              </div>
            </>
        )
    }

}