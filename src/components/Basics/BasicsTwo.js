import React, { useEffect, useRef, useState } from "react";
import { select } from "d3";
import dataDemo from "../../dataDemo";
// import dataDemo from "../../dataDemo";
const BasicsTwo = () => {
  const [data, setData] = useState(dataDemo);
  //   const [data, setData] = useState(dataDemo);
  const svgRef = useRef();
  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll("rect")
      .data(data.map((item) => item.intensity))
      .join((enter) => enter.append("rect"))
      //   .attr("r", (value) => value)
      .attr("x", 10)
      .attr("y", 20)
      .attr("width", 600)
      .attr("height", 90)
      .attr("stroke", "red");
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

export default BasicsTwo;
