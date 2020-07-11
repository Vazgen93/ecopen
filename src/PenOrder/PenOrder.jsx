import React,{Component} from 'react';
import ColorPen from './colors';
// import './PemOrder.css';



class PenOrder extends Component{
    // constructor(props){
    //     super(props)
    // }

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
                        <ul className='color_'>
                        {
                            ColorPen.map((e)=>(
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