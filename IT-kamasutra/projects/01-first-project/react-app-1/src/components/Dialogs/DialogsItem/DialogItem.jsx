import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


const DialogsItem = (props) => {

    let dialogs = [
        {id: 1, name: 'Dimas'},
        {id: 2, name: 'Alyona'},
        {id: 3, name: 'Daniel'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Sanya'},
        {id: 6, name: 'Kostya'},
    ]
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yoyo'},
        {id: 4, message: 'Im fine'},
    ]

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );
    let messagesElement = messages.map( m =>  <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}
export default DialogsItem;