require(['../../js/index']);
require.config({
    waitSeconds : 2,
    paths : {
        text : '../../js/text', //text is required
        json : '../../js/lib/json' //alias to plugin
    }
});

require(['json!../projects.json'], function (projectJson) {
    var projectList = projectJson.projects
    // console.log("Project List",projectList.length);

    var listBox = document.getElementById('listBox');

    for(var j=0;j<projectList.length;j++){
        var recordDiv = document.createElement("DIV");

        let classesToAdd = [ 'flex', 'bg-white', 'min-h-full', 'rounded-sm', 'mt-5', 'mb-5', 'p-6','flex-col','shadow-lg' ];
        recordDiv.classList.add(...classesToAdd);
        
        let projectTitleFormatting = ['font-bold','text-xl', 'mb-2'];
        
        //Add title 
        var projectTitle = document.createElement("p");        
        projectTitle.appendChild(document.createTextNode(projectList[j].name));
        projectTitle.classList.add(...projectTitleFormatting);

        //Add Decription of project
        var projectDesc = document.createElement("p");
        projectDesc.appendChild(document.createTextNode(projectList[j].desc));


        recordDiv.appendChild(projectTitle);
        recordDiv.appendChild(projectDesc);

        var linkTag = document.createElement("a")
        linkTag.setAttribute('href',projectList[j].gitLink);
        var link = document.createTextNode("Go To Project ->");
        linkTag.appendChild(link)
        recordDiv.appendChild(linkTag)
        // console.log(recordDiv);
        
        listBox.appendChild(recordDiv);
    }

});