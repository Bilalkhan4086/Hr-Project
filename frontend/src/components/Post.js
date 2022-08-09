import React from 'react'
import Comments from './Comment'
import CommentForm from './CommentForm'
import {navigate} from 'gatsby'


const Post = ({data}) => {
if(data){
  return (
    <div style={{width:"500px",margin:"auto"}}>
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",margin:"30px auto",backgroundColor:"#002a4c",color:"white",width:"500px",
    minHeight:"300px"}}>
        <div style={{margin:"auto"}}>
        <h2 style={{textAlign:"center"}} >{data.postText}</h2>
        <h3 style={{textAlign:"center"}} >File Name : {data.postFileName}</h3>
        <h4 style={{textAlign:"center"}}>By (author) : {data.name}</h4>
        <p style={{textAlign:"center"}}>At {data.date}</p>
        </div>
    </div>
    <div style={{cursor:"pointer"}} onClick={()=>{navigate(`/comments?${data._id}`)}}>
          <Comments commentData={((data.comments === null) || (data.comments === undefined)) ? {} : data.comments[data.comments.length - 1]} />
    </div>
    <CommentForm id={data._id}/>
    </div>
  )}
  else{
    return(<></>)
  }
}

export default Post