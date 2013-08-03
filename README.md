d3-styles
=========

[![Build Status](https://secure.travis-ci.org/chaosmail/d3-styles.png?branch=master)](http://travis-ci.org/user/d3-styles)

Quick Styles for D3.js extends d3.selection
* d3.selection.lineStyle
* d3.selection.areaStyle
* d3.selection.fontStyle

d3.selection.lineStyle
----------------------

```javascript
var lineStyle = {
        stroke: "red",
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDasharray: "1,5,5,1",
        strokeLinecap: "butt"
    };

    d3.select("body")
            .append("svg")
            .attr("width",200)
            .attr("height",30)
            .append("line")
            .attr("x1",0)
            .attr("y1",10)
            .attr("x2",200)
            .attr("y2",10)
            .lineStyle(lineStyle);
```

d3.selection.areaStyle
----------------------

```javascript
var areaStyle = {
        stroke: "black",
        strokeWidth: 2,
        strokeOpacity: 0.9,
        fill: "orange",
        fillOpacity: 0.9
    };

    d3.select("body")
            .append("svg")
            .attr("width",200)
            .attr("height",30)
            .append("circle")
            .attr("cx",30)
            .attr("cy",15)
            .attr("r",11)
            .areaStyle(areaStyle);
```

d3.selection.fontStyle
----------------------

```javascript
var fontStyle = {
        stroke: "black",
        strokeWidth: 1,
        strokeOpacity: 0.9,
        fill: "orange",
        fillOpacity: 0.9,
        fontSize: 20,
        fontFamily: "sans-serif",
        fontWeight: "bold"
    };

    d3.select("body")
            .append("svg")
            .attr("width",200)
            .attr("height",30)
            .append("text")
            .text("Hello D3.js")
            .attr("x",0)
            .attr("y",15)
            .fontStyle(fontStyle);
```



Typescript
----------

Interfaces for Usage in TS
* d3.Style.Line
* d3.Style.Area
* d3.Style.Font