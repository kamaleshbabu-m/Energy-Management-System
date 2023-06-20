import React,{useEffect,useState,useMemo} from 'react';
import {useParams} from "react-router-dom";
import Axios from 'axios';
import '../App.css';
import MaterialTable from 'material-table';
 

 
 

 


export default function Session() {

 
 
var link = document.createElement('link');
link.type = 'text/css';
link.rel = 'stylesheet';     
document.head.appendChild(link);
link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';


  const navItems = ['Home', 'About', 'Contact'];
   const [post,setPost] = useState({})
   const [title,setData] = useState([]);

   let totalCost = 0;

  useEffect(()=>{
Axios.get(`http://localhost:3002/api/getsessiondetails`).then((response) => setPost(response.data));
},[]);

 
const rows = Array.from(post)  ;

rows.forEach((row) => (totalCost += row.amount));


   


 const [rowData, setRowData] = useState(rows);
const [orderDirection, setOrderDirection] = useState("desc");






const sortArray = (rows, orderBy) => {
  console.log("sort:"+orderDirection);
  switch (orderBy) {
    case "asc":
    default:
      return rows.sort();
    case "desc":
      return rows.sort();
  }
};
 
const handleSortRequest = () => {
  setRowData(sortArray(rows, orderDirection));
  setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
};


const columns=[
            { title: 'chargestation', field: 'chargestation' },
            { title: 'cpid', field: 'cpid' },
            { title: 'username', field: 'username' },
            { title: 'starttime', field: 'starttime',type: "datetime" },
            { title: 'stoptime', field: 'stoptime', type: "datetime" },
            { title: 'consumedenergy', field: 'consumedenergy' },
            { title: 'amount', field: 'amount',type:'currency', currencySetting:{ currencyCode:'INR', minimumFractionDigits:0, maximumFractionDigits:2} }
           
          ];




 
   
  
    return (

    <div>
       
        <MaterialTable
                columns={columns}
                data={rows}
                title="Charge Session Details"  


                editable={{
                  onRowAdd:(newrow)=>new Promise((resolve, reject)=>{console.log(newrow)}),
                  onRowEdit:(newrow)=>new Promise((resolve, reject)=>{console.log(newrow)}),
                }}

                enableColumnFilters={true}
                options={{
                  pageSize:5, pageSizeOptions:[5,10,50], paginationType:"stepped",  
                  filtering:true,
                  headerStyle: {
                    backgroundColor: '#01579b',
                    color: '#FFF',
                    fontWeight: 700
                  },
                  cellStyle: {

                  },
                  exportButton: {
                       csv: true,
                       pdf: true,
                        
                  }
               }}

               actions={[
                        
                      ]}

              
         />


    </div>

     
    )
  
}