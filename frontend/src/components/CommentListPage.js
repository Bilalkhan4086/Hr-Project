import React from 'react'
import Comment from './Comment'
const CommentListPage = ({data}) => {
 if((data !== null) && (data !== undefined)){ 
    console.log(data)
    return (
        <div style={{margin:"auto"}}>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",margin:"30px auto",backgroundColor:"#002a4c",color:"white",width:"500px",
        minHeight:"300px"}}>
            <div style={{margin:"auto"}}>
            <h2 style={{textAlign:"center"}} >{data.postText}</h2>
            <h3 style={{textAlign:"center"}} >File Name : {data.postFileName}</h3>
            <h4 style={{textAlign:"center"}}>By (author) : {data.name}</h4>
            <p style={{textAlign:"center"}}>At {data.date}</p>
            </div>
        </div>


        {data.comments.map((Data,i)=>(
            <Comment key={i} commentData={Data}/>
        ))}
    </div>
  )}
  else{
    return <></>;
  }
}

export default CommentListPage