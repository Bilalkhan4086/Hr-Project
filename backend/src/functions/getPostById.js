const {postModel, commentModel} = require("../mongodb/schema")


module.exports = async function getAllData({id}){
    try {
        const postData = postModel.find({_id:id})
        return(postData)
    } catch (error) {
        return(error)
    }
}
