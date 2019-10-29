import React from "react";
import {Jumbotron, Button} from 'reactstrap';
import './MonthlyArt.css';

const MonthlyArt = (props) => {
  return (
    <div>
      <h1 class="title-for-monthlyArt">MONTHLY ART</h1>
      <Jumbotron>
        <h1 className="display-3">MONTHLY ART SUBSCRIPTION BANNER</h1>
        <p className="lead">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tin-
                cidunt ut laoreet dolore magna aliquam erat volutpat.</p>
        <p class="lead">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
        <p className="button-subcribe">
          <Button color="primary">SUBCRIBE</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default MonthlyArt;