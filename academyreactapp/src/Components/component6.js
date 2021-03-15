import React from 'react'

export class Component6 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'Jeff',
            studying: 'React',
            mood: 'pretty good actually',
            attribute: 'creative',
            attribute1: 'kind'
        }
    }

    render() {
        return (
            <div>
                <h1>I am called {this.state.name}.</h1>
                <h3>I'm learning {this.state.studying} </h3>
                <h4>Right now I feel {this.state.mood}</h4>
            </div>
        )
    }
}