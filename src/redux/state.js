let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, text: "First post", likesCount: 12 },
                { id: 2, text: "Second post", likesCount: 11 },
                { id: 3, text: "Third post", likesCount: 11 },
            ],
            newPostText: "Some",
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
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("rerendered");
    },
    addPost() {
        const newPost = { id: 4, text: this._state.profilePage.newPostText, likesCount: 0 };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },
    inputPostText(text) {
        this._state.profilePage.newPostText = text;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
};

export default store;
