// create a circle through svg using d3
/*
var num = [50, 150, 350]

var a = d3.select('body')
        .append('svg')
        .attr("width", 500)
        .attr("height", 500)
        .style("background", "pink");

var b = a.selectAll('circle')
        .data(num)
        .enter()
        .append('circle')
        .attr("cx", function(d) {
            return d;
        })
        .attr("cy", 200)
        .attr("r", 40)
        .attr("fill", "green")
        .transition()
        .duration(3000)
        .attr("cx", 200)
        .attr("fill", "blue")
        .on("end", function() {
            d3.select(this).style("fill", "orange");
        })
*/


// creating a horizontal barchart

/*
var numbers = [20, 15, 10, 25];

var bars = d3.select('body')
        .selectAll("div")
        .data(numbers)
        .enter()
        .append("div")
        .style("width", function(d) {
            return d + "px";        })
        .style("height", "35px")
        .style("margin", "0px 0px 20px")
        .style("background", "pink")
        .text(function(d) {
            return d;
        });
*/

// creating a vertical barchart

/*
var nums = [31, 21, 35, 18, 9, 14];

var svg = d3.select('body')
        .append("svg")
        .attr("width", 500)
        .attr("height", 500)
        .style("background", "pink");

var bars = svg.selectAll('rect')
        .data(nums)
        .enter()
        .append("rect")
        .attr("width", 25)
        .attr("height", function(d) {
            return d * 10;
        })
        .attr("x", function(d, i) {
            return i * 30;
        })
        .attr("y", function(d, i) {
            return 500 - (d * 10);
        })

var text = svg.selectAll('text')
        .data(nums)
        .enter()
        .append("text")
        .attr("fill", "white")
        .text(function(d) {
            return d;
        })
        .attr("x", function(d, i) {
            return i * 30;
        })
        .attr("y", function(d, i) {
            return 500 - (d * 10) + 15;
        })
*/

// scale functions
/*
var width = 400;
var height = 400;
var nums = [31, 25, 35, 18, 9, 70];

var e = d3.scaleLinear()
        .domain([0, d3.max(nums)])
        .range([0, height])

var svg = d3.select('body')
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("background", "pink");

var bars = svg.selectAll('rect')
        .data(nums)
        .enter()
        .append("rect")
        .attr("width", 25)
        .attr("height", function(d) {
            return d * 10;
        })
        .attr("x", function(d, i) {
            return i * 30;
        })
        .attr("y", function(d, i) {
            return width - (d * 10);
        })

var text = svg.selectAll('text')
        .data(nums)
        .enter()
        .append("text")
        .attr("fill", "white")
        .text(function(d) {
            return d;
        })
        .attr("x", function(d, i) {
            return i * 30;
        })
        .attr("y", function(d, i) {
            return width - (d * 10) + 15;
        })
*/

// use external json file
d3.json('d3jsondemo.json').then(function(nums) {


var nums = [31, 21, 35, 18, 9, 14];

var svg = d3.select('body')
        .append("svg")
        .attr("width", 500)
        .attr("height", 500)
        .style("background", "pink");

var bars = svg.selectAll('rect')
        .data(nums)
        .enter()
        .append("rect")
        .attr("width", 25)
        .attr("height", function(d) {
            return d * 10;
        })
        .attr("x", function(d, i) {
            return i * 30;
        })
        .attr("y", function(d, i) {
            return 500 - (d * 10);
        })

var text = svg.selectAll('text')
        .data(nums)
        .enter()
        .append("text")
        .attr("fill", "white")
        .text(function(d) {
            return d;
        })
        .attr("x", function(d, i) {
            return i * 30;
        })
        .attr("y", function(d, i) {
            return 500 - (d * 10) + 15;
        })

});
