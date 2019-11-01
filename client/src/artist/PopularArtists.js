import React from 'react';
import {popularArtists} from './api-artist'
import * as d3 from 'd3'

import './PopularArtists.css'

class PopularArtists extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            popularArtists: []
        }
    }

    loadPopularArtists() {
        popularArtists()
        .then(result=>{
            this.setState({
                popularArtists: result
            })
            this.createBubbleGraph();
            
        })
        .catch(error=>{
            console.log(error);
        });
    }

    componentDidMount(){

        this.loadPopularArtists();
    }

    createBubbleGraph() {

        //console.log(this.state.popularArtists)
        var dataset = {
            children : this.state.popularArtists
        } 

        var diameter = 300;
        var color = d3.scaleOrdinal(d3.schemeCategory10);

        var bubble = d3.pack(dataset)
            .size([diameter, diameter])
            .padding(1.5);

        var svg = d3.select(".bubbleChart")
            .append("svg")
            .attr("width", 2*diameter)
            .attr("height", diameter)
            .attr("class", "bubble");

        var nodes = d3.hierarchy(dataset)
            .sum(function(d) { 
                return d.Count; });

        console.log(nodes)

        var node = svg.selectAll(".node")
            .data(bubble(nodes).descendants())
            .enter()
            .filter(function(d){
                return  !d.children
            })
            .append("g")
            .attr("class", "node")
            .attr("transform", function(d) {
                return "translate(" + d.x + "," + d.y + ")";
            });

        node.append("title")
            .text(function(d) {
                return d.Name + ": " + d.Count;
            });

        node.append("circle")
            .attr("r", function(d) {
                console.log(d.r)
                return d.r;
            })
            .style("fill", function(d,i) {
                return color(i);
            });

        node.append("text")
            .attr("dy", ".2em")
            .style("text-anchor", "middle")
            .text(function(d) {
                return d.data.Name.substring(0, d.r / 3);
            })
            .attr("font-family", "sans-serif")
            .attr("font-size", function(d){
                return d.r/5;
            })
            .attr("fill", "white");

        node.append("text")
            .attr("dy", "1.3em")
            .style("text-anchor", "middle")
            .text(function(d) {
                return d.data.Count;
            })
            .attr("font-family",  "Gill Sans", "Gill Sans MT")
            .attr("font-size", function(d){
                return d.r/5;
            })
            .attr("fill", "white");

        d3.select(this.frameElement)
            .style("height", diameter + "px");

    }

    

    render() {
        
        return (
            
            <div className="bubbleChart"></div>
        )
    }
}

export default PopularArtists;