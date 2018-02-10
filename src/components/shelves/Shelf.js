import React, { Component } from 'react';
import logo from '../media/logo.png';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Shelf extends Component {
    constructor(props){
        super()
        this.state={
            data: '',
            shelf: '',
            path: '',
            read: ''
        }
    }

    componentDidMount(){
        var path;
        switch(this.props.location.pathname){
            case '/A':
                
                path = 'A';
                this.setState({
                    shelf: 'A',
                    path: '/shelf/A/add/A',
                    read: '/bins/A'
                })
                break;
            case '/B':
                path = 'B';
                this.setState({
                    shelf: 'B',
                    path: '/shelf/B/add/B',
                    read: '/bins/B'
                })
                break;
            case '/C':
                path = 'C';
                this.setState({
                    shelf: 'C'
                })
                break;
            case '/D':
                path = 'D';
                this.setState({
                    shelf: 'D'
                })
                break;
        }
        axios.get(`http://localhost:4000/api/shelf/${path}`).then(response => {
            this.setState({
                data: response.data
            })
        })
    }
  render() {

    {
    var bin1;
    var bin2;
    var bin3;
    var bin4;
    var bin5;

    if(this.state.data[0]){
      bin1 =  <Link className='link' to={`${this.state.read}1`}><div className='bin'>
                <span>
                    Bin 1
                </span>
                </div></Link>;          
    }else{
        bin1 =  <Link className='link' to={`${this.state.path}1`}><div className='add-item'>
                <span>
                    Add Item to Bin
                </span>
                </div></Link>;
    }

    if(this.state.data[1]){
        bin2 =  <Link className='link' to={`${this.state.read}2`}><div className='bin'>
                  <span>
                      Bin 2
                  </span>
                  </div></Link>;          
      }else{
          bin2 =  <Link className='link' to={`${this.state.path}2`}><div className='add-item'>
                  <span>
                      Add Item to Bin
                  </span>
                  </div></Link>;
      }

      if(this.state.data[2]){
        bin3 =  <Link className='link' to={`${this.state.read}3`}><div className='bin'>
                  <span>
                      Bin 3
                  </span>
                  </div></Link>;          
      }else{
          bin3 =  <Link className='link' to={`${this.state.path}3`}><div className='add-item'>
                  <span>
                      Add Item to Bin
                  </span>
                  </div></Link>;
      }

      if(this.state.data[3]){
        bin4 =  <Link className='link' to={`${this.state.read}4`}><div className='bin'>
                  <span>
                      Bin 4
                  </span>
                  </div></Link>;          
      }else{
          bin4 =  <Link className='link' to={`${this.state.path}4`}><div className='add-item'>
                  <span>
                      Add Item to Bin
                  </span>
                  </div></Link>;
      }

      if(this.state.data[4]){
        bin5 =  <Link className='link' to={`${this.state.read}5`}><div className='bin'>
                  <span>
                      Bin 5
                  </span>
                  </div></Link>;          
      }else{
          bin5 =  <Link className='link' to={`${this.state.path}5`}><div className='add-item'>
                  <span>
                      Add Item to Bin
                  </span>
                  </div></Link>;
      }

    
}
    return (
      <div>
          <div className='shelf-header'>
                <div className='backtobasics'>
                    <img src={logo}/>
                </div>
                <div className='shelfName'>
                    <span>Shelf {this.state.shelf}</span>
                </div>
            </div>
        <div className='bin-container'>
            <div>
            
        
            {bin1}
            {bin2}
            {bin3}
            {bin4}
            {bin5}
           
          
            </div>
        </div>
      </div>
    );
  }
}

export default Shelf;
