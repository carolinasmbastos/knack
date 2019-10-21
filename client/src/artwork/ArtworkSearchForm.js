import React from "react";
import PropTypes from 'prop-types'
import {Button, Form, FormGroup, Input, Container, Row, Col} from 'reactstrap'

const styles = {
  container: {
    marginTop: "1rem"
  }
}

export default class ArtworkSearchForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {search:""};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("search form value:" + this.state.search);
        this.props.onSubmit(
            this.state.search
        );
        this.setState({
            search: ""
        })


    }

    render() {
        return (
          <Container style={styles.container}>
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Form sm="12" onSubmit={this.handleSubmit}>
                  <FormGroup row>
                    <Col sm={{ size: 6, offset: 2 }}>
                      <Input type="text" name="search" id="artist" placeholder="Search Artwork by it's Artist"
                      value={this.state.search}
                      onChange={this.handleChange} />
                    </Col>
                    <Button color="info" onClick={this.handleSubmit}>Search</Button>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          </Container>
        );
    }
}

ArtworkSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}