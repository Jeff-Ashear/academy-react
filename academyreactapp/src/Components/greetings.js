import React from 'react'

export class Greeting extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Beep boop hello, {this.props.name}
                </h1>
                <h2>
                    This page has all manner of {this.props.import}
                </h2>
            </div>
        )
    }
}