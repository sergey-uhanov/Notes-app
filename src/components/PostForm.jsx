import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const[post,setPosts]= useState({title:'', body:''})

    const addNewPost= (e)=> {
        e.preventDefault()
        const newPost = {
            ...post,id: Date.now()
        }
        create(newPost)
        setPosts({title: '',body: ''})
    }


        return (
        <form>
            {/*//Управляемый компонент*/}
            <MyInput type="text"
                     value={post.title}
                     onChange={e =>setPosts({...post, title: e.target.value})}
                     placeholder="название поста"/>


            <MyInput type="text"
                     value={post.body}
                     onChange={e =>setPosts({...post, body: e.target.value})}
                     placeholder="описание поста"/>
            <MyButton onClick={addNewPost} >Создать пост</MyButton>
        </form>
    );
};

export default PostForm;
