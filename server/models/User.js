const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"],
    },

    password: {
        type: String,
        required: [true, "Please provide an password!"],
        unique: [true, "Email Exist"],
    },
})
const userModel=mongoose.model('users',UserSchema);
module.exports=userModel;