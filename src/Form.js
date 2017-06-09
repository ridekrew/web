import React, {Component} from "react";
import "./Form.css";
import {FormControl} from "react-bootstrap";
import {Col,Row} from "react-bootstrap";
class Form extends Component {
  render() {
    return (
        <div className = "form_div">
                
            
            <h1>Profile</h1>
                

            <form>

                <Row>

                <Col md={6} sm={5}>
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
                
                <h1>Social Security</h1>
                <p>We need your social security number for the driver background check</p>
                <p>The information will stay private and secure</p>
                <Row>
                    <Col md={6} sm={6}>
                    <FormControl id = "formControlsSocialSecurity" 
                    type = "text"
                    label = "Social Security"
                    placeholder = "Social Security">
                    </FormControl> 
                    </Col>
                </Row>
                    <h1>Background Check</h1>
                <Row>
                    <FormControl id = "formControlsBackgroundCheck"
                    type = "checkbox"
                    label = "I akcnowledge"
                    placeholder = "Social Security">
                    </FormControl>
                </Row>
                <h1>Driver License</h1>
                <p>Upload a photo of your driver livense.</p>
                <Row>
                    <button> Upload </button>
                </Row> 

                <h1>Vehicle Insurance</h1>
                <p>Upload a photo of your vehicle insurance.</p>
                <Row>
                    <button> Upload </button>
                </Row>

            </form>
        </div>

    );
  }
}

export default Form;