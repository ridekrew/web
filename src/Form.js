import React, {Component} from "react";
import "./Form.css";
import {FormControl} from "react-bootstrap";
import {Col,Row} from "react-bootstrap";
class Form extends Component {
  render() {
    return (
        <div>
            <form>
                <Row>
                    <h1>Profile</h1>
                </Row>

                <Row>

                <Col md={6} sm={6}>
                <FormControl id = "formControlsFirstName" 
                type = "text"
                label = "First Name"
                placeholder = "First Name">
                </FormControl> 
                </Col>

                <Col md={6} sm={6}>
                <FormControl id = "formControlsLastName" 
                type = "text"
                label = "Last Name"
                placeholder = "Last Name">
                </FormControl> 
                </Col>

                </Row>                

                <Row>

                <Col md={6} sm={6}>
                <FormControl id = "formControlsEmail" 
                type = "email"
                label = "Email address"
                placeholder = "Email">
                </FormControl> 
                </Col>

                <Col md={6} sm={6}>
                <FormControl id = "formControlsPassword" 
                type = "text"
                label = "Password"
                placeholder = "Password">
                </FormControl> 
                </Col>

                </Row>

                <Row>
                <Col md={6} sm={6}>
                <FormControl id = "formControlsPhoneNumber" 
                type = "text"
                label = "Phone Number"
                placeholder = "Phone Number">
                </FormControl> 
                </Col>

                <Col md={6} sm={6}>
                <FormControl id = "formControlsHomeAddress" 
                type = "text"
                label = "HomeAddress"
                placeholder = "HomeAddress">
                </FormControl> 
                </Col>

                </Row>
                    <Col md={6} sm={6}>
                    <FormControl id = "formControlsSocialSecurity" 
                    type = "text"
                    label = "Social Security"
                    placeholder = "Social Security">
                    </FormControl> 
                    </Col>

                <Row>
                    

                </Row>
            </form>
        </div>

    );
  }
}

export default Form;