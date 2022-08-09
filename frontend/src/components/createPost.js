import React, { useState,useEffect } from 'react'
import {TextField,Button} from "@mui/material"
import axios from 'axios'
import {navigate} from 'gatsby'

const CreatePost = () => {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [postText, setPostText] = useState("")
    const [postFile, setPostFile] = useState(null)
    const [Res, setRes] = useState(null);

    useEffect(() => {
      console.log('');
      if(Res){
        navigate("/")
      }
    }, [Res])
    

    const handleSubmit = async (e) =>{

        e.preventDefault();
        
    const data = {
        name:name,
        age:age,
        postText:postText,
        postFile:URL.createObjectURL(postFile),
        postFileName:postFile.name
    }
        const res = await axios.post('http://localhost:5000/addPost',data);
        setRes(res.data)
    }

  return (
<div  style={{width:"500px",margin:"auto"}}>
    <nav>
       <h2 style={{color:"#002a4c",textAlign:"center"}}>Create New Post</h2>
    </nav>
   <div style={{backgroundColor:"#dddddd",padding:"20px"}}>
    <p style={{color:`${Res ? "green" : "red"}`,border:`1px solid ${Res ? "green" : "red"}`,textAlign:"center",display:`${Res === null ? "none" : "unset"}`}}>{Res ? "Success" : "Error" }</p>
     <form onSubmit={handleSubmit}>
       <TextField onChange={(e)=>{setName(e.target.value)}} style={{width:"100%"}} variant="standard" label="Write your name here" />
       <TextField onChange={(e)=>{setAge(e.target.value)}} style={{width:"100%"}} variant="standard" label="Write your age here" />
       <TextField onChange={(e)=>{setPostText(e.target.value)}} style={{width:"100%"}} variant="standard" label="Write your post text here" />
       <TextField onChange={(e)=>{setPostFile(e.target.files[0])}}  id="file" type="file" style={{width:"100%"}} variant="standard" label="Add File here" />
        <Button type='submit' variant="outlined"  style={{width:"100%",marginTop:"20px"}}>Share</Button>
    </form>
   </div>
   </div>
  )
}

export default CreatePost
