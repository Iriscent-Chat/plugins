const notifAudio = new Audio("https://github.com/Iriscent-Chat/plugins/raw/main/dist/notificationSound/notification.wav");

const plugin = {
    data: {
        author: "FelixFromDiscord",
        authorId: 634840669898145802n,
        name: "Notification Sound",
        description: "Plays a notification sound when an event happens",
        repository: "https://github.com/iriscent-chat/plugins",
        url: "https://raw.githubusercontent.com/Iriscent-Chat/plugins/main/dist/notificationSound.js"
    },
    onload: () => {
        console.log(plugin.data.name + " loaded!");
    },
    onmessage: (e) => {},
    onevent: (e) => {
        notifAudio.play();
    },
}

export default plugin;
