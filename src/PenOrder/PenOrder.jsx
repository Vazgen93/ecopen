import React,{Component} from 'react';
// import './PemOrder.css';

const colorPen = [
    {id:1,background:'red',width:'20px',height:'20px'},
    {id:2,background:'blue',width:'20px',height:'20px'},
    {id:3,background:'green',width:'20px',height:'20px'},
    {id:4,background:'orange',width:'20px',height:'20px'},
    {id:5,background:'black',width:'20px',height:'20px'}
]

class PenOrder extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="modal_order">
                <div className="block1">
                    <h1>{this.props.heading}</h1>
                    <div className="pen">
                        <div>
                            <div className="cap_pen">
                                <input type="text"/>
                            </div>

                            <input name="logo_cap" type="file" />
                        </div>

                        <div>
                            <div className="body_pen">
                                <input type="text"/>
                            </div>

                            <input name="logo_body" type="file" />
                        </div>
                    </div>
                </div>


                <div className="block2">
                    <div className="color_pen">
                        <ul>
                        {
                            colorPen.map((e)=>(
                            <li key={e.id} style={e}>{e.color}</li>
                            ))
                        }
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

export default PenOrder