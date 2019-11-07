import React from "react";
import { Container, Button, ButtonGroup } from 'reactstrap';

const styles = {

}

export default class TimelineSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timeline: ''
    }
  }

  loadArtworksFromTimeline = selectedTimeline => {
    if (this.state.timeline != selectedTimeline) {
      this.setState({
        timeline: selectedTimeline
      })
      this.props.onSelect(selectedTimeline)
    } else {
      this.setState({
        timeline: ''
      })
      this.props.onSelect('')
    }
  }
  
  render() {
    return (
      <Container className='timelineContainer'>
        {/* <img src='./img/assets/TimelineSliderArrow.png' className='timelineSliderArrow' style={{marginLeft: `${() => this.sliderArrowMargin(this.state.timeline)}%`}} alt="Timeline Slider Selector" /> */}
        <ButtonGroup>
          <Button className={`timelineButton ${this.state.timeline == '18' ? 'selected' : ''}`} onClick={() => this.loadArtworksFromTimeline('18')}>18th Century</Button>
          <Button className={`timelineButton ${this.state.timeline == '19' ? 'selected' : ''}`} onClick={() => this.loadArtworksFromTimeline('19')}>19th Century</Button>
          <Button className={`timelineButton ${this.state.timeline == '20' ? 'selected' : ''}`} onClick={() => this.loadArtworksFromTimeline('20')}>20th Century</Button>
          <Button className={`timelineButton ${this.state.timeline == '21' ? 'selected' : ''}`} onClick={() => this.loadArtworksFromTimeline('21')}>21st Century</Button>
      </ButtonGroup>
      </Container>
    );
  }
}