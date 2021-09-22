import profileReducer, { addPost, deletePost } from "./profile-reducer";

const state = {
    posts: [
        { id: 1, text: "First post", likesCount: 12 },
        { id: 2, text: "Second post", likesCount: 11 },
        { id: 3, text: "Third post", likesCount: 11 },
    ],
};

it("new post should be added", () => {
    const action = addPost("testing post");
    const newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
});

it("message of new post should be correct", () => {
    const action = addPost("testing post");
    const newState = profileReducer(state, action);
    expect(newState.posts[3].text).toBe("testing post");
});

it("post was deleted", () => {
    const action = deletePost(1);
    const newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2);
});
