import React from "react";
import AliceCarousel from "react-alice-carousel";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Link } from "react-router-dom";
import "react-alice-carousel/lib/alice-carousel.css";
import { findArtworkByArtistId } from "./api-artwork.js";

export default class ArtworkGallery extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            galleryItems: []
        };
    }

    loadArtwork() {
        if (this.state.galleryItems.length === 0 && this.props.artist !== undefined) {
            console.log("===>"+this.props.artist)
            findArtworkByArtistId(this.props.artist)
                .then(result => {
                    //console.log("result:" + result);
                    this.setState({
                        galleryItems: result.map(artwork => (
                            <div className="artworkGallery">
                                <Card className="cardGallery">
                                    <Link to={`/artwork/${artwork.artwork.idArtwork}`}>
                                        <CardImg
                                            top
                                            className="artwork-thumbnail"
                                            src={`/img/artworks/${
                                                artwork.artwork.imageUrl
                                                    ? artwork.artwork.imageUrl
                                                    : "default.jpg"
                                                }`}
                                            alt="Picsum"
                                        />
                                    </Link>
                                    <CardBody>
                                        <div className="cardInfo">
                                            <Link to={`/artwork/${artwork.artwork.idArtwork}`}>
                                            <CardTitle>{artwork.artwork.title}</CardTitle>
                                            </Link>
                                            <CardSubtitle>
                                            By{" "}
                                            <Link to={`/artist/${artwork.artist.idArtist}`}>
                                                {artwork.artist.name}
                                            </Link>
                                            </CardSubtitle>
                                        </div>
                                        <div className="cardActions">
                                            <Link to={`/artwork/${artwork.artwork.idArtwork}`} className="knack-btn knack-btn-light">
                                            View
                                            </Link>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                        ))
                    });
                })
                .catch(error => {
                    
                    console.log(error);
                });
        }
    }

    responsive = {
        0: { items: 1 },
        500: { items: 1 },
        700: { items: 2 },
        1000: { items: 4 }
    };

    onSlideChange(e) {
        console.debug("Item`s position during a change: ", e.item);
        console.debug("Slide`s position during a change: ", e.slide);
    }

    onSlideChanged(e) {
        console.debug("Item`s position after changes: ", e.item);
        console.debug("Slide`s position after changes: ", e.slide);
    }

    render() {
        
        this.loadArtwork();
        return (
            <AliceCarousel
                items={this.state.galleryItems}
                responsive={this.responsive}
                autoPlayInterval={2000}
                autoPlayDirection="rtl"
                autoPlay={true}
                fadeOutAnimation={true}
                mouseTrackingEnabled={true}
                playButtonEnabled={false}
                dotsDisabled={true}
                disableAutoPlayOnAction={true}
              //  buttonsDisabled={true}
              //keysControlDisabled={false}
                onSlideChange={this.onSlideChange}
                onSlideChanged={this.onSlideChanged}
            />
        );
    }
}
