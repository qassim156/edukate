import mongoose from 'mongoose';

    mongoose.connect(
        'mongodb://127.0.0.1:27017/edukate'
    ).then(()=>{
        console.log('Admin database connected');
    }).catch(() => {
        console.log('Failed to connect')
    });

    const adminSchema = new mongoose.Schema({
        userid:{
            type: String,
            required: true,
            unique:true,
        },
        password:{
            type: String,
            required: true,
        }
    });
    const admin = mongoose.model("adminCollection", adminSchema);
    export default admin;