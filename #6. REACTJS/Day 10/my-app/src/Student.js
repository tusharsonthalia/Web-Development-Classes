import React, { Component } from 'react'
import Report from './Report'

class Student extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Welcome to React App.</h1>
                <Report roll={1}/>
            </React.Fragment>
        )
    }
}

export default Student;