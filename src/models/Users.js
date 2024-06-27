import {Schema , model} from "mongoose"

const User = new Schema({
    Name: {
        type: String,
        required: true,
        trim: true, //Delete spaces
    },
    Surname: {
        type: String,
        trim: true,
    },

    Email: {
        type: String,
        trim: true,
        unique: false, //Unique mails
    },

    Company: {
        type: String,
        trim: true
    },

    Country:{
        type: String,
        trim: true
    },

    Pass: {
        type: String,
        trim: true,
    },

    Verify: {
        type: Boolean,
        trim: true,
    },
}, {
    timestamps: true,  // when user is created
    versionKey: false , // esto es para evitar los __v de mongoose / nodemon
});

export default model('users',User)





