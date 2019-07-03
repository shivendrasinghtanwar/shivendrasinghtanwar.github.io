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

        let classesToAdd = [ 'flex', 'bg-white','border-gray-500', 'border', 'min-h-full', 'rounded-lg', 'mt-5', 'mb-5', 'p-6','flex-col' ];
        recordDiv.classList.add(...classesToAdd);
        var recordData = document.createTextNode("Name : "+projectList[j].name);

        recordDiv.appendChild(recordData);
        recordDiv.appendChild(document.createElement("br"));

        var linkTag = document.createElement("a")
        linkTag.setAttribute('href',projectList[j].gitLink);
        var link = document.createTextNode("Link To Project!");
        linkTag.appendChild(link
            )
        recordDiv.appendChild(linkTag)
        // console.log(recordDiv);
        
        listBox.appendChild(recordDiv);
    }

});