const express=require('express');
const route=express.Router();

const projectController=require('../controller/projectController');
const issueController=require('../controller/issueController');

//route to het project by Id
route.get('/:id',projectController.GetProject);

//route to create issues for project by projectId
route.post('/:id',issueController.createIssue);

module.exports=route;