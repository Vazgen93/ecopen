import React, { Component } from "react";
import './block.css'


class Block extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
       <div className={this.props.class}>
           <img src={this.props.img} alt=""/>
           <div className="content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore molestias voluptates, dignissimos repellat, cum atque beatae molestiae quibusdam vel error tenetur veniam? Suscipit, accusamus. Quidem accusantium iure autem blanditiis quas.Deleniti voluptatum sit, fugit culpa doloribus nisi asperiores cum nam quam delectus numquam molestiae magnam enim praesentium cumque quo eligendi! Non sequi molestiae iure et voluptatem esse voluptates, quasi veritatis.
           </div>
       </div>
      </div>
    );
  }
}

export default Block;
