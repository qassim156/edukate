import mongoose from 'mongoose';

    mongoose.connect(
        'mongodb://127.0.0.1:27017/edukate'
    ).then(()=>{
        console.log('teaxher database Connected');
    }).catch(() => {
        console.log('Failed to connect')
    });
    const teacherSchema = new mongoose.Schema({
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
    const teacher = mongoose.model("teacherCollection", teacherSchema);
    export default teacher;