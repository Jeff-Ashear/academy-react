import React from 'react'

export class Component6 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'Jeff',
            studying: 'React',
            mood: 'like shite',
            hungry: 'always',
            fat: true,
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
                <h4>I'm hungry {this.state.hungry}</h4>
                <h4>{this.state.fat === true ? "I sure am fat." : "It's nice not to be so fat."}</h4>
            </div>
        )
    }
}