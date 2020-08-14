import React, { Component } from 'react'

export default class UserDemo extends Component {
    componentWillUnmount() {
        alert("User Deleted")
    }
    render() {
        return (
            <div>
                <h1>Name: Sarala</h1>
            </div>
        )
    }
}
