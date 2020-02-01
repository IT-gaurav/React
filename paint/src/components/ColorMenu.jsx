import React, { Component } from 'react'
import Color from './Color'


class ColorMenu extends Component {
    render() {
        return (
            <ul className="color-menu">
                {
                    this.props.colors.map(color => <Color key={color.name} colorObj={color} />)
                }
            </ul >
        )
    }
}

export default ColorMenu