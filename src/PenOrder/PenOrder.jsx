import React,{Component, Fragment} from 'react';
import ColorPen from './colors';
import './PenOrder.css';
import './button/Button.css'
import PenImage from './imagePen'
import Basket from './Basket/Basket'
// import Butt from './button/Button';
let info = []
class PenOrder extends Component{
    constructor(props){
        super(props)
        this.state = {
            color:{
                backgroundImage:`url(${PenImage[0]})`
            },
            cost:0,
            pen:{
                penColor:'rgb(255, 253, 208)',
                inkColor:'rgb(9, 30, 179)',
                pointSize:'',
                penImg: {backgroundImage:`url(${PenImage[0]})`},
                quantity:1,
                classN:'',
            },
            penColor:'',
            text1:'',
            text2:'',
            arr:[]
        }
    }
  

    componentDidMount(){
        let gumar = 0;
        this.state.arr.map(({quantity})=>{
            gumar+=quantity
        })
        // alert(gumar)
        if(gumar<10){
            this.setState({cost:gumar*500})
        }else if(gumar<29){
            this.setState({cost:gumar*400})
        }else{
            this.setState({cost:gumar*300})
        }
    }

 

    plius = ()=>{
        // this.setState({count:++this.state.count})
        this.setState({pen:{
            penColor:this.state.pen.penColor,
            inkColor:this.state.pen.inkColor,
            pointSize:this.state.pen.pointSize,
            penImg:this.state.pen.penImg,
            pointSize:this.state.pen.pointSize,
            quantity:++this.state.pen.quantity
        }})
        
        // console.log(this.state.pen.quantity);
    }
    minus = ()=>{
        this.setState({pen:{
            penColor:this.state.pen.penColor,
            inkColor:this.state.pen.inkColor,
            pointSize:this.state.pen.pointSize,
            penImg:this.state.pen.penImg,
            pointSize:this.state.pen.pointSize,
            quantity:(this.state.pen.quantity>1)?--this.state.pen.quantity:this.state.pen.quantity
        }})
    }
    inpQuantity = (e)=>{
        this.setState({pen:{
            penColor:this.state.pen.penColor,
            inkColor:this.state.pen.inkColor,
            pointSize:this.state.pen.pointSize,
            penImg:this.state.pen.penImg,
            pointSize:this.state.pen.pointSize,
            quantity:(e.target.value>1)?e.target.value:1
        }})
    }

    removePen= (e)=>{
        // alert(e.target.classList[2])
       info.map((el,i)=>{
        if(e.target.classList[2] == 'btn' + i){
            // alert(i)
            info.splice(i,1)
        }
       })
       this.setState({arr:info})
    }

    add = ()=>{
        info.push(this.state.pen)
        this.setState({arr:info})
        this.setState({pen:{
            penColor:this.state.pen.penColor,
            inkColor:this.state.pen.inkColor,
            pointSize:this.state.pen.pointSize,
            penImg:this.state.pen.penImg,
            pointSize:this.state.pen.pointSize,
            quantity:1
        }})
        // let gumar = 0;
        // this.state.arr.map(({quantity})=>{
        //     gumar+=quantity
        // })
        // // alert(gumar)
        // if(gumar<10){
        //     this.setState({cost:gumar*500})
        // }else if(gumar<29){
        //     this.setState({cost:gumar*400})
        // }else{
        //     this.setState({cost:gumar*300})
        // }
        
    }

  

    pointColor = (e)=>{
        // e.target.style.border = '0.2vw solid white'

        const pens = document.querySelectorAll('.point_color li')
        
        pens.forEach((el,i)=>{
            pens[i].style.border = '1px solid white' 
            // if(el == e.target){
            //     this.setState({color:{backgroundImage:`url(${PenImage[i]})`}})
            // }
            
        })
        e.target.style.border = '0.2vw solid white' ;
        this.setState({pen:{
            penColor:this.state.pen.penColor,
            inkColor:e.target.style.background,
            pointSize:this.state.pen.pointSize,
            penImg:this.state.pen.penImg,
            pointSize:this.state.pen.pointSize,
            quantity:this.state.pen.quantity
        }})
        
    }

    pointSize = ()=>{
        
    }

