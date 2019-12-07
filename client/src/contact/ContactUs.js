import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import "./Contact.css";

const ContactUs = props => {
  return (
    <div className="contact-page">
      <div className="info-contact">
        <h1>CONTACT US</h1>
        <div className="info-contact1">
          <h3>Email:</h3>
          <a href="mailto:knack4arts@gmail.com" className="knack-link">
            knack4arts@gmail.com
          </a>
        </div>
      </div>
      <Form
        action="https://formspree.io/knack4arts@gmail.com"
        method="POST"
        class="contact_form"
      >
        <div className="form-contact">
          <h3 className="title-name-form">GET IN TOUCH</h3>
          <FormGroup row>
            <Label className="label-name" for="name" sm={2}>
              Name
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder=""
                className="form-position"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label className="label-name" for="email" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                className="form-position"
                type="email"
                name="email"
                id="email"
                placeholder=""
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label className="label-name" for="number" sm={2}>
              Phone Number
            </Label>
            <Col sm={10}>
              <Input
                className="form-position"
                type="number"
                name="number"
                id="number"
                placeholder=""
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label className="label-name" for="text" sm={2}>
              Message
            </Label>
            <Col sm={10}>
              <Input
                type="textarea"
                name="text"
                id="text"
                className="form-position message-box"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="checkbox2" sm={2}></Label>
            <Col sm={{ size: 10 }}>
              <FormGroup check>
                <Label check>
                  <Input
                    className="checkbox-form"
                    type="checkbox"
                    id="checkbox2"
                  />{" "}
                  I agree to Knack's Terms of Use and Privacy Policy and to
                  receive emails from Knack
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button className="knack-btn-contact">Submit</Button>
            </Col>
          </FormGroup>
        </div>
      </Form>
    </div>
  );
};

export default ContactUs;
