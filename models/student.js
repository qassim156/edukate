import mongoose from 'mongoose';

    mongoose.connect(
        'mongodb://127.0.0.1:27017/edukate'
    ).then(()=>{
        console.log('Student database Connected');
    }).catch(() => {
        console.log('Failed to connect')
    });
    const studentSchema = new mongoose.Schema({
        userid:{
            type: String,
            required: true,
            unique:true,
        },
        password:{
            type: String
        },
        firstName:{
            type: String
        },
        lastName:{
            type: String
        },
        address:{
            type: String
        },
        phoneNumber:{
            type: String
        },
        email:{
            type: String
        },
        age:{
            type: String
        },
        regDate:{
            type: String
        }               
    });
    
    const student = mongoose.model("studentcollections", studentSchema);

    
    export default student;