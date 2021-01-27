const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'HI how are you?', likeCounter: 12},
        {id: 2, message: "It's my first post", likeCounter: 77},
    ],
    newPostText: '1 000 000$'
};

const profileReducer = (state = initialState, action) => {
    debugger
    switch(action.type) {
        case ADD_POST:
            let newPost = {
            id: 5,
            message: state.newPostText,
            likeCounter: 0
        };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreated = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreated = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;