import React from "react";
import { withRouter } from 'react-router-dom';
import {Form, FormGroup, Input, Container, Row, Col} from 'reactstrap'

const styles = {
  formGroup: {
    marginBottom: 0
  }
}

class ArtworkSearchForm extends React.Component {
    
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

      const { history } = this.props;
      
      if(history) 
        history.push(`/browse/${this.state.search}`);
    }

    render() {
        return (
          <Container>
            <Row>
              <Col>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup row style={styles.formGroup}>
                    <Col >
                      <Input type="text" name="search" id="artist" placeholder="Search"
                      value={this.state.search}
                      onChange={this.handleChange} />
                    </Col>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          </Container>
        );
    }
}

export default withRouter(ArtworkSearchForm);