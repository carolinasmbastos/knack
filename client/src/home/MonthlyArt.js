import React from "react";
import { Col, Container, Card, CardTitle, CardText, CardImg, CardImgOverlay,Button } from 'reactstrap';

const MonthlyArt = (props) => {
  return (
    <div>
      <Container row>
      <Card inverse>
        <CardImg className="monthlyArtBgImg" width="100%" src="./artwork.jpg" alt="Card image cap" />
        <CardImgOverlay className="monthlyArtContent"> 
          <CardTitle className = "text">Card Title</CardTitle>
          <CardText className = "bgtext"    >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Col className="buttonContainer">
            <Button color="success">Subscribe</Button>
          </Col>
        </CardImgOverlay>
      </Card>
      </Container>
    </div>
  );
};


export default MonthlyArt;