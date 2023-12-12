{
    let labelProjects=document.getElementById('titledescription');
    let FilteredProjects=document.getElementById('displayProjectsAll');
    //method to submit the form data for new post using AJAX
    let getIssue=function(){
        let Issue=$('#issueform');
        Issue.submit(function(e){
            e.preventDefault();
            $.ajax({
                type: 'post',
                url: '/issue',
                data: Issue.serialize(),
                success: function(data){
                    console.log(data.data.issue1);
                    labelProjects.innerHTML="<div> </div>";
                    for(let issue of data.data.issue1){
                     let newPost=newPostDom(issue);
                     $('#titledescription>div').prepend(newPost)
                    }
                },
                error: function(error){
                    console.log(error.responseText);
                }
            });
        });

    }
    getIssue();
    //method to create a post in DOM
    let newPostDom=function(issue){
        return $(`
            <div class="single-project1 my-2 shadow-lg px-2 py-2">
                <h1> Project Name : ${issue.project.name}</h1>
                <p> Project Description: ${issue.project.description} </p>
                <p> Project Author: ${issue.project.author} </p>
                <p> Issue Name: ${issue.issue_name }</p>
                <p> Issue Description: ${issue.issue_description }</p>
            </div>
    `);
        
    }


    let getIssuebylabel=function(){
        let Issue=$('#labelForm');
        Issue.submit(function(e){
            e.preventDefault();
            $.ajax({
                type: 'post',
                url: '/issue/filterLabel',
                data: Issue.serialize(),
                success: function(data){
                    console.log(data);
                    console.log("-----------",data.data.arr);
                    FilteredProjects.innerHTML="<div> </div>";
                    for(let i of data.data.arr){
                        for(let issue of i){
                            let newIssue=newIssueDom(issue);
                            $('#displayProjectsAll>div').prepend(newIssue)
                        }
                    }
                },
                error: function(error){
                    console.log(error.responseText);
                }
            });
        });

    }

    getIssuebylabel();

    let newIssueDom=function(issue){  
        console.log(issue);
        return $(`
        <div class="single-project1 my-2 shadow-lg px-2 py-2">
            <h1> Project name : ${issue.project.name} </h1>
            <p> Project description : ${issue.project.description} </p>
            <p> Project author : ${issue.project.author} </p>
            <p> Issue name :${issue.issue_name }</p>
            <p> Issue description : ${issue.issue_description }</p>
        </div>
    `);
               
    }

}