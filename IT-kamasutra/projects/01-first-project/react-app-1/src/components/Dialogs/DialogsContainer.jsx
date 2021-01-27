import React from 'react';
import {sendMessageCreated, updateNewMessageBodyCreated} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreated())
            }

            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreated(body))
            }

            return <Dialogs updateNewMessageBody={onNewMessageChange}
                            sendMessage={onSendMessageClick}
                            dialogsPage={store.getState().dialogsPage}/>
            }
        }
    </StoreContext.Consumer>


}
export default DialogsContainer;