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
        var data = this.state.popularArtists;

        let width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
        let height = width / 4;

        let maxRadius = d3.max(data, (data) => { return data.Count; })
        let minRadius = d3.min(data, (data) => { return data.Count; })

        let svg = d3.selectAll('.bubbleChart')
                 .append('svg')
                .attr("width", '100%')
                .attr("height", '100%')
                .attr('viewBox','0 0 '+width+' '+height)
                .attr('preserveAspectRatio','xMinYMin')
                .append("g")
                .attr('transform', 'translate(0, 0)')

       let r = d3.scaleSqrt()
                .domain([minRadius, maxRadius])
                .range([10,100])

        let simulation = d3.forceSimulation()
                .force('x', d3.forceX(width/2).strength(0.03))
                .force('y', d3.forceY(height/2).strength(0.25))
                .force('collide', d3.forceCollide((data) => { return r(data.Count) + 1.5; }))

        var defs = svg.append("defs");

        defs.selectAll("circles")
                .data(data)
                .enter().append("pattern")
                .attr("class", "artist-pattern")
                .attr("id", function(data){
                    return data.idArtist;
                })
                .attr("height", "100%")
                .attr("width", "100%")
                .attr("patternContentUnits", "objectBoundingBox")
                .append("image")
                .attr("height", 1)
                .attr("width", 1)
                .attr("preserveAspectRatio", "none")
                .attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
                .attr("xlink:href", function(data){
                    return (data.url != undefined ? "img/artworks/"+data.url : "img/artworks/default.jpg");
                })

        let circles = svg.selectAll('circles')
                .data(data)
                .enter()
                .append("a")
                .attr("href", function(data){
                    return "/browse/"+data.Name;
                })
                .attr("class", "artist-name")
                .html(function(data){
                    return data.Name;
                })
                .append('circle')
                .attr('r', (data) => { 
                    console.log(data.Count);
                    return r(data.Count); 
                })
                .style("fill", function(data) {
                    console.log(data.idArtist)
                    return "url(#"+data.idArtist+")"
                })


        
        let texts = svg.selectAll(null)
                .data(data)
                .enter()
                .append('text')
                .text(function(data){
                    return data.Name;
                })
                .style('fill', 'white')
                .style("text-anchor", "middle")
                .attr('font-size', function(data){
                    return r(data.Count)/5;
                })

        let ticked = () => {
            circles
            .attr('cx', (data) => { return data.x })
            .attr('cy', (data) => { return data.y })
            texts
            .attr('x', (data) => { return data.x })
            .attr('y', (data) => { return data.y })
        }

        simulation.nodes(data)
        .on('tick', ticked)

    }

    

    render() {
        
        return (
            
            <div className="bubbleChart"></div>
        )
    }
}

export default PopularArtists;