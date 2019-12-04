import React from "react";
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button} from 'reactstrap';
import {Link} from "react-router-dom";
import './Team.css'

  const Team = (props) => {
    return (
      <div>
          <div className="info-team-page">
              <h1>ARTISTS OF KNACK</h1>
              <p>Meet the creative minds behind the making and working of 'Knack, you one stop destination to rent, buy or sell art!</p>
          </div>
        <div className="designer-team">
        <Card className="block-card-team">
         
          <CardBody className="card-team">
          <CardImg className="img-team" top width="100%" src=" ./img/owls/Anurag.jpg" />
            <CardTitle>ANURAG SHARMA</CardTitle>
            <CardSubtitle>UI/UX DESIGNER</CardSubtitle>
            </CardBody>
        </Card>
        <Card className="block-card-team">
          
          <CardBody className="card-team">
          <CardImg className="img-team" top width="100%" src=" ./img/owls/Balvinder.jpg"  />
            <CardTitle>BALVINDER SIDHU</CardTitle>
            <CardSubtitle>UI DESIGNER</CardSubtitle>
             
          </CardBody>
        </Card>
        <Card className="block-card-team">
          
          <CardBody className="card-team">
          <CardImg className="img-team" top width="100%" src=" ./img/owls/Manpreet.jpg"  />
            <CardTitle>MANPREET KAUR</CardTitle>
            <CardSubtitle>UI DESIGNER</CardSubtitle>
           
          </CardBody>
        </Card>
        </div>
        <div className="developer-team">
        <Card className="block-card-team">
          
          <CardBody className="card-team">
          <CardImg className="img-team" top width="100%" src=" ./img/owls/Carol.jpg"  />
            <CardTitle>CAROLINA DE SOUZA</CardTitle>
            <CardSubtitle>FULL-STACK DEVELOPER</CardSubtitle>
             
          </CardBody>
        </Card>
        <Card className="block-card-team">
          
          <CardBody className="card-team">
          <CardImg className="img-team" top width="100%" src=" ./img/owls/john.jpg"  />
            <CardTitle>HONG AN NGUYEN</CardTitle>
            <CardSubtitle>FULL-STACK DEVELOPER</CardSubtitle>
            
          </CardBody>
        </Card>
        <Card className="block-card-team">
         
          <CardBody className="card-team">
          <CardImg className="img-team" top width="100%" src=" ./img/owls/Jagmeet.jpg"  />
            <CardTitle>JAGMEET KAUR BRAR</CardTitle>
            <CardSubtitle>FRONT-END DEVELOPER</CardSubtitle>
             
          </CardBody>
        </Card>
        <Card className="block-card-team">
          
          <CardBody className="card-team">
          <CardImg className="img-team" top width="100%" src=" ./img/owls/Pratt.jpg"  />
            <CardTitle>PRATHAMESH VAIDYA</CardTitle>
            <CardSubtitle>FULL-STACK DEVELOPER</CardSubtitle>
           
          </CardBody>
        </Card>
        </div>
        <div className="end-team-page"> 
        <p>Get ready for a new way to experience art</p>
        </div>

      </div>
    );
  };

  
  export default Team;