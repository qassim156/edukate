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
        firstname:{
            type: String
        },
        lastname:{
            type: String
        },
        age:{
            type: String
        },
        dob:{
            type: String
        },
        emaul:{
            type: String
        },
        gender:{
            type: String
        },
        phone:{
            type: String
        },
        address:{
            type: String
        },
        department:{
            type: String
        }
                 
    });
    
    const student = mongoose.model("studentcollections", studentSchema);

    
    export default student;