import React, { useState, useEffect } from "react";
import axios from "axios";

type Post = {
    id: number;
    title: string;
    body: string;
};

function DummyPosts() {
    const [posts, setPosts] = useState([]);
    const [displayedPostsCount, setDisplayedPostsCount] = useState(10);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleShowMoreClick = () => {
        setDisplayedPostsCount(displayedPostsCount + 10);
    };

    return (
        <>
            <div style={{
                width: '800px',
                height: '800px',
                overflow: 'auto'
            }}>
                {posts.slice(0, displayedPostsCount).map((post: Post) => (
                    <div key={post.id} className="dummy-posts__post">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}

            </div>
            {displayedPostsCount < posts.length && (
                <button className="user-info__login-button my-button" onClick={handleShowMoreClick}>Показать еще</button>
            )}
        </>
    );
}

export default DummyPosts;