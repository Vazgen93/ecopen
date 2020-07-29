import React,{Component, Fragment} from 'react';
import './Basket.css'

class Basket extends Component{
    constructor(props){
        super(props)
        this.state = {
            count:1
        }
    }
    
    render(){
        return(
            <div className="basket">
                <div className="basket_pen">
                    <div className="pen_image" style={this.props.color}>
                        <span>{this.props.pName}</span>
                        <span>{this.props.bName}</span>
                    </div>

                    <div className="basket_pen_color">
                        <div>
                            <p>{this.props.inkColorText}</p>
                            <div style={{background:this.props.inkColor}}></div>
                        </div>

                        <div>
                            <p>{this.props.penColorText}</p>
                            <div style={{background:this.props.penColor}}></div>
                        </div>

                        <div>
                            <p>{this.props.quantityText}</p>
                            <p>{this.props.quantity}</p>
                        </div>
                    </div>
                </div>
                <div className="remove_buttons">
                        <button className={this.props.btnClass} onClick={this.props.remove} className= {`btn rem_btn ${this.props.btnClass}`}>&times;</button>
                </div>
            </div>
        )
    }
}

export default Basket