import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'HI how are you?', likeCounter: 12},
                {id: 2, message: "It's my first post", likeCounter: 77},
            ],
            newPostText: '1 000 000$'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimas'},
                {id: 2, name: 'Alyona'},
                {id: 3, name: 'Daniel'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Sanya'},
                {id: 6, name: 'Kostya'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yoyo'},
                {id: 4, message: 'Im fine'},
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber()  {
        console.log('state changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;