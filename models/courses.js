import mongoose from 'mongoose';

    mongoose.connect(
        'mongodb://127.0.0.1:27017/edukate'
    ).then(()=>{
        console.log('DB Connected');
    }).catch(() => {
        console.log('Failed to connect')
    });
    const courseSchema = new mongoose.Schema({
        topicid:{
            type: String,
        },
        description: {
             type: String
        },
        topic: {
            type: String
        },
        subject:{
            type: Number,
        },
        notes:{
            type: Array
        }
    });
    
    const collection = mongoose.model("courseCollections", courseSchema);
    export default collection;