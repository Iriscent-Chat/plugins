export default {
    data: {
        author: "FelixFromDiscord",
        authorId: 634840669898145802n,
        name: "Notification Sound",
        description: "Plays a notification sound when an event happens",
        repository: "https://github.com/iriscent-chat/plugins",
        url: "https://raw.githubusercontent.com/Iriscent-Chat/plugins/main/dist/notificationSound.js"
    },
    onload: () => {
        console.log(this.data.name + " loaded!");
    },
    onmessage: (e) => {
        console.log("Got message event data: " + e);
    },
    onevent: (e) => {
        console.log("Got event data: " + e);
    },
}
