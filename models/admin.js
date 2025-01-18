import mongoose from 'mongoose';

    mongoose.connect(
        'mongodb://127.0.0.1:27017/edukate'
    ).then(()=>{
        console.log('DB Connected');
    }).catch(() => {
        console.log('Failed to connect')
    });
    const LoginSchema = new mongoose.Schema({
        username:{
            type: String,
            required: true,
            unique:true,
        },
        email:{
            type: String,
            required: true,
            unique:true,
        },
        password:{
            type: String,
            required: true,
        }
    });
    const collection = mongoose.model("adminCollections", LoginSchema);
    export default collection;