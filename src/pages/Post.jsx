import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router";

const initialState = { comments: [], post: {}, loading: false, error: "" };

const FETCHING_DATA = "FETCHING_DATA";
const FETCH_DATA_SUCCEEDED = "FETCH_DATA_SUCCEEDED";
const FETCH_DATA_FAILED = "FETCH_DATA_FAILED";

const postReducer = (state, action) => {
    switch (action.type) {
        case FETCHING_DATA:
            return { ...state, loading: true };
        case FETCH_DATA_SUCCEEDED:
            return {
                loading: false,
                post: action.payload.post,
                comments: action.payload.comments,
                error: "",
            };
        case FETCH_DATA_FAILED:
            return {
                loading: false,
                post: {},
                comments: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

const Post = () => {
    const { postId } = useParams();
    const [postData, dispatch] = useReducer(postReducer, initialState);
    const fetchData = async () => {
        dispatch({ type: FETCHING_DATA });
        try {
            const [postRes, commentsRes] = await Promise.all([
                fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`),
                fetch(
                    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
                ),
            ]);

            const [post, comments] = await Promise.all([
                postRes.json(),
                commentsRes.json(),
            ]);
            dispatch({
                type: FETCH_DATA_SUCCEEDED,
                payload: { comments, post },
            });
        } catch (err) {
            console.log(err);
            dispatch({ type: FETCH_DATA_FAILED, payload: err.message });
        }
    };
    useEffect(() => {
        if (postId) {
            fetchData();
        }
    }, [postId]);
    console.log(postData);
    if (postData.loading) {
        return <div>Loading post...</div>;
    }
    if (postData.error) {
        return <div>Somthing went wrong ! {postData.error}</div>;
    }

    return (
        <div>
            <div className="post">
                <p>{postData.post.title}</p>
                <p>{postData.post.body}</p>
            </div>

            {postData.comments?.map((comment) => (
                <section className="comment">
                    <p>{comment.body}</p>
                    <p>By {comment.email}</p>
                </section>
            ))}
        </div>
    );
};

export default Post;
