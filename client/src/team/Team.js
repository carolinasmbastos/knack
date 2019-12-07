import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";
import "./Team.css";

const Team = props => {
  return (
    <div>
      <div className="info-team-page">
        <h1>ARTISTS OF KNACK</h1>
        <p>
          Meet the creative minds behind the making and working of 'Knack, you
          one stop destination to rent, buy or sell art!
        </p>
      </div>
      <div className="designer-team">
        <Card className="block-card-team">
          <a
            href="https://www.linkedin.com/in/anurag-sharma-210b04178/"
            target="_blank"
          >
            <CardBody className="card-team">
              <CardImg
                className="img-team"
                top
                width="100%"
                src=" ./img/owls/Anurag.jpg"
              />
              <CardTitle>
                <b>ANURAG SHARMA</b>
              </CardTitle>
              <CardSubtitle>PM & UI/UX DESIGNER</CardSubtitle>
            </CardBody>
          </a>
        </Card>
        <Card className="block-card-team">
          <a href="mailto:ricky87412@gmail.com" target="_blank">
            <CardBody className="card-team">
              <CardImg
                className="img-team"
                top
                width="100%"
                src=" ./img/owls/Balvinder.jpg"
              />
              <CardTitle>
                <b>BALWINDER SIDHU</b>
              </CardTitle>
              <CardSubtitle>UI DESIGNER</CardSubtitle>
            </CardBody>
          </a>
        </Card>
        <Card className="block-card-team">
          <a
            href="https://www.linkedin.com/in/manpreet-kaur-8b1520181"
            target="_blank"
          >
            <CardBody className="card-team">
              <CardImg
                className="img-team"
                top
                width="100%"
                src=" ./img/owls/Manpreet.jpg"
              />
              <CardTitle>
                <b>MANPREET KAUR</b>
              </CardTitle>
              <CardSubtitle>UI DESIGNER</CardSubtitle>
            </CardBody>
          </a>
        </Card>
      </div>
      <div className="developer-team">
        <Card className="block-card-team">
          <a
            href="https://www.linkedin.com/in/carolina-sm-bastos/"
            target="_blank"
          >
            <CardBody className="card-team">
              <CardImg
                className="img-team"
                top
                width="100%"
                src=" ./img/owls/Carol.jpg"
              />
              <CardTitle>
                <b>CAROLINA DE SOUZA</b>
              </CardTitle>
              <CardSubtitle>FULL-STACK DEVELOPER</CardSubtitle>
            </CardBody>
          </a>
        </Card>
        <Card className="block-card-team">
          <a
            href="https://www.linkedin.com/in/john-nguyen-743832183/"
            target="_blank"
          >
            <CardBody className="card-team">
              <CardImg
                className="img-team"
                top
                width="100%"
                src=" ./img/owls/john.jpg"
              />
              <CardTitle>
                <b>HONG AN NGUYEN</b>
              </CardTitle>
              <CardSubtitle>FULL-STACK DEVELOPER</CardSubtitle>
            </CardBody>
          </a>
        </Card>
        <Card className="block-card-team">
          <a href="mailto:jbrar27@mylangara.ca" target="_blank">
            <CardBody className="card-team">
              <CardImg
                className="img-team"
                top
                width="100%"
                src=" ./img/owls/Jagmeet.jpg"
              />
              <CardTitle>
                <b>JAGMEET KAUR BRAR</b>
              </CardTitle>
              <CardSubtitle>FRONT-END DEVELOPER</CardSubtitle>
            </CardBody>
          </a>
        </Card>
        <Card className="block-card-team">
          <a
            href="https://www.linkedin.com/in/prathameshvaidya/"
            target="_blank"
          >
            <CardBody className="card-team">
              <CardImg
                className="img-team"
                top
                width="100%"
                src=" ./img/owls/Pratt.jpg"
              />
              <CardTitle>
                <b>PRATHAMESH VAIDYA</b>
              </CardTitle>
              <CardSubtitle>FULL-STACK DEVELOPER</CardSubtitle>
            </CardBody>
          </a>
        </Card>
      </div>
      <div className="end-team-page">
        <p>Get ready for a new way to experience art</p>
      </div>
    </div>
  );
};

export default Team;
