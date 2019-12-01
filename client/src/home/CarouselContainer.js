import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import "./CarouselContainer.css";

const items = [
  {
    src: "./img/carousel/AboutKnack.jpg",
    altText: "",
    caption: `Find your Knack for Art!`
  },
  {
    src: "./img/carousel/Discovery.jpg",
    altText: "",
    caption: (
      <React.Fragment>
        <img
          src="/img/carousel/icons/DiscoveryIcon.svg"
          alt=""
          className="carousel-icons"
        />
        <br />
        Explore Public Art Installations and artworks from local Artists
      </React.Fragment>
    )
  },
  {
    src: "./img/carousel/MonthlyArt.jpg",
    altText: "",
    caption: (
      <React.Fragment>
        <img
          src="/img/carousel/icons/MonthlyArtIcon.svg"
          alt=""
          className="carousel-icons"
        />
        <br />
        Subscribe to Monthly Art and take home a new Artwork every month
      </React.Fragment>
    )
  },
  {
    src: "./img/carousel/PreviewArt.jpg",
    altText: "",
    caption: (
      <React.Fragment>
        <img
          src="/img/carousel/icons/PreviewIcon.svg"
          alt=""
          className="carousel-icons"
        />
        <br />
        Preview artworks and find the right match to your tastes
      </React.Fragment>
    )
  }
];

const CarouselContainer = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="carousel-image" src={item.src} alt={item.altText} />
        <CarouselCaption
          className="carousel-caption d-block"
          captionText={item.altText}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default CarouselContainer;
