const express=require('express');
const route=express.Router();
const projectController=require('../controller/projectController');
const issueController=require('../controller/issueController');
route.get('/:id',projectController.GetProject);
route.post('/:id',issueController.createIssue);
module.exports=route;