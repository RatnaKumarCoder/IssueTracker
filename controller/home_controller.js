const project=require('../models/project');

//function to render projects in home page
module.exports.home=async function(req,res){
    let projects=await project.find({});
    res.render('home',{
        title: 'IssueTracker',
        projects: projects
    });
}

//function to add projects 
module.exports.addProject=function(req,res){
    try{
     project.create({
        name: req.body.name,
        description: req.body.description,
        author: req.body.author
     });
     console.log('project created successfully');
     res.redirect('/');
    }
    catch(err){
        console.log(err,'error creating the project')
    }
}