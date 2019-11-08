import React from "react";
import {getNews} from './api-news.js'
import {Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle} from 'reactstrap'




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


class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newsapi: []
        }

    }

    loadNews() {
        getNews()
        .then(result=>{
            this.setState({
                newsapi: result.slice(5, 8)
            },()=>{
                console.log('Hel',this.state.newsapi)
            })
        })
        .catch(error=>{
            console.log(error);
        });
    }

    componentDidMount(){

        this.loadNews();
    }




    render() {
        return (
            <Container style={styles.containerSpacing} className='newsContainer'>
            <Row style={styles.resultsSpacing}>
                {this.state.newsapi.map(item =>
                    <Col sm="6" lg="4" style={styles.rowSpacing}>
                    <Card>
                        <a href={item.url} target="_blank">
                        <CardImg top className="" src={item.urlToImage} alt="Event" />
                        </a>
                        <CardBody>
                        <a href={item.url} target="_blank">
                            <CardTitle>{item.title}</CardTitle>
                        </a>
                        <CardSubtitle>{item.author}</CardSubtitle>
                        </CardBody>
                    </Card>
                    </Col>
                )}
            </Row>
            </Container>
        )
    }

}



export default News;
