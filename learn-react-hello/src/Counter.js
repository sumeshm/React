import React from "react"
import './style/Counter.css';

class Counter extends React.Component {
    constructor() {
        super()             // get props from parent
        this.state = {      // declare an object 'state'
            count: 0
        }
    }

    onIncrement = () => {
        this.setState({ count: this.state.count + 1 });
        console.log("Did you click the button")
    };

    onDecrement = () => {
        this.setState({ count: this.state.count - 1 });
        console.log("Did you click the button")
    };

    render() {
        return (
            <div className="Counter">
                <p>Counter:</p>
                <noscript>usage of STATE</noscript>
                <textarea className="Counter-textarea" value={this.state.count} />
                <button className="Counter-button" onClick={this.onIncrement}>+</button>
                <button className="Counter-button" onClick={this.onDecrement}>-</button>
            </div>
        )
    }
}

export default Counter;