import React,{Component} from 'react';
// import PenOrder from './PenOrder/PenOrder';
import Test from './test/Test';
import Lenguage from './Language/Lenguage'
import './App.css';

class Ecopen extends Component{
  constructor(props){
    super(props)
    this.click = this.click.bind(this)
    this.state={
      leng:2
    }
  }

   
 
  click(e){
    this.setState({leng:+e.target.id});
    
    // return this.state.leng
    // return Lenguage[this.state.leng] 
  }
  render(){
    return(
      <div>
        <div id='0' onClick={this.click}>En</div>
        <div id='1' onClick={this.click}>Rus</div>
        <div id='2' onClick={this.click}>Am</div>
        <h1>{this.state.leng}</h1>
        <Test data={Lenguage[this.state.leng].len}/>
        <Test data={this.state.leng}/>

        {
          
        }
        {/* <PenOrder /> */}
      </div>
    )
  }
}

export default Ecopen;
