import React, {Component} from "react";
import img1 from './img/img1.jpg';
import "./InfoPanel.css";
import {Col,Row} from "react-bootstrap";

class InfoPanel extends Component {
  render() {
    return (
      <div>
        <Row>
        Know your schedule. Know your pay.
        </Row>
        <img className="profile_pic" src={img1}/>  
        <Row>
            Building safe and friendly driver Krew.
        </Row>
      </div>
    );
  }
}

export default InfoPanel;