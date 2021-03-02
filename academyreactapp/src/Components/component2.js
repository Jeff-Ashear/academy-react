import React from 'react'
import { Button2 } from './button2.js'

export class Component2 extends React.Component {
    handleClick() {
        console.log("Clucked")
        let clucks = "";
        for (let i = 0; i < 10; i++) {
            clucks += "I don't give a cluck!"
        }
        alert (clucks)
    }
    
    render() {
        return (
            <div>
                <h1>
                    The Second Button
                </h1>
                <div>
                    <Button2 onClick={this.handleClick}/>
                </div>
            </div>
        )
    }
}

