import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class ReactDemo1 extends Component {
    componentWillMount() {
        console.log(ReactDOM.findDOMNode(this));
        console.log("componentWillMount is invoked Before Render Method");
    }

    componentDidMount() {
        console.log("componentDidMount is invoked after Render Method");
        console.log(ReactDOM.findDOMNode(this));

    }



    render() {
        return (
            <div>
                <h1>React Demo</h1>
            </div>
        )
    }
}