    choosePen = (e)=>{
        const pens = document.querySelectorAll('.color_pen li')
        let img ;
        pens.forEach((el,i)=>{
            pens[i].style.border = '1px solid white' 
            if(el == e.target){
                this.setState({color:{backgroundImage:`url(${PenImage[i]})`}})
                img = {backgroundImage:`url(${PenImage[i]})`}
            }
            
        })
        e.target.style.border = '0.2vw solid white' 
        // console.log(this.state.color);
        let inps = document.querySelectorAll('.body_pen > input')
        if(e.target.classList[0] == 'pen31'){
            
            inps[0].disabled = 'disabled'
            inps[1].disabled = 'disabled'
            inps[0].value = 'no text'
            inps[1].value = 'no text'
            console.log(inps);
        }else{
            inps[0].value = 'text'
            inps[1].value = 'text'
            inps[0].disabled = NaN
            inps[1].disabled = NaN
        }
        
        this.setState({penColor:e.target.style.background})

        this.setState({pen:{
            penColor:e.target.style.background,
            pointColor:this.state.pen.pointColor,
            pointSize:this.state.pen.pointSize,
            penImg:img,
            pointSize:this.state.pen.pointSize,
            quantity:this.state.pen.quantity
        }})
        
    }


    // write = (e)=>{

    // }
    render(){
        console.log(PenImage);
        // console.log(this.state.penColor);
        return(
            <Fragment>
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
                                <li className={'pen'+e.id} onClick={this.choosePen} key={e.id} style={e}></li>
                                ))
                            }
                            </ul>
                        </nav>
                    </div>

                    <div className="point_size_penCont">
                        <h2>{this.props.language.pointSize}</h2>
                        <div>
                            <div className="point_size">
                                <span><a href="">0.7</a></span>
                                <span><a href="">1.0</a></span>
                            </div>
                            <h3>{this.props.language.quantity}</h3>
                            <div className="count_pen">
                                
                                <button onClick={this.plius} className="btn count">&#43;</button>
                                <input onChange={this.inpQuantity} className="input-group-field" type="number" value={this.state.pen.quantity}/>
                                <button onClick={this.minus} className="btn count">&minus;</button>

                            </div>
                        </div>
                    </div>

                    <div className="point_color">
                        <h2>{this.props.language.inkColor}</h2>
                        <div>
                            <nav>
                                <ul>
                                    <li onClick={this.pointColor} style = {{background:'rgb(9, 30, 179)'}}></li>
                                    <li onClick={this.pointColor} style = {{background:'rgb(4, 4, 4)'}}></li>
                                    <li onClick={this.pointColor} style = {{background:'rgb(255, 0, 0)'}}></li>
                                    <li onClick={this.pointColor} style = {{background:'rgb(0, 255, 19)'}}></li>
                                </ul>
                            </nav>
                        </div>

                        
                    </div>


                </div>

                


                <div className="buy_next">
                    <button onClick={this.add} className="btn buy">{this.props.language.add}</button>
                    <button  className="btn buy">{this.props.language.toGo}</button>
                </div>

            </div>
            
            <div className="penOrder_info">
                     <div>
                        <p>{this.props.language.pensInfo.price1}</p>
                        <p>{this.props.language.pensInfo.price2}</p>
                        <p>{this.props.language.pensInfo.price3}</p>
                        <p>{this.props.language.pensInfo.infDop}</p>
                    </div>

                    <div className="pen_price">
                            <p>{this.props.language.price}:</p>
                            <p>{this.state.cost}</p>
                            <p>{this.props.language.amd}</p>
                    </div>       
            </div>

            <div className="container_basket">
                {
                    this.state.arr.map(({penColor,pointSize,inkColor,penImg,quantity},i)=>(
                        <Basket key={i} 
                        color={penImg}
                        inkColorText={this.props.language.inkColor}
                        inkColor={inkColor}
                        penColorText={this.props.language.penColor}
                        penColor={penColor}
                        plus={this.plius}
                        quantity={quantity}
                        quantityText={this.props.language.quantity}
                        remove={this.removePen}
                        btnClass={'btn'+i}
                        />
                    ))
                }
            </div>
            </Fragment>
        )
    }
}

export default PenOrder