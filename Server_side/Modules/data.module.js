
const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
     product_name : {type : String , required : true},
     description : {type : String },
     price : {type : Number},
     image_url : {type : String},
     product_type : {type : String},
     Old_days : {type : String}
})

const userData = mongoose.model('userData', DataSchema);


module.exports = userData