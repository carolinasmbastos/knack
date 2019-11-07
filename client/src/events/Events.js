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
            console.log("result:"+result)
            this.setState({
                events: result
            })
        })
        .catch(error=>{
            console.log("error")
            console.log(error);
        });
    }

    componentDidMount(){

        this.loadEvents();
    }



    render() {
        return (

            <Container style={styles.containerSpacing}>
            <Row style={styles.resultsSpacing}>
                {this.state.events.map(item => 
                    <Col sm="4" style={styles.rowSpacing}>
                    <Card>
                        <a href={item.url} target="_blank">
                        <CardImg top className="" src={item.logo.url} alt="Event" />
                        </a>
                        <CardBody>
                        <a href={item.url} target="_blank">
                            <CardTitle>{item.name.text}</CardTitle>
                        </a>
                        <CardSubtitle>{item.venue.address.localized_address_display}</CardSubtitle>
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