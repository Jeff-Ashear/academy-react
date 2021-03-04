import React from 'react'
import { Greeting } from './greetings.js'

export class Component5 extends React.Component {
    handleClick() {
        console.log('clicked 5')
       let beeper = "boop" 
       for (let i = 0; i < 25; ++i) {
           beeper += "Bwwweeep"
       }
       let name = "Merfin"
       alert(beeper)
    }
    render() {
        return (
            <div>
                <div>
                    <Greeting 
                        signedIn={true}
                        name={this.name} 
                        import="imports"
                        onClick={this.handleClick}
                        content={this.handleClick.beeper} 
                    />
                </div>
                
            </div>
        )
    }
}