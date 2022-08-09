import { Avatar,Rating } from '@mui/material'
import React from 'react'

const Comments = ({commentData}) => {
  
if(commentData){

  return (
    <div style={{backgroundColor:"#dddddd",padding:"10px 10px",width:"480px",margin:"20px auto"}}>
       <div style={{display:"flex",justifyContent:"space-between"}}>
       <div style={{display:"flex"}}>
        <Avatar>{commentData && commentData.name.charAt(0).toUpperCase()}</Avatar>
        <h3 style={{display:"flex",margin:"auto 10px",fontSize:"24px"}}>{commentData && commentData.name}</h3>
        </div>
        <Rating value={commentData && commentData.rating} readOnly/>
       </div>
        <p>{commentData && commentData.commentText}</p>
        <p style={{display:"flex",justifyContent:"right",fontWeight:"lighter",fontSize:"11px",color:"#010101"}}>{commentData && commentData.date}</p>
    </div>
  )
  }
  else{
    return("")
  }

}

export default Comments