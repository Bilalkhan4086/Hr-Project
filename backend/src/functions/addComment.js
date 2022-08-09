const {postModel} = require("../mongodb/schema")

module.exports = async function addComment(props){
    try {
            const data = await postModel.updateOne(
            {
                _id:props._id,
                
            },
            {
                $push:{
                    "comments":{
                        "name" : props.name,
                        "rating":props.rating,
                        "commentText":props.commentText
                    }
                }
            },
            {
                upsert:true
            }
            )
        .then(()=>{
            console.log("success")
        })
        .catch((e)=>{
            console.log(error)
        })
        return(data)
    } catch (error) {
        return(error)
    }
}

// commentForPost:[
    
// ]