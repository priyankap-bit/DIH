import { useEffect, useState } from "react";
import "./ExecutiveSummary.css";
import * as d3 from "d3";

const ExecutiveSummary = (props) => {
  const aapl = useState([
    { date: "2007 - 04 - 23", close: 93.24 },
    { date: "2007 - 04 - 24", close: 95.35 },
    { date: "2007 - 04 - 25", close: 98.84 },
    { date: "2007 - 04 - 26", close: 99.92 },
    { date: "2007 - 04 - 29", close: 99.8 },
    { date: "2007 - 05 - 01", close: 99.47 },
    { date: "2007 - 05 - 02", close: 100.39 },
    { date: "2007 - 05 - 03", close: 100.4 },
    { date: "2007 - 05 - 04", close: 100.81 },
    { date: "2007 - 05 - 07", close: 103.92 },
    { date: "2007 - 05 - 08", close: 105.06 },
    { date: "2007 - 05 - 09", close: 106.88 },
    { date: "2007 - 05 - 09", close: 107.34 },
    { date: "2007 - 05 - 10", close: 108.74 },
    { date: "2007 - 05 - 13", close: 109.36 },
    { date: "2007 - 05 - 14", close: 107.52 },
    { date: "2007 - 05 - 15", close: 107.34 },
    { date: "2007 - 05 - 16", close: 109.44 },
    { date: "2007 - 05 - 17", close: 110.02 },
    { date: "2007 - 05 - 20", close: 111.98 },
    { date: "2007 - 05 - 21", close: 113.54 },
    { date: "2007 - 05 - 22", close: 112.89 },
    { date: "2007 - 05 - 23", close: 110.69 },
    { date: "2007 - 05 - 24", close: 113.62 },
    { date: "2007 - 05 - 28", close: 114.35 },
    { date: "2007 - 05 - 29", close: 118.77 },
    { date: "2007 - 05 - 30", close: 121.19 },
    { date: "2007 - 06 - 01", close: 118.4 },
    { date: "2007 - 06 - 04", close: 121.33 },
    { date: "2007 - 06 - 05", close: 122.67 },
    { date: "2007 - 06 - 06", close: 123.64 },
    { date: "2007 - 06 - 07", close: 124.07 },
    { date: "2007 - 06 - 08", close: 124.49 },
    { date: "2007 - 06 - 10", close: 120.19 },
    { date: "2007 - 06 - 11", close: 120.38 },
    { date: "2007 - 06 - 12", close: 117.5 },
    { date: "2007 - 06 - 13", close: 118.75 },
    { date: "2007 - 06 - 14", close: 120.5 },
    { date: "2007 - 06 - 17", close: 125.09 },
    { date: "2007 - 06 - 18", close: 123.66 },
  ]);

  useEffect(() => {
    const chart = AreaChart(aapl, {
      x: (d) => d.date,
      y: (d) => d.close,
      yLabel: "↑ Daily close ($)",
      width:300,
      height: 300,
      color: "steelblue",
    });
  }, []);

  // Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/area-chart
function AreaChart(data, {
    x = ([x]) => x, // given d in data, returns the (temporal) x-value
    y = ([, y]) => y, // given d in data, returns the (quantitative) y-value
    defined, // given d in data, returns true if defined (for gaps)
    curve = d3.curveLinear, // method of interpolation between points
    marginTop = 20, // top margin, in pixels
    marginRight = 30, // right margin, in pixels
    marginBottom = 30, // bottom margin, in pixels
    marginLeft = 40, // left margin, in pixels
    width = 640, // outer width, in pixels
    height = 400, // outer height, in pixels
    xType = d3.scaleUtc, // type of x-scale
    xDomain, // [xmin, xmax]
    xRange = [marginLeft, width - marginRight], // [left, right]
    yType = d3.scaleLinear, // type of y-scale
    yDomain, // [ymin, ymax]
    yRange = [height - marginBottom, marginTop], // [bottom, top]
    yFormat, // a format specifier string for the y-axis
    yLabel, // a label for the y-axis
    color = "currentColor" // fill color of area
  } = {}) {
    // Compute values.
    const X = d3.map(data, x);
    const Y = d3.map(data, y);
    const I = d3.range(X.length);
  
    // Compute which data points are considered defined.
    if (defined === undefined) defined = (d, i) => !isNaN(X[i]) && !isNaN(Y[i]);
    const D = d3.map(data, defined);
  
    // Compute default domains.
    if (xDomain === undefined) xDomain = d3.extent(X);
    if (yDomain === undefined) yDomain = [0, d3.max(Y)];
  
    // Construct scales and axes.
    const xScale = xType(xDomain, xRange);
    const yScale = yType(yDomain, yRange);
    const xAxis = d3.axisBottom(xScale).ticks(width / 80).tickSizeOuter(0);
    const yAxis = d3.axisLeft(yScale).ticks(height / 40, yFormat);
  
    // Construct an area generator.
    const area = d3.area()
        .defined(i => D[i])
        .curve(curve)
        .x(i => xScale(X[i]))
        .y0(yScale(0))
        .y1(i => yScale(Y[i]));
  
    const svg = d3.select(".chart")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto; height: intrinsic;");
  
    svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(yAxis)
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick line").clone()
            .attr("x2", width - marginLeft - marginRight)
            .attr("stroke-opacity", 0.1))
        .call(g => g.append("text")
            .attr("x", -marginLeft)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text(yLabel));
  
    svg.append("path")
        .attr("fill", color)
        .attr("d", area(I));
  
    svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(xAxis);
  
  }

  return (
    <div className="executive-summary-container">
      <div className="executive-summary-linear">
        <div className="executive-summary-linear-title">
        <img src="/static/images/logos/Linear-icon.svg" height={50} alt="Linear Logo"className="executive-summary-linear-image"/>
          <h3>Linear</h3>
        </div>
        <div className="executive-summary-linear-subtitle">
          <p>Day-wise Performance</p>
        </div>
        <div className="executive-summary-tile">
          <div className="executive-summary-tile-name">
            <h4>Reach</h4>
          </div>
          <div className="executive-summary-tile-primary-val">
            <h2>5.632 M</h2>
          </div>
          <div className="executive-summary-tile-secondary-val">
            <p className="executive-summary-tile-secondary-val-perneg">
              -39.9%
            </p>
            <p className="executive-summary-tile-secondary-val-num">
              Prev. 9.37K
            </p>
          </div>
        </div>
        <div className="executive-summary-tile">
          <div className="executive-summary-tile-name">
            <h4>Watch Time</h4>
          </div>
          <div className="executive-summary-tile-primary-val">
            <h2>5.632 M</h2>
          </div>
          <div className="executive-summary-tile-secondary-val">
            <p className="executive-summary-tile-secondary-val-perneg">
              -39.9%
            </p>
            <p className="executive-summary-tile-secondary-val-num">
              Prev. 9.37K
            </p>
          </div>
        </div>
        <div className="update-detail">
          <small className="d-block">Updated as on : 13/01/2023</small>
          <small className="d-block">Next update expected by 24/01/2023</small>
        </div>
      </div>
      <div className="executive-summary-digital">
        <div className="executive-summary-digital-title">
          <img src="/static/images/logos/Digital-icon.svg" height={50} alt="Digital Logo"className="executive-summary-linear-image"/>
          <h3>Digital</h3>
        </div>
        <div className="digital-daywise-and-cumulative">
          <div className="digital-performance">
            <div className="executive-summary-linear-subtitle">
              <p>Day-wise Performance</p>
            </div>
            <div className="executive-summary-tile">
              <div className="executive-summary-tile-name">
                <h4>Viewers</h4>
              </div>
              <div className="executive-summary-tile-primary-val">
                <h2>5.632 M</h2>
              </div>
              <div className="executive-summary-tile-secondary-val">
                <p className="executive-summary-tile-secondary-val-perneg">
                  -39.9%
                </p>
                <p className="executive-summary-tile-secondary-val-num">
                  Prev. 9.37K
                </p>
              </div>
            </div>
            <div className="executive-summary-tile">
              <div className="executive-summary-tile-name">
                <h4>Watch Time</h4>
              </div>
              <div className="executive-summary-tile-primary-val">
                <h2>5.632 M</h2>
              </div>
              <div className="executive-summary-tile-secondary-val">
                <p className="executive-summary-tile-secondary-val-perneg">
                  -39.9%
                </p>
                <p className="executive-summary-tile-secondary-val-num">
                  Prev. 9.37K
                </p>
              </div>
            </div>
          </div>
          <div className="digital-performance">
            <div className="executive-summary-linear-subtitle">
              <p>Cumulative Performance</p>
            </div>
            <div>
              <svg className="chart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummary;
