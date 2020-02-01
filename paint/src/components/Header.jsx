import React, { Component } from 'react'
import SearchBar from './SearchBar'

class Header extends Component {
    render() {
        return (
            <header>
                <SearchBar />
            </header>
        )
    }
}

export default Header