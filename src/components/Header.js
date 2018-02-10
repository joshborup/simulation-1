import React, { Component } from 'react';
import logo from './media/logo.png'

class Header extends Component {

    render(){
        return (
            <div className='main-header'>
                <div>
                    <img src={logo}/>
                    <span className='main_header_span'>SHELFIE</span>
                </div>
            </div>
        )
    }

}

export default Header;