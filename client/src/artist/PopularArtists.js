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

        let factor;
        let min;
        let max;
        let forceX;
        let forceY;

        //breakpoints for responsive chart
        if (width <= 500) {
            factor = 1.5;
            min = 8;
            max = 70;
            forceX = 0.03;
            forceY = 0.2;
        
        } else if (width > 500 && width <= 1000) {
            factor = 2;
            min = 10;
            max = 100;
            forceX = 0.03;
            forceY = 0.225;

        } else if (width > 1000) {
            factor = 2;
            min = 10;
            max = 200;
            forceX = 0.03;
            forceY = 0.125;
        }
            

        let height = width / factor;

        let maxRadius = d3.max(data, (data) => { return data.Count; })
        let minRadius = d3.min(data, (data) => { return data.Count; })

        let svg = d3.selectAll('.bubbleChart')
                 .append('svg')
                .attr("width", '100%')
                .attr("height", '100%')
                .attr('viewBox','0 0 '+width+' '+height)
                .attr('preserveAspectRatio','xMinYMin')
                .append("g")
                .attr('transform', 'translate('+(width/2)+', '+(height/2)+')')

       let r = d3.scaleSqrt()
                .domain([minRadius, maxRadius])
                .range([min,max])

        let simulation = d3.forceSimulation()
                .force('x', d3.forceX().strength(forceX))
                .force('y', d3.forceY().strength(forceY))
                .force('collide', d3.forceCollide((data) => { return r(data.Count) + 5; }))

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
                    return "/artist/"+data.idArtist;
                })
                .attr("class", "artist-name")
                .html(function(data){
                    return data.Name;
                })
                .append('circle')
                .attr('r', (data) => { 
                    //console.log(data.Count);
                    return r(data.Count); 
                })
                .style("fill", function(data) {
                    //console.log(data.idArtist)
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
                    return (r(data.Count)/5 > 8 ? r(data.Count)/5 : 0);
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