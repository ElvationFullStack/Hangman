import React, { Component } from 'react'

export default class Letters extends Component {
    render() {
        const AlphabetArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]

        return (
            <div>
                {AlphabetArr.map(l=><span>{l}</span>)}
            </div>
        )
    }
}


