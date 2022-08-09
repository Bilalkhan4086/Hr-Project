var mongoose = require('mongoose');
const path = require("path");
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

module.exports = async function connect(){
  try {
    // Option
    console.log("Mangodb string =",process.env.MANGODB_CONNECTION_STRING)
    await mongoose.connect(process.env.MANGODB_CONNECTION_STRING,{ useNewUrlParser: true, useUnifiedTopology:true });
    console.log('mongoose open for business');
    
  }
  catch(error){
    console.log( 'mongoose connection error: ',error);
  }
    

};
