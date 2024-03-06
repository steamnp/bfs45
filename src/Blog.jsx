import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { json } from "react-router-dom";

function Blog() {
    const [posts, setPosts] = useState([]);

    const [loading, setLoading] = useState(true);

    //arrow function
    const fetchPosts = async () => {
        const responsePosts = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );

        //to converst json object to javascript object
        setPosts(responsePosts.data);

        //after data is loaded it must return false
        setLoading(false);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            {loading ? (
                //if its true
                <div>Data is loading</div>
            ) : (
                //else
                <div>
                    {posts.map((post, index) => (
                        <div key={index}>
                            {post.id}.{post.title}
                            <div>{post.body}</div>
                            <hr></hr>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Blog;
