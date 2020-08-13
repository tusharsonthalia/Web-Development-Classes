import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import pt from 'prop-types'

function Report(props) {
    return <h2>Name is {props.name} and the roll number is {props.roll}.</h2>
}

Report.propTypes = {
    name: pt.string.isRequired,
    roll: pt.number
}

Report.defaultProps = {
    name: "Student",
}

export default Report;