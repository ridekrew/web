import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar";
import Form from "./Form";
import InfoPanel from "./InfoPanel";
import {Col,Row} from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
        <Col md={12} sm={12}>
          <NavBar></NavBar>
        </Col>
        </Row>

        <Row>
        <Col md={6} sm={6}>
          <Form></Form>
        </Col>
        
        <Col md={6} sm={6}>
          <InfoPanel></InfoPanel>
        </Col>
        </Row>

        
      </div>
    );
  }
}

export default App;
