import React, { Component } from 'react';
import PenOrder from './PenOrder/PenOrder';
import Language from './components/Language';
import './App.css';
import Header from './components/Header/Header';
import Btn from './components/btns/Order';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'

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
        <div className="container">
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
          gallery={Language[this.state.len].HeaderNav.gallery}
          partners={Language[this.state.len].HeaderNav.partners}
          order={Language[this.state.len].HeaderNav.order}
          
          />
          <Btn name={Language[this.state.len].HeaderNav.order}/>
        </div>
        <WhyChooseUs 
          name={Language[this.state.len].ecopen}
          title={Language[this.state.len].WhyChooseUs}
          ecology= {Language[this.state.len].cardText.ecology}
          quality= {Language[this.state.len].cardText.quality}
          stylish= {Language[this.state.len].cardText.stylish}
          
        />
      </div>
    );
  }
  
}

export default App;
