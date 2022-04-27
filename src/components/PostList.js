import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { fetchPost } from '../redux-thunk/actions';

const PostList = (props)=>{
    useEffect(() => {
        fetchPosts();
    },[])

    const fetchPosts = async () =>{
        await props.fetchPost();
    }

    return(
        <div>
            <div>POST LIST</div>
            {props.posts.length>0 && props.posts.map((post,key) => {
                return (<div key={key} style={{padding:"10px", margin: "10px"}}><h3>{post.title}</h3>
                <p>{post.body}</p><hr/></div>)
            })}
        </div>
    )
};
const mapStateToProps = (state) => {
    return {posts: state.posts}
}

export default connect(mapStateToProps, {fetchPost})(PostList)