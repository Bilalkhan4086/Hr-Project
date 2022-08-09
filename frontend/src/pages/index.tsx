import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Index from '../components/IndexPage'
const index = () => {
  
  const [Data, setData] = useState();
  const fetchData = async () => {
    let {data} =await axios.get("http://localhost:5000/getAllData");
    console.log("data",data)
    setData(data);
}

useEffect(()=>{
  fetchData()

},[])
if(Data !== undefined){
  return (
    <div>
<Index OrgData={Data}/>
    </div>
  )
}
else{
  return (<div style={{textAlign:"center"}}>
    Loading...
  </div>)
}
}

export default index