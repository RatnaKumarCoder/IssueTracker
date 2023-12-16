const express=require('express');
const route=express.Router();

const home_controller=require('../controller/home_controller');
const projectController=require('../controller/projectController');
const issueController=require('../controller/issueController');

//to render project homepage
route.get('/',home_controller.home);

//route to add project
route.post('/addProject',home_controller.addProject);

//sub-routing to /project/
route.use('/project',require('./project'));

//route to post issue
route.post('/issue',issueController.getIssue);

//route to filter issues
route.post('/issue/filterLabel',issueController.getIssueByLabel);

module.exports=route;