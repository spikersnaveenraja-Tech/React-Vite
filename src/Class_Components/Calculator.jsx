import { Component } from "react"

export default class Calculator extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }


    render() {
        return (
            <>
                <div className="container">
                    <div className="h1 text-center text-primary text-upppercase">Calcultor</div>
                    <div className="mt-2">
                        <span className="h2 text-secondary">Current count is:</span>
                        <span className="text-danger ms-2 fw-bold fst-italic">{this.state.count}</span>
                    </div>
                    <div className="mt-3">
                        <button onClick = { () => this.setState( { count : this.state.count+1 } ) }>Add</button>
                        <button className = "ms-1" onClick={ () => { this.setState({ count : this.state.count-1})}}>SUB</button>
                        <button className = "ms-1" onClick={ () => { this.setState({ count : this.state.count*2})}}>MULTIPLY</button>
                        <button className = "ms-1" onClick={ () => { this.setState({ count : this.state.count/2})}}>DIVISON</button>
                    </div>
                    
                </div>
            </>
        )
    }
}