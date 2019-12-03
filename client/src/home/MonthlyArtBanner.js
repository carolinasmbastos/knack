import React from "react";
import {
  Col,
  Container,
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";

const MonthlyArtBanner = props => {
  return (
    <div>
      <Container row className="monthlyArtContainer">
        <hr />
        <h2>MONTHLY ART</h2>
        <Card inverse className="monthlyArtCard">
          <CardImg
            className="monthlyArtBgImg"
            width="100%"
            src="./img/assets/monthly-art-banner.jpg"
            alt="Card image cap"
          />
          <CardImgOverlay className="monthlyArtContent">
            <CardTitle className="text"></CardTitle>
            <CardText className="bgtext">
              Switch to a new Artwork every month and revive the vibe of your
              place.
            </CardText>
            <Col className="buttonContainer">
              <Link
                to="/monthlyArt"
                className="nav-link knack-btn knack-btn-light"
              >
                SUBSCRIBE
              </Link>
            </Col>
          </CardImgOverlay>
        </Card>
      </Container>
    </div>
  );
};

export default MonthlyArtBanner;
