import * as d3 from "d3";
import data from "./menu.json";

function BarChart() {
console.log("BarChart")
console.log(data)
  const svgContainer = d3.select(document.getElementById("canvas"));
  // select the svg container first
  const svg = svgContainer
    .append('svg')
    .attr('width', 600)
    .attr('height', 600)
    .style("border", "1px solid blue")

// create margins & dimensions
  const margin = {top: 20, right: 20, bottom: 100, left: 100};
  const graphWidth = 600 - margin.left - margin.right;
  const graphHeight = 600 - margin.top - margin.bottom;

  const graph = svg.append('g')
    .attr('width', graphWidth)
    .attr('height', graphHeight)
    .attr('transform', `translate(${margin.left}, ${margin.top})`)
    .style("border", "1px solid red")
  ;

// create axes groups
  const xAxisGroup = graph.append('g')
    .attr('transform', `translate(0, ${graphHeight})`)

  const yAxisGroup = graph.append('g');


console.log(data)
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.orders)])
      .range([0, graphHeight]);

    const x = d3.scaleBand()
      .domain(data.map(item => item.name))
      .range([0, graphWidth])
      .paddingInner(0.2)
      .paddingOuter(0.2);

    // join the data to circs
    const rects = graph.selectAll('rect')
      .data(data);

    // add attrs to circs already in the DOM
    rects.attr('width', x.bandwidth)
      .attr("height", d => y(d.orders))
      .attr('fill', 'orange')
      .attr('x', d => x(d.name));

    // append the enter selection to the DOM
    rects.enter()
      .append('rect')
      .attr('width', x.bandwidth)
      .attr("height", d => y(d.orders))
      .attr('fill', 'orange')
      .attr('x', (d) => x(d.name));

    // create & call axes
    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y);

    xAxisGroup.call(xAxis);
    yAxisGroup.call(yAxis);


}
export default BarChart;