import React from "react";
import { Col, Container, Card, CardTitle, CardText, CardImg, CardImgOverlay,Button } from 'reactstrap';

const MonthlyArt = (props) => {
  return (
    <div>
      <Container row className='monthlyArtContainer'>
      <hr />
      <h2>MONTHLY ART</h2>
      <Card inverse className='monthlyArtCard'>
        <CardImg className="monthlyArtBgImg" width="100%" src="./artwork.jpg" alt="Card image cap" />
        <CardImgOverlay className="monthlyArtContent"> 
          <CardTitle className="text"><h3>Subscribe to Monthly Art!</h3></CardTitle>
          <CardText className="bgtext">
            Switch to a new Artwork every month and revive the vibe of your place.
          </CardText>
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