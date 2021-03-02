import React from 'react'

export class Component4 extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello there, {this.props.firstName}.</h1>
            </div>
        )
    }
}