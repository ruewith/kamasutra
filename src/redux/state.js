let state = {
    profilePage: {
        posts: [
            { id: 1, text: "First post", likesCount: 12 },
            { id: 2, text: "Second post", likesCount: 11 },
            { id: 3, text: "Third post", likesCount: 11 },
        ],
    },
    messagesPage: {
        dialogs: [
            { id: 1, name: "User 1" },
            { id: 2, name: "User 2" },
            { id: 3, name: "User 3" },
            { id: 4, name: "User 4" },
            { id: 5, name: "User 5" },
        ],
        messages: [
            { id: 1, message: "Message 1" },
            { id: 2, message: "Message 2" },
            { id: 3, message: "Message 3" },
            { id: 4, message: "Message 4" },
            { id: 5, message: "Message 5" },
        ],
    },
    sidebar: {},
};

export default state;
