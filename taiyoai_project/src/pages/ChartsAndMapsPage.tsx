import { LineGraph, Map } from "components";
import { useCountryData, useGraphData, useWorldData } from "api";

import React from "react";

const Dashboard: React.FC = () => {
  const worldDataQuery = useWorldData();
  const countryDataQuery = useCountryData();
  const graphDataQuery = useGraphData();
  if (
    worldDataQuery.isLoading ||
    countryDataQuery.isLoading ||
    graphDataQuery.isLoading
  )
    return <div>Loading...</div>;

  if (
    worldDataQuery.isError ||
    countryDataQuery.isError ||
    graphDataQuery.isLoading
  )
    return <div>Error fetching data</div>;

  const worldData = worldDataQuery.data;
  return (
    <div className="flex flex-col items-center w-full h-full gap-4">
      <h1 className="py-1 text-lg font-cursive">COVID-19 Dashboard</h1>

      <div className="flex flex-col items-center">
        <h1 className="font-cursive">Worldwide Data</h1>
        <p>Total Cases: {worldData.cases}</p>
        <p>Total Active Cases:{worldData.active}</p>
        <p>Total Recovered:{worldData.recovered}</p>
      </div>
       <hr />
      <div className="w-5/6 border-8 border-white shadow-xl ">
        <Map countries={countryDataQuery.data} />
      </div>
        
      <div className="w-3/6 p-4 mb-2 border-8 border-white shadow-xl ">
        <LineGraph data={graphDataQuery.data} />
      </div>
    </div>
    
  );
  
};

export default Dashboard;
