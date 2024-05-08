import "chart.js/auto";

import { Line } from "react-chartjs-2";
import React from "react";

interface LineGraphProps {
  data: any; // data format here
}

const LineGraph: React.FC<LineGraphProps> = ({ data }) => {
  // Format data for chart.js
  const chartData = {
    labels: Object.keys(data.cases),
    datasets: [
      {
        label:"Cases",
        data: Object.values(data.cases),
        borderColor: "black",
        fill: false,
      },
    ],
  };
  

  return (
    <Line
      data={chartData}
      width={'100%'}
      height={'100%'}
    />
  );
};

export default LineGraph;
