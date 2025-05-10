import React, { useEffect, useReducer } from "react";
import "./Posts.css";
import { Link, useNavigate } from "react-router";

const initialState = { posts: [], loading: false, error: "" };

const FETCHING_POSTS = "FETCHING_POSTS";
const FETCH_POSTS_SUCCEEDED = "FETCH_POSTS_SUCCEEDED";
const FETCH_POSTS_FAILED = "FETCH_POSTS_FAILED";

const postsReducer = (state, action) => {
    switch (action.type) {
        case FETCHING_POSTS:
            return { ...state, loading: true };
        case FETCH_POSTS_SUCCEEDED:
            console.log(action.payload);
            return { loading: false, posts: action.payload, error: "" };
        case FETCH_POSTS_FAILED:
            return { loading: false, posts: [], error: action.payload };
        default:
            return state;
    }
};

const Posts = () => {
    const [postsData, dispatch] = useReducer(postsReducer, initialState);
    const navigate = useNavigate();
    const fetchPost = async () => {
        dispatch({ type: FETCHING_POSTS });
        try {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data = await res.json();
            dispatch({ type: FETCH_POSTS_SUCCEEDED, payload: data });
        } catch (err) {
            console.log(err);
            dispatch({ type: FETCH_POSTS_FAILED, payload: err.message });
        }
    };
    useEffect(() => {
        fetchPost();
    }, []);
    if (postsData.loading) {
        return <div>Loading...</div>;
    }
    if (postsData.error) {
        return <div>Something went wrong! {postsData.error}</div>;
    }
    const { posts: allPosts } = postsData;

    const postHandler = (id) => {
        navigate(`/posts/${id}`);
    };
    return (
        <div className="posts">
            {allPosts.map((post) => (
                <div
                    className="post"
                    key={post.id}
                    onClick={() => {
                        postHandler(post.id);
                    }}
                >
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                    <Link onClick={() => postHandler(post.id)} className="link">
                        View Comments
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Posts;
