import React, {useState} from "react";
import { 
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './CarouselContainer.css';


// Carousel.propTypes = {
//   activeIndex: PropTypes.number,
//   next: ProTypes.func.isRequired,
//   previous: ProTypes.func.isRequired,
//   keyboard: ProTypes.bool,
//   pause: PropTypes.oneOf(['hover',false]),
//   ride: PropTypes.oneOf(['carousel']),
//   interval: ProTypes.oneOfType([
//     ProTypes.number,
//     ProTypes.string,
//     ProTypes.bool,
//   ]),
//   children: ProTypes.array,
//   mouseEnter: ProTypes.func,
//   mouseLeave: ProTypes.func,
//   slide: ProTypes.bool,
//   cssModule: ProTypes.object,
// };

// // CarouselItems Properties 
// CarouselItem.propTypes = {
//   ...Transition.propTypes,
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   in: PropTypes.bool,
//   cssModule: PropTypes.object,
//   children: PropTypes.node,
//   slide: PropTypes.bool,
// };

// // CarouselControl Properties
// CarouselControl.propTypes = {
//   direction: PropTypes.oneOf(['prev', 'next']).isRequired,
//   onClickHandler: PropTypes.func.isRequired,
//   cssModule: PropTypes.object,
//   directionText: PropTypes.string
// };

// // CarouselIndicators Properties
// CarouselIndicators.propTypes = {
//   items: PropTypes.array.isRequired,
//   activeIndex: PropTypes.number.isRequired,
//   cssModule: PropTypes.object,
//   onClickHandler: PropTypes.func.isRequired
// };

// // CarouselCaption Properties

// CarouselCaption.propTypes = {
//   captionHeader: PropTypes.node,
//   captionText: PropTypes.node.isRequired,
//   cssModule: PropTypes.object
// };

// export default class Carousel extends React.Component {

  
//   render() {
//     return (
//       <div>
//         Carousel content goes here.
//       </div>
//     );
//   }
// }

const items = [
  {
    src: './img/1.jpg',
    altText :'(ARTW0RK, EXHIBITION, ART FAIR,ETC.)',
    caption: 'SLIDE SHOW OF FEATURED CONTENT'
  },
  {
    src: './img/2.jpg',
    altText :'(ARTW0RK, EXHIBITION, ART FAIR,ETC.)',
    caption: 'SLIDE SHOW OF FEATURED CONTENT'
  },
  {
    src: './img/3.jpg',
    altText :'(ARTW0RK, EXHIBITION, ART FAIR,ETC.)',
    caption: 'SLIDE SHOW OF FEATURED CONTENT'
  }
];

const CarouselContainer = (props) =>{
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = ()=> {
    if(animating) return;
    const nextIndex = activeIndex === items.length -1 ? 0 : activeIndex + 1;
    setActiveIndex (nextIndex);
  }

  const previous = () =>{
    if (animating) return; 
    const nextIndex = activeIndex === 0 ? items.length -1 : activeIndex -1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) =>{
    if(animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item)=>{
    return(
      <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
    >
      <img src={item.src} alt={item.altText} />
      <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
    </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default CarouselContainer 