export const plugin = {
    data: {
        author: "FelixFromDiscord",
        authorId: 634840669898145802n,
        name: "Notification Sound",
        description: "Plays a notification sound when someone sends a message in chat or an event happens",
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