const {postModel, commentModel} = require("../mongodb/schema")


module.exports = async function getAllData(){
    try {
        const postData = postModel.find()
        return(postData)
    } catch (error) {
        return(error)
    }
}
