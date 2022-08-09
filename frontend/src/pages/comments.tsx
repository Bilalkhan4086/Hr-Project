import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CommentForm from '../components/CommentForm'
import CommentListPage from '../components/CommentListPage'

const comments = () => {
    const [Data, setData] = useState([null]);
    let id = '';

    useEffect(() => {
        if(window !== undefined){
            id = location.href.slice(31);
            console.log(id)
        }
    const fetchData = async () => {
        const {data} = await axios.get("http://localhost:5000/getPostById",{
            params:{
                id:id
            }
        })
        setData(data);
    }
   fetchData() }, [])
    
  return (
    <div>
        <h2 style={{textAlign:"center"}}>Comments for the Post</h2>
        <CommentListPage data={Data[0]}/>
        <CommentForm id={id}/>
    </div>
  )
}

export default comments