import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreated, updateNewPostTextActionCreated} from "../../../redux/profile-reducer";




const MyPosts = (props) => {
    let postsElements =
        props.posts.map( p => <Post message={p.message} likeCounter={p.likeCounter} />)

    let newPostElement = React.createRef();

    let addPost =  () => {
        // props.addPost();
        props.dispatch(addPostActionCreated());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.updateNewPostText(text);
        let action = updateNewPostTextActionCreated(text);
        props.dispatch(action)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              cols="50" rows="2"
                              value={props.newPostText}
                              onChange={onPostChange} />
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                    <button>remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;