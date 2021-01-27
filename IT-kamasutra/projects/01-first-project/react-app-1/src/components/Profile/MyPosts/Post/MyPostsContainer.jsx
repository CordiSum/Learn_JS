import React from 'react';
import MyPosts from "../MyPosts";
import {addPostActionCreated, updateNewPostTextActionCreated} from "../../../../redux/profile-reducer";
import StoreContext from "../../../../StoreContext";


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let addPost = () => {
                        store.dispatch(addPostActionCreated());
                    }

                    let onPostChange = (text) => {
                        let action = updateNewPostTextActionCreated(text);
                        store.dispatch(action)
                    }

                    return <MyPosts updateNewPostText={onPostChange}
                         addPost={addPost}
                         posts={state.profilePage.posts}
                         newPostText={state.profilePage.newPostText}/>
                }
            }
        </StoreContext.Consumer>

    )

}

export default MyPostsContainer;