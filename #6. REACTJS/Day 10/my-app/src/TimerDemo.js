import React, { Component } from 'react'

export default class TimerDemo extends Component {
    state = {
        counter: 0
    }

    show=()=> {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("Component will update is triggered before render method");
        console.log("NewProps", nextProps);
        console.log("NewState", nextState);
    }

    componentDidUpdate(preProps, preState) {
        console.log("Component will update is triggered after render method");
        console.log("PreProps", preProps);
        console.log("PreState", preState);
    }
    
    render() {
        return (
            <div>
                <h2>Timer: {this.state.counter}</h2>
                <button onClick={this.show}>Timer</button>
                <LoggerDemo time={this.state.counter}/>
            </div>
        )
    }
}

class LoggerDemo extends Component {

    componentWillReceiveProps(newProps) {
        console.log("componentWillReceiveComponent is triggered with new props");
        console.log("New Props", newProps);
    }

    shouldComponentUpdate(newProps, newState) {
        console.log("shouldComponentUpdate is triggered with new props");
        console.log("New Props", newProps);
        console.log("New State", newState);
        return true;


    }
    
    render() {
        return (
            <React.Fragment>
                <h2>{this.props.time}</h2>
            </React.Fragment>
        )
    }
}