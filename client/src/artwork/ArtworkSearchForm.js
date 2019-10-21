import React from "react";
import PropTypes from 'prop-types'
import {Button, Form, FormGroup, Input, Container, Row, Col} from 'reactstrap'

const styles = {
  formContainer:{
    display: 'grid',
    alignItems: 'center'
  },
  formGroup: {
    marginBottom: 0
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
          <Container>
            <Row>
              <Col style={styles.formContainer}>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup row style={styles.formGroup}>
                    <Col sm="12">
                      <Input type="text" name="search" id="artist" placeholder="Search Artworks"
                      value={this.state.search}
                      onChange={this.handleChange} />
                    </Col>
                    {/* <Button color="info" onClick={this.handleSubmit}>Search</Button> */}
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