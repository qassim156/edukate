import mongoose from 'mongoose';

    mongoose.connect(
        'mongodb://127.0.0.1:27017/edukate'
    ).then(()=>{
        console.log('Admin database connected');
    }).catch(() => {
        console.log('Failed to connect')
    });

    const LoginSchema = new mongoose.Schema({
        userid:{
            type: String,
            required: true,
            unique:true,
        },
        password:{
            type: String,
            required: true,
        },
        firstname:{
            type: String,
        },
        lastname:{
            type: String,
        },
        age:{
            type: Number,
        },
        adminType:{
            type: String,
        },
        username:{
            type: String,
        }
    });
    const adminCollection = mongoose.model("adminCollection", LoginSchema);
    export default adminCollection;