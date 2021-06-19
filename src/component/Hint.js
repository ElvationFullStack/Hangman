import React, { Component } from 'react'
const hintWord ="abra cadabra Two Word Name  "
export default class Hint extends Component {
    render() {
        return (
            <div>
                {this.props.hint}
            </div>
        )
    }
}
