import React from 'react';
import { Button1 } from './button1.js'

export class Component1 extends React.Component {
    handleClick() {
        console.log('clicked')
        let wordFountain = '';
        for (let i = 0; i < 10000; i++) {
            wordFountain += 'PweepBleep'
        }  
        alert(wordFountain)    
    }

    render() {
        return <Button1 onClick={this.handleClick} />
    }
}

