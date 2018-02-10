import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';

export default class Shelves extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <Header/>
                <div className="box">
                    <div>
                    <Link to='A'><button className='btn'>Shelf A</button></Link>
                    <Link to='B'><button className='btn'>Shelf B</button></Link>
                    <Link to='C'><button className='btn'>Shelf C</button></Link>
                    <Link to='D'><button className='btn'>Shelf D</button></Link>
                    
                    </div>
                </div>
            </div>
        )
    }
}