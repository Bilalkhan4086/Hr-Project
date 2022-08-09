import { TextField,Button } from '@mui/material'
import { navigate } from 'gatsby'
import React, { useEffect,useState } from 'react'
import Post from './Post'

const IndexPage = ({OrgData}) => {
    const [Data, setData] = useState([]);
    const [Search, setSearch] = useState('');
    const [Sort,setSort] = useState(null);

    const ApplySort = () =>{
        if(Sort){
            setData(Data.sort((a,b)=>(new Date(b.date) - new Date(a.date))))
        }
        else{
            setData(Data.sort((a,b)=>(new Date(a.date) - new Date(b.date))))
        }
    }
    
const ApplySearch = () =>{
    setData(OrgData.filter((data)=>(data.postText.toLowerCase().includes(Search.toLowerCase()))));
}


useEffect(()=>{
    ApplySearch();
    console.log("ApplySearch",Data)
},[Search])

useEffect(() => {
    ApplySort();
    if(Sort === null){
        setData(OrgData);
        setSort(true);
    }
    console.log("SortD",Data);
    console.log("Sort",Sort)
    }, [Sort])
    

  return (
    <div>
        <nav style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
            <h2 style={{color:"#002a4c",textAlign:"center"}}>Post Project</h2>
            <button onClick={()=>{navigate("/post")}} style={{height:"30px",width:"120px",margin:"auto",color:"white",backgroundColor:"#002a4c",cursor:"pointer"}} >
                New Post
            </button>
            <TextField style={{width:"500px",margin:"auto"}} variant="standard" onChange={(e)=>{setSearch(e.target.value);}} label="Search..." />
        <div style={{display:"flex",width:"500px",margin:"auto",justifyContent:"space-around"}}>
        <h3>Filter :</h3><Button onClick={()=>{
            setSort(!Sort);
       }}>{Sort ? "Sort" : "UnSort"}</Button>
        </div>
        </nav>
        <div>
            {
                Data.map((data,i)=>(
                    <Post key={i} data={data}/>
                ))
            }
        </div>
    </div>
  )
}

export default IndexPage