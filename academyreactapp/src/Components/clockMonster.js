import React from 'react'

export class ClockMonster extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }

    render() {
        return(
            <div>
                <h2>
                    {this.state.date.toLocaleTimeString()}
                </h2> 
            </div>
        )
    }

    componentDidMount() {
        const oneSecond = 1000
        this.intervalID = setInterval(() => {
            this.setState({ date: new Date() })
        }, oneSecond)
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }
}