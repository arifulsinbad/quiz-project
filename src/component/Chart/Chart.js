import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Chart = () => {
 
   const array = useLoaderData();
  const {data} = array;
  console.log(data)

 return (
  <div>
   <p>chart</p>
  </div>
 );
};

export default Chart;