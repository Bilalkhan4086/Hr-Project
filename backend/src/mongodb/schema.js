const {Schema,models,model} = require("mongoose");


const commentSchema = new Schema({
    name : {
        type:String,
        require:true
    },
    rating:{
        type:Number,
        require:false
    },
    date:{
        type:Date,
        default: Date.now
    },
    commentText : {
        type:String,
        require:true
    }
}
)


const postSchema =new Schema({
    name : {
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:false
    },
    date:{
        type:Date,
        default: Date.now
    },
    postText : {
        type:String,
        require:true
    },
    postFile:{
        type:String,
        require:false
    },
    postFileName:{
        type:String,
        require : false
    },
    comments:[commentSchema]

})




// const commentSchema = new Schema({
//     postId:{
//         type : Schema.Types.ObjectId,
//         ref:"posts"
//     },
//     commentForPost:[{
//         name : {
//             type:String,
//             require:true
//         },
//         rating:{
//             type:Number,
//             require:false
//         },
//         date:{
//             type:Date,
//             default: Date.now
//         },
//         commentText : {
//             type:String,
//             require:true
//         }
//     }]
// }
// )

const postModel = models.posts || model("posts",postSchema);
// const commentModel = models.comments || model("comments",commentSchema);

module.exports = {
postModel,
// commentModel
}