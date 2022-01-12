let mongooseObj = require("mongoose"), //importing the mongoose module object
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

mongooseObj.connect("mongodb://127.0.0.1/mernstack8"); //creates db with name mernstack8 or opens a connection if already present

let UserSchema = new schemaObj({
    name: {type:String, required:true},
    password: {type:String, required:true},
    age : {type:Number},
    profession: {type: String},
    contact: {type: Number},
    address: {type: String},
    gender: {type: String},
    disease: {type: String},
    medicalCert: {type: String}
},
{
    versionKey: false //false - set to false then it wont create in mongodb
});

let UserModel = mongooseObj.model("vaccinationUser",UserSchema);
module.exports = UserModel;
//note: donot put versionkey to true or it will start throwing error
