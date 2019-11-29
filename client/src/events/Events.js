import React from 'react';
import {getEvents} from './api-events.js'
import {Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle} from 'reactstrap'
import {Link} from "react-router-dom";

const styles = {
    containerSpacing : {
      marginTop: "1rem",
      marginBottom: "1rem"
    },
    rowSpacing: {
      marginBottom: "2rem"
    },
    resultsSpacing : {
      marginTop: "2rem",
    }
  }

class Events extends React.Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
            events: []
        }

    }

    loadEvents() {
        getEvents()
        .then(result=>{
            //console.log("result:"+result)
            this.setState({
                events: result
            })
        })
        .catch(error=>{
           
            console.log(error);
        });
    }

    componentDidMount(){

        this.loadEvents();
    }



    render() {
        return (

            <Container style={styles.containerSpacing}>
            <Row style={styles.resultsSpacing} className='eventsContainer'>
                {this.state.events.map(item => 
                    <Col sm="6" lg="4" style={styles.rowSpacing}>
                    <Card>
                        <a href={item.url} target="_blank">
                        <CardImg top className="" src={item.logo.url} alt="Event" />
                        </a>
                        <CardBody>
                        <div className="cardInfo">
                            <a href={item.url} target="_blank">
                                <CardTitle >{item.name.text}</CardTitle>
                            </a>
                        
                          <CardSubtitle>{item.venue.address.city}</CardSubtitle>
                        </div>
                        <div className="cardActions">
                            <a href={item.url} target="_blank">
                            Read
                            </a>
                      </div>
                        </CardBody>
                    </Card>
                    </Col>
                )}
            </Row> 
            </Container>
        )
    }

}

export default Events;