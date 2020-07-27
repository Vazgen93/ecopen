import React, { Component } from "react";
import './header.css';
import logo from '../../img/logo.png'
import order from '../../img/order.png'
import Slider from "infinite-react-carousel";
import SliderImg1 from '../../img/1.png';
import SliderImg2 from '../../img/2.png';
import SliderImg3 from '../../img/3.png';
import move from '../../img/move.png';
import facebook from '../../img/facebook.png';
import instagram from '../../img/instagram.png';
import Btn from "../btns/Order";

const style= {
 isShow: {
   transform: 'scaleX(0)'
 },
  burger: {
    none: {
      display:'block'
    },
    close: {
      one:{
        transform: 'rotate(0deg)'
      },
      two:{
        transform: 'rotate(-0deg)'
      }
    }
  }
}


if (window.innerWidth < 1201) {
  style.isShow.transform = 'scaleX(0)'
}else{
  style.isShow.transform = 'scaleX(1)'
}
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    }
    
  }
  ShowMenue=  () => {
    if (this.state.isShow == true) {
      style.isShow = {
        transform: 'scaleX(1)'
      }
      style.burger ={
        none: {
          display:'none'
        },
        close: {
          one:{
            position: 'absolute',
            transform: 'rotate(45deg)'
          },
          two:{
            position: 'absolute',
            transform: 'rotate(-45deg)'
          }
        }
      }
      this.setState({
        isShow: false
      })
    }else{
      style.isShow = {
        transform: 'scaleX(0)'
      }
      style.burger ={
        none: {
          display:'block'
        },
        close: {
          one:{
            transform: 'rotate(0deg)'
          },
          two:{
            transform: 'rotate(-0deg)'
          }
        }
      }
      this.setState({
        isShow: true
      })
    }

      
    
    
  }

  render() {
    return (
      <div className="container">
        <header >
          <div className="burger" onClick={this.ShowMenue}>
            <span style={style.burger.none}></span>
            <span style={style.burger.close.one}></span>
            <span style={style.burger.close.two}></span>
          </div>
          <div className="logo">
            <img src={logo} alt=""/>
          </div>
          <nav className="header_navigation">
            <ul style={style.isShow}>
              <li >
                <a  href="">{this.props.home}</a>
              </li>
              <li >
                <a  href="">{this.props.about}</a>
              </li>
              <li >
                <a  href="">{this.props.library}</a>
              </li>
              <li>
                <a  href="">{this.props.workers}</a>
              </li>
              <li >
                <a  href="">{this.props.order}
                <img className='order' src={order} alt=""/>
                </a>
              </li>
            </ul>
          </nav>
          <div></div> 
      </header>
      <Slider 
        className='slider'
        autoplay={true}
        autoplaySpeed={3000}
        arrows={false}
        >
          <div >
            <img src={SliderImg1} alt=""/>
          </div>
          <div >
            <img src={SliderImg2} alt=""/>
          </div>
          <div >
            <img src={SliderImg3} alt=""/>
          </div>
          
        </Slider>
        <Btn
          startActiv={this.props.activ}
          name={this.props.len}
        />
        <img src={move} alt="" className="move"/>
        <div className="soc_contacts">
          <a href="https://www.facebook.com/EcoPenArmenia" target="blank">
            <img src={facebook} alt="https://www.facebook.com/EcoPenArmenia"/>
          </a>
          <a href="https://www.instagram.com/ecopen.am/" target="blank">
           <img src={instagram} alt="https://www.instagram.com/ecopen.am/"/>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
