import React, { Component } from 'react'

class Color extends Component {
    render() {
        return (
            <li
                style={
                    { backgroundColor: this.props.colorObj.name, boxShadow: `inset 0 0 0 4px rgba(0,0,0,0.1)` }
                } >

            </li>

        )
    }
}

export default Color