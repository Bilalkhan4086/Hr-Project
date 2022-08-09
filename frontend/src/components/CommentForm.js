import React, { useState } from 'react'
import { Button, Rating, TextField } from "@mui/material"
import axios from 'axios'

const CommentForm = ({id}) => {
const [CommentText, setCommentText] = useState("")
const [rating, setRating] = useState(0)
  const submitHandle = async() => {
    const data = {
      _id : id,
      name:"Salman",
      rating:rating,
      commentText:CommentText
    }
 await axios.post("http://localhost:5000/addComment",data);
 setCommentText(""); 
 setRating(0);
  }

  return (
    <div style={{ width: "500px", margin: "auto" }}>

      <form onSubmit={(e) => { e.preventDefault(); submitHandle();}} >
        <TextField onChange={(e)=>{setCommentText(e.target.value)}} style={{ width: "100%" }} variant="standard" label="Write your comment here" />
        <Rating onChange={(e)=>{setRating(e.target.value)}} />
        <Button type="submit" style={{ width: "500px", marginTop: "20px" }} variant="outlined" color="primary">submit</Button>

      </form>
    </div>
  )
}

export default CommentForm