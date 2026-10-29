import { Component } from "react"

export default class A_mountingPhase extends Component{

    constructor(){
        super()
     console.log("from constructor")
        this.state = {
            person : {
                name : "Naveen",
                age : 35
            },

            address : {
                temp : "Chennai",
                perm : "Cumbum"
            }
        }
    }

    componentDidMount(){

     setTimeout( () => {
         this.setState ({
            person : {
                name : "Jacob"
            },
            address : {
                perm : "Madurai"
            }
        })
     },4000)


      
    }

    render(){
          console.log("from render")
        return(
            <>
            <div className="container">
              <div className = "h1 text-center text-primary">Employee Details </div>
              </div>
              <div>
                  <p> Candidate Name : {this.state.person.name}</p>
                  <p> Candidate Age : {this.state.person.age}</p>
                  <p> Candidate temp address : {this.state.address.temp}</p>
                  <p> Candidate perm address : {this.state.address.perm}</p>

               </div>
            </>
        )
    }
}