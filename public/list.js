const pluginArray = Object.entries(pluginList);
const pluginTemplate = document.getElementById('plugin-card-temp');

window.copyLink = function(id) {
    navigator.clipboard.writeText("https://iriscent-chat.github.io/plugins/dist/" + id + ".js").then(function() {
        alert("Copied the link to clipboard!");
    }, function (err) {
        alert("Couldn't copy the link... Something went wrong :(");
        console.error(id, err);
    });
}

pluginArray.forEach(e => {
    if ('content' in document.createElement('template')) {

        var plugins = document.getElementById("plugin-list");
        var template = pluginTemplate;
      
        var clone = template.content.cloneNode(true);

        var cardBody = clone.children[0].children[0].children;

        // Card Title
        cardBody[0].innerText = e[1].data.name;

        // Card Author
        cardBody[1].children[0].innerText = `by ${e[1].data.author}`;
        cardBody[1].children[0].href = `https://discord.com/users/${e[1].data.authorId}`;

        // Card Description
        cardBody[2].innerText = e[1].data.description;

        // Card Link
        cardBody[3].addEventListener('click', () => copyLink(e[0]));

        // Card Repository
        cardBody[4].href = e[1].data.repository; 

        plugins.appendChild(clone);
    } else {
        alert("Templating not supported in your browser :(");
    }
});
