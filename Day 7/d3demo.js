/*
Example 1:
*/
/*
var a = d3.select("#h1");
console.log(a.text());

a.text("Welcome to D3");
*/

/*
Example 2: Selection Functions
*/
/*
var a = d3.selection();
console.log(a.html());

var a = d3.selectAll("p");
a.text("Changed");


var a = d3.select("#p1");
a.text("Changed p1 only");
*/

/*
Example 3: Selection Functions use modifications
*/

/*
var a = d3.select("#div1 #p1");
a.attr("style", "color:red;");

var b = d3.select("#div1 #p2");
b.style("color", "green");

var c = d3.select("#div1");
c.append("h1").text("added the heading 1 using d3");

function show() {
    var d = d3.select("#txt-1");
    var userInput = d.property("value");
    c.append("h2").text(userInput);
}
*/

/*
Example 4: D3 Transitions
*/

/*
var a = d3.selectAll("#container").on("mouseover", function() {
    d3.select(this).transition()
    .duration(100)
    .style("border-radius", "100px")
    .style("background", "orange")
});

var a = d3.selectAll("#container").on("mouseout", function() {
    d3.select(this).transition()
    .duration(100)
    .style("border-radius", "0px")
    .style("background", "gray")
});
*/

/*
Example 5: D3 selection functions - joining functions
*/

/*
function show() {
    var names = [{name: "Tushar"}, {name: "Vedant"}];
    var a = d3.selectAll("#div1 p");
    a.data(names).text(function(d) {
        return this.innerText + " " + d.name;
    }).exit().remove();
}
*/
