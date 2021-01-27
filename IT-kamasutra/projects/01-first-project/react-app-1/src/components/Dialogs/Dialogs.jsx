import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );
    let messagesElement = state.messages.map( m =>  <Message message={m.message} />);
    let newMessageBody = state.newMessageBody;



    let onSendMessageClick =  () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div>add new message</div>
                    <div>
                        <textarea value={ newMessageBody }
                                  placeholder='Enter your message'
                                  onChange={onNewMessageChange}
                                  cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <button onClick={ onSendMessageClick }>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;