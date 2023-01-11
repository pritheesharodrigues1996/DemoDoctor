import mongoose  from 'mongoose';

const doctorSchema = new mongoose.Schema({
    name: {
        required: [true,"name is required"],
        type: String
    },
    phone: {
        required:  [true,"phone is required"],
        type: String
    },
    address: {
        required:  [true,"address is required"],
        type: String

    },
    specialization: {

        required:  [true,"specialization is required"],
        type: String
    },
    fessPerConsultation : {

        required: [true,"fessPerConsultation is required"],
        type: Number

    } ,
    timings:{
        required:[true,"timings is required"],
        type: Object    

    }
},
{timestamps:true}
)

const doctorModel=mongoose.model('doctor',doctorSchema);
module.exports=doctorModel;