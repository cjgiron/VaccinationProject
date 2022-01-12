let mongooseObj = require("mongoose"), //importing the mongoose module object
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

mongooseObj.connect("mongodb://127.0.0.1/mernstack8"); //creates db with name mernstack5 or opens a connection if already present

let AppointmentSchema = new schemaObj({
    user: Object,
    hospital: Object,
    vaccine: Object,
    date: {type: String},
    },
{
    versionKey: false //false - set to false then it wont create in mongodb
});

let AppointmentModel = mongooseObj.model("appointment",AppointmentSchema);
module.exports = AppointmentModel;
//note: donot put versionkey to true or it will start throwing error 