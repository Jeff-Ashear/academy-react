import React from 'react'

export class Greeting extends React.Component {
    render() {
        if (this.props.signedIn == false) {
            return <h1>Get Bent Outa Here</h1>
        } else {

            return (
                <div>
                    <h1>
                        Beep boop hello, {this.props.name}
                    </h1>
                    <h2>
                        This page has all manner of <h1>{this.props.import}</h1>
                    </h2>
                    <button onClick={this.props.onClick}>{this.props.content}</button>
                </div>
            )
        }
    }
}