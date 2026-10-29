import { Component } from "react";

export default class ClassComponentState extends Component{

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
                </div>
                <div classname = "mt-1">
                    <span className="h4 text-secondary">Candidate age</span>
                    <span> {this.state.age}</span>
                </div>
                <div classname = "mt-1">
                    <span className="h4 text-secondary">Temproary Address</span>
                    <span> {this.state.address.temp}</span>
                </div>
                <div classname = "mt-1">
                    <span className="h4 text-secondary">Permanent Address</span>
                    <span> {this.state.address.perm}</span>
                </div>
              </div>
            </>
        )
    }

}