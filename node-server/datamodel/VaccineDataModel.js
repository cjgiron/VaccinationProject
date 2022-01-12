let mongooseObj = require("mongoose"), //importing the mongoose module object
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

mongooseObj.connect("mongodb://127.0.0.1/mernstack8"); //creates db with name mernstack5 or opens a connection if already present

let VaccineSchema = new schemaObj({
    name: {type:String, required:true},
    price: {type:Number},
    type: {type:String},
    sideEffects: {type:String},
    origin: {type: String},
    doses : {type:Number}, 
    otherInfo : {type: String}
    },
{
    versionKey: false //false - set to false then it wont create in mongodb
});

let VaccineModel = mongooseObj.model("vaccine",VaccineSchema);
module.exports = VaccineModel;
//note: donot put versionkey to true or it will start throwing error 