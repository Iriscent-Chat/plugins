export default {
    data: {
        author: "FelixFromDiscord",
        authorId: 634840669898145802n,
        name: "Custom Theme Loader",
        description: "Loads any custom theme!",
        repository: "https://github.com/iriscent-chat/plugins",
    },
    load: () => {
        console.log(this.data.name + " loaded!");
    },
    onmessage: (e) => {
        console.log("Got message event data: " + e);
    },
    onevent: (e) => {
        console.log("Got event data: " + e);
    },
}