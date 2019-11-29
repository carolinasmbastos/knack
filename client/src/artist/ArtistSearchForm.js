import React from "react";
import {Button, Form, FormGroup, Input, Container, Row, Col} from 'reactstrap'

const styles = {
  container: {
    marginTop: "1rem"
  }
}

export default class ArtistSearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {artist:""};
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            artist: this.state.artist
        });
        this.setState({
            artist: ""
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
                      <Input type="text" name="artist" id="artist" placeholder="Enter Artist Name"
                      value={this.state.artist}
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