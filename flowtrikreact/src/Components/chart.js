import {
  AreaChart,
  PieChart,
  Pie,
  Cell,
  Area,
  LineChart, 
  Line ,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ErrorBoundary } from "react-error-boundary";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const index=0;

export function Chart({ data ,titles}) {
  console.log(data.length);
  console.log(data[0]+ " - "+titles);
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis label={titles[0]} dataKey={titles[0]}/>
        <YAxis label={titles[1]}/>
        <Tooltip />
        <Legend />
        <Bar dataKey={titles[1]} fill="#8884d8" />
        <Bar dataKey={titles[2]} fill="#82ca9d" />     
       
      </BarChart>
    </ResponsiveContainer>
  );
}

export function Chart2({ data ,titles}) {
 
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey={titles[1]}stroke="#ad0707" />
    <Line type="monotone" dataKey={titles[2]} stroke="#403ded" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis label={titles[0]} />
    <YAxis />
    <Tooltip />
    <Legend />
   
    
  </LineChart>
    </ResponsiveContainer>
  );
}

export function Chart3({ data ,titles}) {
  

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart  width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Area type="monotone" dataKey={titles[1]} stroke="#ad0707" />
    <Area type="monotone" dataKey={titles[2]} stroke="#403ded" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis label={titles[0]} />
    <YAxis />
    <Tooltip />
    <Legend />
   
    
  </AreaChart >
    </ResponsiveContainer>
  );
}


export function Chart4({ data , titles}) {

  const renderLegend = (props) => {
    const { payload } = props;
  
    return (
      <ul>
        {
          payload.map((entry, index) => (
            <li key={`item-${index}`}>{entry.value}</li>
          ))
        }
      </ul>
    );
  }
    const length=data.length;
    console.log("DATA:"+data);
    console.log("length:"+length);
    const array=Array.from(data)
    console.log("array:"+array);

   
  return (
   
    <ResponsiveContainer width="100%" height={400}>
          <PieChart width={930} height={450}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={true}
            label={titles[1]}
            outerRadius={80}
            fill="#8884d8"
            dataKey={titles[2]}
          >
        
        {array.map((entry,index)=>(
    <Cell key={`cell-${entry.cpid}`} fill={COLORS[index % COLORS.length]}/>
                ))}
           
            
          </Pie>
           
                <Tooltip />
                <Legend/>
        </PieChart>
 

    </ResponsiveContainer>
  );
}

 






