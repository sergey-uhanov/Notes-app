import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts,remove}) => {

    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены!
            </h1>
        )
    }
    return (
        <div>
            <TransitionGroup>
                {posts.map((post,index ) =>
                    <CSSTransition
                        key={post.id}
                        // nodeRef={nodeRef}
                        timeout={500}
                        classNames="post"
                    >
                    <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
                        </CSSTransition>
                        )}
            </TransitionGroup>

        </div>
    );
};

export default PostList;
