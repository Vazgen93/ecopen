import React, { Component } from 'react';
import PenOrder from './PenOrder/PenOrder';
import Lenguage from './Language/Lenguage'
import './App.css';
import Header from './components/Header';

class App extends Component {
  constructor(props){
    super(props)
    this.getLenguage = this.getLenguage.bind(this);
    this.state = {
      len:"AM"
    }
  }

  getLenguage(e){
    this.setState({len:e.target.value})
    console.log(this.state);
  }

  render(){
    let x = this.state.len
    // console.log(this.state.len);
    // console.log(Lenguage[this.state.len]);
    // console.log(Lenguage);
    return (
      <div className="App">
        <div className="langauge">
            <select onChange={this.getLenguage} name="" id="">
              <option id="0" value="AM">AM</option>
              <option id="1" value="EN">EN</option>
              <option id="2" value="RU">RUS</option>
            </select>
        </div>
        <Header 
        home={Lenguage[this.state.len].headerNav.home}
        about={Lenguage[this.state.len].headerNav.about}
        library={Lenguage[this.state.len].headerNav.library}
        workers={Lenguage[this.state.len].headerNav.workers}
        order={Lenguage[this.state.len].headerNav.order}
        />
        <PenOrder />
      </div>
    );
  }
  
}

export default App;
