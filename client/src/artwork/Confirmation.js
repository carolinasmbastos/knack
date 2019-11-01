import React from "react";
import {Col} from 'reactstrap'
import { Link } from "react-router-dom";

export default class Confirmation extends React.Component {
  render() {
    return (
        <Col md={{size: 4, offset: 4}} className="confirmationBox">
            <h1>CONFIRMATION</h1>
            <p>
              Your order (Order ID: {this.props.match.params.orderId}) has been requested. The Gallery will contact you with further details on your registered e-mail.
            </p>
            <Link to="/">Return to Home</Link>
        </Col>
    );
  }
}