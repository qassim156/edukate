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
        studentClass:{
            type: String,
        },
        imgPath:{
            type: String,
        },
        totalCourses:{
            type: String,
        },
        deaprtment:{
            type: String,
        },
        currentYear:{
            type: Number, 
        },
        score:{
            type: String,
        },
        g:{
            type: String,
        }
    });

    
    const studentCollection = mongoose.model("studentCollection", studentSchema);
    export default studentCollection;