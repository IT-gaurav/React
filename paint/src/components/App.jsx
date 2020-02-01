import React, { Component } from 'react'
import Header from './Header'
import ColorMenu from './ColorMenu'
import Color from './Color'

import "./App.css"


class App extends Component {
    state = {
        colors: [
            {
                name: "Red",
                value: "",
                data: ["#00000", "#989898"]
            },
            {
                name: "Orange",
                value: "",
                data: ["#00000", "#989898"]
            },
            {
                name: "Yellow",
                value: "",
                data: ["#00000", "#989898"]
            },
            {
                name: "Blue",
                value: "",
                data: ["#00000", "#989898"]
            },
            {
                name: "Green",
                value: "",
                data: ["#00000", "#989898"]
            },
            {
                name: "Black",
                value: "",
                data: ["#00000", "#989898"]
            },
            {
                name: "White",
                value: "",
                data: ["#00000", "#989898"]
            },
            {
                name: "Grey",
                value: "",
                data: ["#00000", "#989898"]
            },
        ]
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <ColorMenu colors={this.state.colors} />
                {
                    this.state.colors.map(color => <div className="color-box" key={color.name}> <Color colorObj={color} /></div>)
                }
            </React.Fragment>
        )
    }
}

export default App