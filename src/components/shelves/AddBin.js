import React, { Component } from 'react';
import logo from '../media/logo.png';

import axios from 'axios';


class AddBin extends Component {
    constructor(props){
        super(props)
        this.state = {
            Name: '',
            Price: 0,
            pathname:''
        }
        this.postNewItem = this.postNewItem.bind(this);
    }


    componentDidMount(){
        if(this.props.location.pathname.includes('A')){
            this.setState({
                pathname: 'A'
            })
        }
    }

    postNewItem(name, price){
        
            var bin;
            var shelf;

            switch(this.props.location.pathname){
                case '/shelf/A/add/A1':
                    bin = 'A1';
                    shelf = 'A';
                    

                    break;
                case '/shelf/A/add/A2':
                    bin = 'A2';
                    shelf = 'A';

                    
                    break;
                case '/shelf/A/add/A3':
                    bin = 'A3';
                    shelf = 'A';

                    
                    break;
                case '/shelf/A/add/A4':
                    bin = 'A4';
                    shelf = 'A';

                    
                    break;
                case '/shelf/A/add/A3':
                    bin = 'A5';
                    shelf = 'A';

                    
                    break;

                    case '/shelf/B/add/B1':
                    bin = 'B1';
                    shelf = 'B';
                    

                    break;
                case '/shelf/B/add/B2':
                    bin = 'B2';
                    shelf = 'B';

                    
                    break;
                case '/shelf/B/add/B3':
                    bin = 'B3';
                    shelf = 'B';

                    
                    break;
                case '/shelf/B/add/B4':
                    bin = 'B4';
                    shelf = 'B';

                    
                    break;
                case '/shelf/B/add/B3':
                    bin = 'B5';
                    shelf = 'B';

                    
                    break;
            }

        axios.post(`http://localhost:4000/api/shelf/${bin}`, {bin: bin, name: this.state.Name, image: null, price: this.state.Price, shelf:shelf})

       
    }


    render(){

        
        return(
            <div>
                <div className='shelf-header'>
                <div className='backtobasics'>
                    <img src={logo}/>
                </div>
                <div className='shelfbinName'>
                    <span>Shelf {this.state.pathname}</span>
                </div>
                <div className='binName'>
                    <span>Add to Bin</span>
                </div>
                </div>
            <div className='add-container'>
                <div>
                    <span>Name</span>
                    <input className='add' type='text' onChange={(e) => this.setState({ Name: e.target.value})} value={this.state.Name}/>
                </div>
                <div>
                    <span>Price</span>
                    <input className='add' type='number' onChange={(e) => this.setState({ Price: e.target.value})} value={this.state.Price}/>
                </div>
                <div>
                    <button className='addItem-button' onClick={() => this.postNewItem(this.state.Name, this.state.Price)}>Post Item</button>
                </div>
                <p></p>
            </div>
            </div>
            
        )
    }
}

export default AddBin
