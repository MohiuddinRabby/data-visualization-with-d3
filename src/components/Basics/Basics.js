import React, { useEffect, useRef, useState } from "react";
import { select } from "d3";
// import dataDemo from "../../dataDemo";
const Basics = () => {
  const [data, setData] = useState([10, 12, 14, 15, 17, 20, 30, 25, 39, 10]);
  //   const [data, setData] = useState(dataDemo);
  const svgRef = useRef();
  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll("circle")
      .data(data)
      .join((enter) => enter.append("circle"))
      .attr("r", (value) => value)
      .attr("cx", (value) => value * 2)
      .attr("cy", (value) => value * 2)
      .attr("stroke", "blue");
  }, [data]);

  return (
    <div>
      <svg ref={svgRef}></svg>
      <br />
      <button onClick={() => setData(data.map((value) => value * 2))}>
        Update Data
      </button>
      <button onClick={() => setData(data.filter((value) => value < 30))}>
        Filter Data
      </button>
    </div>
  );
};

export default Basics;
