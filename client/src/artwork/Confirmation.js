import React from "react";
import { Col, Card, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";

export default class Confirmation extends React.Component {
  render() {
    return (
      <Col md={{ size: 4, offset: 4 }} className="confirmationBox">
        <Card body>
          <CardTitle>
            <h2 className="confirmationHeading">CONFIRMATION</h2>
          </CardTitle>
          <hr />
          <CardText>
            <img
              src="/img/assets/confirmation.svg"
              alt="Confirmation"
              className="confirmationSvg"
            />
            Your order (Order ID: {this.props.match.params.orderId}) has been
            requested. The Gallery will contact you with further details on your
            registered e-mail.
          </CardText>
          <hr />
          <p className="homeLink">
            Return to <Link to="/">Home</Link>
          </p>
        </Card>
      </Col>
    );
  }
}
