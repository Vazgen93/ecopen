import React, { Component } from 'react';
import PenOrder from './PenOrder/PenOrder';
import Language from './components/Language';
import './App.css';
import Header from './components/Header';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      len: 'AM'
    }
  }
  LanguageValue = (e) => {
    
    this.setState({
      len: e.target.value
    })   
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
        <Header 
        home={Language[this.state.len].HeaderNav.home}
        about={Language[this.state.len].HeaderNav.about}
        library={Language[this.state.len].HeaderNav.labrary}
        workers={Language[this.state.len].HeaderNav.workers}
        order={Language[this.state.len].HeaderNav.order}
        
        />
        <PenOrder />
      </div>
    );
  }
  
}

export default App;
