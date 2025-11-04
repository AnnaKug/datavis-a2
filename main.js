// Waiting until document has loaded
window.onload = () => {

  // YOUR CODE GOES HERE
  // console.log("YOUR CODE GOES HERE");
  // set the dimensions and margins of the graph
  var margin = {top: 10, right: 30, bottom: 30, left: 60},
      width = 460 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  var svg = d3.select("#my_dataviz")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

  // Load the data set from the assets folder:
  d3.csv("cars.csv")

  // X scale
  var x = d3.scaleLinear()
    .domain(d3.extent(data, d => d.Horsepower))
    .range([0, width]);
  svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x));

  // Y scale
  var y = d3.scaleLinear()
    .domain(d3.extent(data, d => d.MPG))
    .range([height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // dots
  svg.append("g")
    .selectAll("dot")
    .data(data)
    .join("circle")
      .attr("cx", d => x(d.Horsepower))
      .attr("cy", d => y(d.MPG))
      .attr("r", 4)
      .style("fill", "#69b3a2");
      
};
