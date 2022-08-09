const {postModel} = require("../mongodb/schema")

module.exports = async function addPost({body}){
    let result;
    try {
        var obj = {
            name:body.name,
            age:body.age,
            postText:body.postText,
            postFile:body.postFile,
            postFileName:body.postFileName
        }
        const post = new postModel(obj)
        await post.save()
        .then(()=>{
            result = true
        })
        .catch((error)=>{
            console.log(error);
            result = false;
        })
        
    } catch (error) {
        result = false;
    }
    return(result)
}