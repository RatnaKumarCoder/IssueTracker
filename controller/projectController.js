const project=require('../models/project');
// const issue=require('../models/issue');

//function to get project for issue page
module.exports.GetProject=async function(req,res){
    try{
    let proj= await project.findById(req.params.id);
    if(proj){
        res.render('issue',{
            title: "Project details",
            proj: proj
        });
    }
}
catch(err){
    console.log('error finding the project',err);
    return
}

}