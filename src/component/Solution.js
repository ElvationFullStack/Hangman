import React, { Component } from 'react'
import Hint from './Hint';
import Litter from './Litter';
export default class Solution extends Component {

    render() {
        console.log(this.props)
        const Word = this.props.solution.word

        const blank_arr = []
        // for (let i = 0; i < wordLength; i++) {
        //     blank_arr.push( this.props.LitterStatus[<Litter key={i} litter="$">  </Litter>)
        // }
        for (let i = 0; i < Word.length; i++) {
            blank_arr.push(this.props.LitterStatus[Word[i]] ? <Litter key={`${i}b`} litter={Word[i]}>  </Litter> : <Litter key={`${i}S`} litter="_"></Litter>)
          }
        // for (let c of Word) {
        //     blank_arr.push(this.props.LitterStatus[c] ? <Litter key={`${c}b`} litter={c}>  </Litter> : <Litter key={`${c}S`} litter="_"></Litter>)
            
        // }

        return (

            <div>
                {blank_arr}
                <Hint hint={this.props.solution.hint}></Hint>
            </div>
        )
    }
}
