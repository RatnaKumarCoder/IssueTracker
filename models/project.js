const mongoose=require('mongoose');

//defining a database schema for project
const projectSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String
    },
    author:{
        type: String,
        required: true
    }
},{
    timestamps: true
}

);

const Project=mongoose.model('Project',projectSchema);

module.exports=Project;