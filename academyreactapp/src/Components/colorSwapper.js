import React from 'react'

const orange = '#f59042'
const grey = '#282c34'
const orangeText = 'grey'
const greyText = 'orange'


export class ColorSwapper extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            color: orange,
            text: orangeText
        }
        this.colorChange = this.colorChange.bind(this);
        this.textChange = this.textChange.bind(this);
    }

    colorChange() {
        const newColor = this.state.color == orange ? grey : orange
        this.setState({color: newColor})
        this.textChange()
    }

    textChange() {
        const newText = this.state.text == orangeText ? greyText : orangeText
        this.setState({text: newText})
    }


    render(){
        return (
            <div
             style={{background: this.state.color}}
             >
                <button 
                onClick={this.colorChange}>
                    Change color to {this.state.text}
                </button>
            </div>
        )
    }
}