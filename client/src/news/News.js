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
                newsapi: result
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
                        <div className="cardInfo">
                            <a href={item.url} target="_blank">
                                <CardTitle>{item.title}</CardTitle>
                            </a>
                        
                            <CardSubtitle>By {item.author}</CardSubtitle>
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



export default News;
