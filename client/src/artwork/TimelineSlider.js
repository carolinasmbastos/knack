import React from "react";
import { Container, Button, ButtonGroup } from "reactstrap";
import { getTimelines } from "./api-artwork";
import { formatTimePeriodForMobile } from "../helpers/formatter";

const styles = {};

export default class TimelineSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timelines: [],
      timeline: 0
    };
  }

  componentDidMount = () => {
    getTimelines()
      .then(timelines => {
        this.setState({
          timelines: timelines
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  loadArtworksFromTimeline = selectedTimeline => {
    this.setState({
      timeline: selectedTimeline
    });
    this.props.onSelect(selectedTimeline);
  };

  render() {
    return (
      <Container className="timelineContainer">
        {/* <img src='./img/assets/TimelineSliderArrow.png' className='timelineSliderArrow' style={{marginLeft: `${() => this.sliderArrowMargin(this.state.timeline)}%`}} alt="Timeline Slider Selector" /> */}
        <ButtonGroup>
          {this.state.timelines.map(timeline => (
            <Button
              className={`timelineButton ${
                this.state.timeline == timeline.idPeriod ? "selected" : ""
              }`}
              onClick={() =>
                this.loadArtworksFromTimeline(parseInt(timeline.idPeriod))
              }
            >
              {/* Abbreviate '18th Century' as '18th c.' on smaller screens */}
              {window.innerWidth <= 767 && timeline.idPeriod != 0
                ? formatTimePeriodForMobile(timeline.periodDescription)
                : timeline.periodDescription}
            </Button>
          ))}
        </ButtonGroup>
      </Container>
    );
  }
}
