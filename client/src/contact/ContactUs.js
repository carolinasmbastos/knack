import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link} from "react-router-dom";
import './Contact.css'



const ContactUs = (props) => {
    return (
    
      <Form>
         
          <div className="contact-page">
          <div className="info-contact">
          <h1>CONTACT US</h1>
          <h3>Address:</h3>
          <p>lorem</p>
          <h3>Mobile</h3>
          <p>XXXXXXXXXXXXXX</p>
          </div>
        <div className="form">
          <h3 className="title-name-form">GET IN TOUCH</h3>
        <FormGroup row>
          <Label for="name" sm={2}></Label>
          <Col sm={10}>
            <Input type="text" name="name" id="name" placeholder="Enter your name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="email" sm={2}></Label>
          <Col sm={10}>
            <Input type="email" name="email" id="email" placeholder="Enter your email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="number" sm={2}></Label>
          <Col sm={10}>
            <Input type="number" name="number" id="number" placeholder="Enter your mobile number"/>
          </Col>
        </FormGroup>
        
        <FormGroup row>
          <Label for="text" sm={2}></Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="text" placeholder="Share your any message" />
          </Col>
          </FormGroup>
          <FormGroup row>
        <Label for="checkbox2" sm={2}></Label>
        <Col sm={{ size: 10 }}>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              I agree to Knack's Terms of Use and Privacy Policy and to receive emails from Knack
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>       
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
        
        </div>
        </div>
      </Form>

    );
  }
  
  export default ContactUs

