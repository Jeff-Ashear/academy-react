import React from 'react';

export class Button1 extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>
                Click Me!
            </button>
        )
    }
}