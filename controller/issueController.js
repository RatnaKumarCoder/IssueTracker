const project=require('../models/project');
const issue=require('../models/issue');

//function to create issues
module.exports.createIssue=async function(req,res){
    let proj=project.findById(req.params.id);
    try{
    if(proj){
        issue.create({
            project: req.params.id,
            issue_name: req.body.issue_name,
            issue_description: req.body.issue_description,
            label: req.body.label,
            author: req.body.author
        });
    }
    return res.redirect('back');
}
catch(err){
    console.log('error creating the issue', err);
    return
}
}

//function to get issues
module.exports.getIssue=async function(req,res){
    try{
        let issue1=await issue.find({issue_name: req.body.search}).populate('project');
        if(issue1.length==0){
            issue1=await issue.find({issue_description: req.body.search}).populate('project');
        }
        if(issue1.length==0){
            issue1=await issue.find({author: req.body.search}).populate('project');
            console.log('hii');
        }
        console.log(issue1);
        if(req.xhr){

            
            return res.status(200).json({
                data: {
                    issue1: issue1
                },
                message: "retrieved"
            });
        }
    }
    catch(err){
        console.log('error finding the issue',err);
        return;
    }

}

//function to get issues by label
module.exports.getIssueByLabel=async function(req,res){
    try{
    let issue1;
    let arr=[];
    console.log(req.body.label);
    if(req.body.label!=[]){
        issue1=await issue.find({label: req.body.label }).populate('project');
    }
    else{
        for(let i of req.body.label){
            issue1=await issue.find({label: i}).populate('project');
        }
    }

    arr.push(issue1);
    console.log(arr);
    if(req.xhr){
        return res.status(200).json({
            data: {
                arr: arr
            },
            message: "retrieved"
        });
    }
}

catch(err){
    console.log('error finding the issue',err);
    return;   
}

}