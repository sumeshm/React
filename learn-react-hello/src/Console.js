import React from "react"
import './style/Console.css';


class Console extends React.Component {
    constructor(props) {
        super(props)        // get props from parent
        this.state = {      // declare an object 'state'
            consoleMessage: props.consoleMessage
        }

        this.textLog = React.createRef();
    }

    log(nextProps) {
        if (nextProps.consoleMessage !== this.props.consoleMessage) {
            this.setState({
                textMessage: `${this.state.textMessage}\n{nextProps.consoleMessage}`
            });
        }
    }

    render() {
        return (
            <div className="Console">
                <h5>CONSOLE:</h5>
                <textarea className="Console-textarea" value={this.state.consoleMessage} rows="5" />
            </div>
        )
    }

}

export default Console;