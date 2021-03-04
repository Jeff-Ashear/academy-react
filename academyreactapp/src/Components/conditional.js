import React from 'react'

export class Conditional extends React.Component {
    render() {
        if (this.props.signedIn == true) {
            return <h1>Not signed in</h1>
        } else {
            return <h1>You're signed in!</h1>
        }
    }
}