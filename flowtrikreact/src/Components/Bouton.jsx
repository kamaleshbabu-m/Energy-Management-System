import React,{useEffect,useState} from 'react';
import {useParams} from "react-router-dom";
import Axios from 'axios';
import '../App.css';
import { TableContainer, TableBody, Table , TableHead, TableRow, TableCell, Paper, TablePagination } from '@mui/material';
import MaterialTable from 'material-table';
import TableSortLabel from "@material-ui/core/TableSortLabel";


import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';


export default function Users() {
 
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
Axios.get(`http://localhost:3002/api/getevuserdetails`).then((response) => setPost(response.data));
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
            {title:'Id',field:'evuserid'},
            { title: 'Name', field: 'evuserfirstname' },
            { title: 'evuserdob', field: 'evuserdob',type:"date" },
             { title: 'Gender', field: 'evusergender' },
            { title: 'Phone', field: 'evusermobilenumber',type:"phonenumber" },
            { title: 'createdon', field: 'evusercreatedon',type: "datetime" },
            { title: 'modifiedon', field: 'evusermodifiedon',type: "datetime" },
            { title: 'Balance', field: 'evuserbalance',type:'currency', currencySetting:{ currencyCode:'INR', minimumFractionDigits:0, maximumFractionDigits:2} }
           
          ];




 
   
  
    return (

    <div>
        <MaterialTable
                columns={columns}
                data={rows}
                title="User Details"  


                editable={{

                onRowAdd:(newrow)=>new Promise((reslove,reject)=>{console.log(newrow)})
                }}
                options={{
                  pageSize:5, pageSizeOptions:[5,10,50], paginationType:"stepped",  
                  addRowPosition:'first',
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

              
         />


    </div>

     
    )
  
}