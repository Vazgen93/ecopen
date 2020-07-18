import React, { Component } from 'react';
import ElbakyanInfo from './components/elbakyanInfo'
import PenOrder from './PenOrder/PenOrder';
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      len: 'AM',
      activ:false
    }
  }
  LanguageValue = (e) => {
    
    this.setState({
      len: e.target.value
    })   
  }

  startEctiv = ()=>{
    this.setState({activ:!this.state.activ})
  }

  render(){
    return (
      <div className="App">
          <div className="langauge">
              <select name="" id="" onChange={this.LanguageValue}>
                <option value="AM">AM</option>
                <option value="EN">EN</option>
                <option value="RU">RU</option>
              </select>
            </div>
            
          {
            (!this.state.activ)?<ElbakyanInfo activ={this.startEctiv} len={this.state.len}/>:''
          }
        {
          (this.state.activ)?<PenOrder />:''
        }
        
      </div>
    );
  }
  
}

export default App;
