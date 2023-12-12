const mongoose=require('mongoose');

const issueSchema=new mongoose.Schema({
    project:{
        type: mongoose.Schema.ObjectId,
        ref: 'Project'
    },
    issue_name:{
        type: String,
        required: true,
    },
    issue_description:{
        type: String,
        required: true,
    },
    label:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    }
},
{
    timestamps: true
});

const Issue=mongoose.model('Issue',issueSchema);

module.exports=Issue;