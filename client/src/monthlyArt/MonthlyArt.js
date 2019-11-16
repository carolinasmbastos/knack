import React from 'react'
import { Container, Row, Col, Card, Button, CardTitle, CardText, Label, Input } from 'reactstrap'
import './MonthlyArt.css'
import {getMonthlyArtSubscriptionStatus, getPaymentMethods, getPlans, subscribeToMonthlyArt} from './api-monthly-art.js'
import {formatDate} from '../helpers/dateOps'

export default class MonthlyArt extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      subscriptionDetails: {},
      plans: [],
      paymentMethods: [],
      plan: 0,
      payment: 0,
    }

    this.checkSubscriptionStatus()

    getPlans()  
    .then(data => {
      this.setState({
        plans: data
      })
    }).catch(error => {
      console.log(error)
    })

    // Replace the hardcoded User ID with an actual value
    getPaymentMethods(2)  
    .then(data => {
      this.setState({
        paymentMethods: data
      })
    }).catch(error => {
      console.log(error)
    })
  }

  handleSelect = (e, plan) => {
    if (this.state[e.target.name] != plan) {
      this.setState({
        [e.target.name]: plan
      })
    } else {
      this.setState({
        [e.target.name]: 0
      })
    }
  }

  checkSubscriptionStatus = () => {
    // Replace the hardcoded User ID with an actual value
    getMonthlyArtSubscriptionStatus(2)
    .then(data => {
      if (data.length == 1) {
       this.setState({
        subscriptionDetails: data[0]
       }) 
      }
    }).catch(error => {
      console.log(error)
    })
  }

  subscribeToMonthlyArt = () => {
    if (this.state.payment != '' && this.state.plan != '') {
      let startDate = new Date()

      let endDate = new Date()
      endDate.setDate(endDate.getDate() + 30)

      const subscriptionInfo = {
        idCustomer: 2, // We gotta remove hardcoding the User ID FFS!
        idPlan: this.state.plan,
        idPaymentMethod: this.state.payment,
        startDate: startDate,
        endDate: endDate
    }
      
      
      subscribeToMonthlyArt(subscriptionInfo)  
      .then(data => {
        if (data.affectedRows == 1) {
          this.checkSubscriptionStatus()
        }
      }).catch(error => {
        console.log(error)
      })
    } else {
      alert(`Select a plan and a payment method, s'il vous plait!`)
    }
  }

  render() {
    return (
      <Container className='monthlyArtPage'>
        <h1>Monthly Subscription Plans</h1>
        <p>Knack gives an amazing opportunity to all its members to subscribe for a monthly art rental plan. Each plan allows members to choose from a variety of artworks, carefully curated according to their interests. This way the members can update their interiors with new artworks every month without worrying about paying a hefty price for original artworks. Ww will help you find your KNACK for art!</p>

        {!this.state.subscriptionDetails.planDescription && (
          <React.Fragment>
            <Row>
        {this.state.plans.map((subscriptionPlan, key) => (
        <Col md={{size: 4, offset: key%2 == 0 ? 2 : 0}} className="subscriptionPlanBox">
          <Card body>
        <CardTitle><h2 className='subscriptionHeading'><b>{subscriptionPlan.title}</b></h2></CardTitle>
            <hr />
            <CardText>
              <h3><b>${subscriptionPlan.price} / Month</b></h3>
              <Col md={{size: 8, offset: 2}}>
                {subscriptionPlan.description}
              </Col>
            </CardText>
            <Button 
              className={`subscriptionButton col-md-8 offset-md-2 ${this.state.plan == subscriptionPlan.idPlan ? 'selected' : ''}`}
              name='plan'
              onClick={(e) => this.handleSelect(e, subscriptionPlan.idPlan)}
            >
              {this.state.plan == subscriptionPlan.idPlan ? 'REMOVE' : 'SELECT'}
            </Button>
            <small>Terms and Conditions apply</small>
          </Card>
        </Col>
        ))}
        </Row>

        <hr />

        <h1>Choose Payment Method</h1>
        <Row>
        {this.state.paymentMethods.map((paymentMethod, key) => (
          <Col md={{size: 4, offset: key%2 == 0 ? 2 : 0}}>
          <Card className='paymentCard' body>
            <CardTitle>
              <h3>{'*'.repeat(12) + paymentMethod.last_4_digits}</h3>
            </CardTitle>
            <CardText className='paymentInputs'>
              <div className='payment-input'>
                <Label>EXP</Label>
                <input type="text" name="exp" size='5' />
              </div>
              <div className='payment-input'>
                <Label>CVV</Label>
                <input type="text" name="cvv" size="3" />
              </div>
            </CardText>
            <Button 
              className={`paymentButton col-md-8 offset-md-2 ${this.state.payment == paymentMethod.idPaymentMethod ? 'selected' : ''}`}
              name='payment'
              onClick={(e) => this.handleSelect(e, paymentMethod.idPaymentMethod)}
            >
              {this.state.payment == paymentMethod.idPaymentMethod ? 'REMOVE' : 'SELECT'}
            </Button>
          </Card>
          </Col>
        ))}
        </Row>
        <div className="tncContainer">
          <input type="checkbox" /> I agree to Knack’s <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>, and to receive emails from Knack.
        </div>  
        <Button color="info" onClick={this.subscribeToMonthlyArt}>Proceed</Button>
          </React.Fragment>
        )}

        {this.state.subscriptionDetails.planDescription && (
          <div className="planDetailsContainer">
            <h3>Your Monthly Art Subscription worth ${this.state.subscriptionDetails.planCost} is valid until {formatDate(new Date(this.state.subscriptionDetails.endDate))}.</h3>
            <p>{this.state.subscriptionDetails.planDescription}</p>
          </div>
        )}
        
      </Container>
    )
  }
}