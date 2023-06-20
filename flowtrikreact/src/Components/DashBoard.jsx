
import React,{useEffect,useState,useMemo} from 'react';
import { Chart2 , Chart3, Chart4 } from "./chart";
import Chart from "react-apexcharts";
import Axios from 'axios';

  
const DashBoard = () => {
const [post, setPost] = useState('');
const [data, setdata] = useState('');
const [titles, setTitles] = useState('');

 useEffect(() => {
    const fetchDatas = async () => {
      const res = await fetch("http://localhost:3002/api/chargeutilisation");
      const data = await res.json();
      console.log(data);
      console.log(Object.keys(data[0]));
      
      setdata(data);
       
      setTitles(Object.keys(data[0]));
      console.log(titles);
    };
    fetchDatas();
  }, []);
 
 
 
return (
<div>
    <Chart
        options={titles}
        series={data}
        type='bar'
        width='100%'
        height='100%'
      />
    <Chart4 data={data} titles={titles}/>
    <Chart2 data={data} titles={titles}/>
    <Chart3 data={data} titles={titles}/>
    
    
   
    </div>
);
}
  
export default DashBoard;