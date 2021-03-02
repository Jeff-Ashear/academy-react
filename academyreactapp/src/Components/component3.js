import React from 'react';
import { Button3 } from './button3.js'

export class Component3 extends React.Component {
    
    handleClick() {
        console.log("clicked 3")
        //  ++counter
        // console.log("component 3 counter: ", counter)
    }
    render (){
        
        return(
            <div>
                <Button3 onClick={this.handleClick} />
            </div>
        )
    }
}