let express = require("express");
let router = express.Router({});
AppointmentDataModel = require("../datamodel/AppointmentDataModel");

//product api's
router.post('/api/saveAppointment',(req, res)=>{
    console.log("appointment data ", req.body);

    let appointmentDataObject = new AppointmentDataModel(req.body); //this creates mongoose model to be used as to make queries

    appointmentDataObject.save((err, newAppointmentData)=>{ //error first callback
        if (err) {
                res.send("Error in appointment saving");
        } else {
                res.send(newAppointmentData); //if product successfully saved we will get the mongodb unique id
        }
    })
})

router.get('/api/getAppointments',(req, res)=>{
    AppointmentDataModel.find((err, appointments)=>{ //error first callback
        if (err) {
                res.send("Error in getting appointments");
        } else {
                res.send(appointments);
        }
    })
})

module.exports = router; 