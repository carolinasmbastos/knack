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
    caption: `Rent and Variate the Artworks in your Collection`
  },
  {
    src: "./img/carousel/Discovery.jpg",
    altText: "Explore artworks from local Art Galleries and Artists",
    caption: (
      <img
        src="/img/carousel/icons/DiscoveryIcon.png"
        alt=""
        className="carousel-icons"
      />
    )
  },
  {
    src: "./img/carousel/MonthlyArt.jpg",
    altText: "Subscribe to Monthly Art and keep a new Artwork every month",
    caption: (
      <img
        src="/img/carousel/icons/MonthlyArtIcon.png"
        alt=""
        className="carousel-icons"
      />
    )
  },
  {
    src: "./img/carousel/PreviewArt.jpg",
    altText: "Subscribe to Monthly Art and keep a new Artwork every month",
    caption: (
      <img
        src="/img/carousel/icons/PreviewIcon.png"
        alt=""
        className="carousel-icons"
      />
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
          className="carousel-caption"
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
