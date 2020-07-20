import React,{Component} from 'react';
import ColorPen from './colors';
import './PenOrder.css';
import './button/Button.css'
import PenImage from './imagePen'
// import Butt from './button/Button';

class PenOrder extends Component{
    constructor(props){
        super(props)
        this.state = {
            color:{
                backgroundImage:`url(${PenImage[0]})`
            }
        }
    }

    choosePen = (e)=>{
        const pens = document.querySelectorAll('.color_pen li')
        
        pens.forEach((el,i)=>{
            pens[i].style.border = '1px solid white' 
            if(el == e.target){
                this.setState({color:{backgroundImage:`url(${PenImage[i]})`}})
            }
            
        })
        e.target.style.border = '0.2vw solid white' 
        console.log(this.state.color);
    }
    render(){
        console.log(PenImage);
        return(
            <div className="container modal_order">
                <button onClick={this.props.act} className='btn'>{this.props.language.main}</button>
                <div className="order_block1">
                    <h1>{this.props.language.heading}</h1>
                    <div className="pen">
                        <div>
                            <div className="body_pen" style={this.state.color}>
                                <input  type="text"/>
                                <input  type="text"/>
                            </div>

                            <div className="logo_pen">
                                <input name="logo_cap" type="file" />
                                <input name="logo_body" type="file" />
                            </div>
                            
                        </div>
                    </div>
                </div>


                <div className="order_block2">
                    <div className="color_pen">
                        <h2>{this.props.language.penColor}</h2>
                        <nav>
                            <ul>
                            {
                                ColorPen.map((e)=>(
                                <li onClick={this.choosePen} key={e.id} style={e}></li>
                                ))
                            }
                            </ul>
                        </nav>
                    </div>

                    <div className="point_size">
                        <h2>{this.props.language.pointSize}</h2>
                        <div>
                            <span><a href="">0.7</a></span>
                            <span><a href="">1.0</a></span>
                        </div>
                    </div>

                    <div className="point_color">
                        <h2>{this.props.language.inkColor}</h2>
                        <div>
                            <nav>
                                <ul>
                                    <li style = {{background:'rgb(9, 30, 179)'}}></li>
                                    <li style = {{background:'rgb(4, 4, 4)'}}></li>
                                    <li style = {{background:'rgb(255, 0, 0)'}}></li>
                                    <li style = {{background:'rgb(0, 255, 19)'}}></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default PenOrder