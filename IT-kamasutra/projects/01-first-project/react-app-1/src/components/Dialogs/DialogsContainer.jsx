import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreated, updateNewMessageBodyCreated} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick =  () => {
        props.store.dispatch(sendMessageCreated())
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreated(body))
    }

    return <StoreContext.Consumer>
        <Dialogs updateNewMessageBody={onNewMessageChange}
                 sendMessage={onSendMessageClick} dialogsPage={state}/>
    </StoreContext.Consumer>


}
export default DialogsContainer;