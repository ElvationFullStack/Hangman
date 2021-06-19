import React, { Component } from 'react'

export class Litter extends Component {
    render() {
        return (
            <span>
                {this.props.litter}
            </span>
        )
    }
}

export default Litter
