import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id)=> {
        const response = await PostService.getById(id);
        setPost(response.data);
    });
    const [fetchComments, isComLoading, comError] = useFetching(async (id)=> {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, []);

    return (
        <div>
            <h1>Single post page c ID = #{params.id}</h1>
            {isLoading
                ? <Loader/>
                : <p>{post.title} <br/>{post.body}</p>
            }

            <h2>Comments</h2>
            {isComLoading
                ? <Loader/>
                : <div>
                    {comments.map(comment =>
                        <div style={{marginTop:15}} key={comment.id}>
                            <h5>{comment.name} - {comment.email}</h5>
                            <div>{comment.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
}

export default PostIdPage;