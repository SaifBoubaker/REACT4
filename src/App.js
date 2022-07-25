import React, {Component} from 'react'
import Profile from './component/profile';
import Timer from './component/timer';
import './App.css';

class App  extends Component {
  constructor(){
    super()
    this.state ={
      fullName:'Boubaker Saif',
      show : false
      
    }
  }
  ShowProfile =()=>{
    this.setState({
      show : !this.state.show
    })
  }
  render() { 
    let fullName = this.state.fullName
    return (
      <div className="App">
        <h1>{fullName}</h1>
        <div>{this.state.show && <Profile></Profile>}</div>
        <button onClick={()=>this.ShowProfile()}>{this.state.show? 'Hide Profile' : 'Show Profile'}</button>
        <Timer></Timer>
        </div>

    );
  }
}

export default App;

