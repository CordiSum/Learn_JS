const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body},)
            return state;
        default:
            return state;
    }
}

export const sendMessageCreated = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreated = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;