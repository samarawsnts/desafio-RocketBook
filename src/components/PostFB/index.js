import React, { Component } from "react";
import "./style.css";
import Davi from "../../assets/images/davi.jpg";

class PostFB extends Component {
  state = {
    post: [
      {
        avatar:
          "http://s2.glbimg.com/jsaPuF7nO23vRxQkuJ_V3WgouKA=/e.glbimg.com/og/ed/f/original/2014/06/10/461777879.jpg",
        name: "Davi Cardoso",
        hour: "há 3min",
        mensage:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      },
      {
        avatar:
          "https://s2.glbimg.com/QX11K9BpnAIsM8CyqA4ddCo2QIA=/512x320/smart/e.glbimg.com/og/ed/f/original/2016/08/11/chris.jpg",
        name: "Chris Rock",
        hour: "há 2h",
        mensage:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem",
      },
      {
        avatar:
          "https://www.napratica.org.br/wp-content/uploads/2019/07/michelle-obama-1.jpg",
        name: "Michelle Obama",
        hour: "há 5h",
        mensage:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ",
      },
    ],
    
  };

  render() {
    return (
      <>
        {this.state.post.map((element, key) => (
          <div className="post" key= {key}>
            <div className="post-header">
              <div className="image-wrapper">
                <img src={element.avatar} alt="Avatar Davi" />
                </div>
              <div className="post-info">
                <p className="name">{element.name} </p>
                <p className="hour">{element.hour}</p>
              </div>
            </div>
            <p className="mensage">{element.mensage}
            </p>
          </div>
        ))}
      </>
    );
  }
}

export default PostFB;
