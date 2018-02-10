import React, { Component } from 'react';
import logo from '../media/logo.png';
import axios from 'axios';

export default class ReadBin extends Component {
    constructor(props){
        super(props)
        this.state = {
            Name: '',
            Price: null,
            Bin: '',
            Shelf: '',
            edit: true,
            classname:'Edit',
            biny: '',
            bin: ''
        }
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
    }
    componentDidMount(){
        var bin;
        

        switch(this.props.location.pathname){
            case '/bins/A1':
                bin = 'A1';
                this.setState({
                    bin: '1',
                    biny: 'A1',
                })
                break;
            case '/bins/A2':
                bin = 'A2';
                this.setState({
                    bin: '2',
                    biny: 'A2'
                })
                
                break;
            case '/bins/A3':
                bin = 'A3';
                this.setState({
                    bin: '3',
                    biny: 'A3'
                })
                
                break;
            case '/bins/A4':
                bin = 'A4';
                this.setState({
                    bin: '4',
                    biny: 'A4'
                })
                
                break;
            case '/bins/A5':
                bin = 'A5';
                this.setState({
                    bin: '5',
                    biny: 'A5'
                })
               
                break;
                case '/bins/B1':
                bin = 'B1';
                this.setState({
                    bin: '1',
                    biny: 'B1'
                })
                break;
            case '/bins/B2':
                bin = 'B2';
                this.setState({
                    bin: '2',
                    biny: 'B2'
                })
                
                break;
            case '/bins/B3':
                bin = 'B3';
                this.setState({
                    bin: '3',
                    biny: 'B3'
                })
                
                break;
            case '/bins/B4':
                bin = 'B4';
                this.setState({
                    bin: '4',
                    biny: 'B4'
                })
                
                break;
            case '/bins/B1':
                bin = 'B5';
                this.setState({
                    bin: '5',
                    biny: 'B5'
                })
               
                break;
        }

        axios.get(`http://localhost:4000/api/bin/${bin}`).then(response => {
            console.log(response.data[0]);
            this.setState({
                Name: response.data[0].name,
                Price: response.data[0].price,
                Bin: response.data[0].bin,
                Shelf: response.data[0].shelf

            })
        });
    }

    edit(){
        if(this.state.edit){
            this.setState({
                edit: false,
                classname: 'Save'
            })
            

        }else{
            axios.put(`http://localhost:4000/api/bin/${this.state.biny}?name=${this.state.Name}&price=${this.state.Price}`).then(response => {
                console.log(response.data[0]);
                this.setState({
                    edit: true,
                    classname: 'Edit'
    
                })
            });
            
        }
       
    }
    delete(){
        axios.delete(`http://localhost:4000/api/bin/${this.state.biny}`).then(response => {
            console.log('this item was deleted');
        })
    }

    render(){
        
        return (
            <div>
                <div className='shelf-header'>
                <div className='backtobasics'>
                    <img src={logo}/>
                </div>
                <div className='shelfbinName'>
                    <span>Shelf {this.state.pathname}</span>
                </div>
                <div className='binName'>
                    <span>Bin {this.state.bin}</span>
                </div>
                </div>
            <div className='view-container'>
                <div>
                    <span>Name</span>
                    <input className='add' type='text' onChange={(e) => this.setState({ Name: e.target.value})} value={this.state.Name} disabled={this.state.edit}/>
                </div>
                <div>
                    <span>Price</span>
                    <input className='add' type='number' onChange={(e) => this.setState({ Price: e.target.value})} value={this.state.Price} disabled={this.state.edit}/>
                </div>
                <div>
                    <div className='edit-group'>
                        <button onClick={() => this.edit()} className={this.state.classname}>{this.state.classname}</button>
                        <button onClick={() => this.delete()} className='delete'>delete</button>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}