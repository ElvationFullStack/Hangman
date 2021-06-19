import React, { Component } from 'react'
import Litter from './Litter'

export default class Letters extends Component {

    render() {
        const AlphabetArr = Object.keys(this.props.LitterStatus)
     
        return (
            <div>
                <p>Avaliable Letters </p>
                <div> {AlphabetArr.map(l => this.props.LitterStatus[l] ? <Litter key={l} litter={l}>    </Litter> : <Litter key={l} letter={"-"}></Litter>)}</div>
            </div>
        )
    }
}


