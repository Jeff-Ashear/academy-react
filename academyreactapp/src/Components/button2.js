import React from 'react'

export class Button2 extends React.Component {
    render() {
        return(
            <button onClick={this.props.onClick}>
                Or you may Click Me instead!
            </button>
        )
    }
}