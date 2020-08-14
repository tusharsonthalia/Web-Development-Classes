import React, { Component } from 'react'
import * as d3 from 'd3'

export default class ExampleDemo extends Component {
    drawChart=()=> {
        const data = [1,2,3,4,5,6];
        const a = d3.select('body').append('svg')
                    .attr("width", 500)
                    .attr("height", 300)
                    .style("background-color", "pink")
                    ;
        const bars = a.selectAll('rect')
                    .data(data)
                    .enter()
                    .append('rect')
                    .attr('x', function(d, i) {
                        return (i*50);
                    })
                    .attr('y', function(d) {
                        return 300-d*10;
                    })
                    .attr('width', 35)
                    .attr('height', function(d) {
                        return d*10;
                    })
                    .style('fill', 'black')
                    ;
    }

    componentDidMount() {
        this.drawChart();
    }
    
    render() {
        return (
            <div>
                <h1>Visualisation using React and D3</h1>
            </div>
        )
    }
}
