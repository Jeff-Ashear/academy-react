import React from 'react'
import { Conditional } from './conditional'

export class Component7 extends React.Component {
    render() {
        return(
            <Conditional
                signedIn={false}
            />
        )
    }
}