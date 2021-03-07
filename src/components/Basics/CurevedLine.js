import { select, line, curveCardinal } from "d3";
import React, { useEffect, useRef, useState } from "react";

const CurevedLine = () => {
  const [data, setData] = useState([
    10,
    15,
    13,
    18,
    19,
    22,
    27,
    25,
    19,
    26,
    50,
    48,
    79,
    30,
    20,
    40,
    108,
    109,
    226,
    225,
  ]);
  const svgRef = useRef();
  useEffect(() => {
    const svg = select(svgRef.current);
    const myLine = line()
      .x((value, index) => index * 50)
      .y((value) => 150 - value)
      .curve(curveCardinal);
    svg
      .selectAll("path")
      .data([data])
      .join("path")
      .attr("d", (value) => myLine(value))
      .attr("fill", "none")
      .attr("stroke", "red");
  }, [data]);

  return (
    <div>
      <h1>Curve Line</h1>
      <svg ref={svgRef}></svg>
      <br />
      <button onClick={() => setData(data.map((value) => value + 3))}>
        Update Data
      </button>
      <button onClick={() => setData(data.filter((value) => value < 30))}>
        Filter Data
      </button>
    </div>
  );
};

export default CurevedLine;
