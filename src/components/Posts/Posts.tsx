import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AddPostModal from "../PostModal/AddPostModal";
import ViewPostModal from "../PostModal/ViewPostModal";
import EditPostModal from "../PostModal/EditPostModal";
import ConfirmDeleteModal from "../PostModal/ConfirmDeleteModal";
import {IPost} from "../../interface/IPost"
import "./Posts.css";

function Posts() {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [displayedPostsCount, setDisplayedPostsCount] = useState(10);
    const [selectedPost, setSelectedPost] = useState<IPost | null>(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [viewModalIsOpen, setViewModalIsOpen] = useState(false);
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

    const closeModal = () => {
        setModalIsOpen(false);
        setViewModalIsOpen(false);
        setEditModalIsOpen(false);
        setDeleteModalIsOpen(false);
        setSelectedPost(null)
    };

    const addPost = (title: string, body: string) => {
        const newPost = {
            id: Date.now(),
            title,
            body,
        };
        setPosts((prevPosts) => [newPost, ...prevPosts]);
    };

    const savePost =(id: number, title: string, body: string) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) => (post.id === id ? {id, title, body} : post))
        );
    }

    const deletePost = (id: number) => {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    }

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
        <div className="posts-wrapper">
            <div className="posts-cont">
                <button
                    className="my-button"
                    onClick={() =>  {
                        setModalIsOpen(true)
                    }}
                >
                    Добавить пост
                </button>
                <AddPostModal isOpen={modalIsOpen} onClose={closeModal} onAdd={addPost}/>
                <div style={{
                    width: '800px',
                    height: '800px',
                    overflow: 'auto'
                }}>
                    {posts.slice(0, displayedPostsCount).map((post: IPost) => (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <button onClick={() => {
                                setSelectedPost(post);
                                setViewModalIsOpen(true);
                            }}>View</button>
                            <button onClick={() => {
                                setSelectedPost(post);
                                setEditModalIsOpen(true);
                            }}>Edit</button>
                            <button className="my-button-warning" onClick={() => {
                                setSelectedPost(post);
                                setDeleteModalIsOpen(true);
                            }}>Delete</button>
                        </div>
                    ))}
                </div>
                {displayedPostsCount < posts.length && (
                    <button className="my-button" onClick={handleShowMoreClick}>
                        Показать еще
                    </button>
                )}
                {
                    selectedPost && (
                        <>
                            <ViewPostModal
                                isOpen={viewModalIsOpen}
                                onClose={closeModal}
                                post={selectedPost}
                            />
                            <EditPostModal
                                isOpen={editModalIsOpen}
                                onClose={closeModal}
                                post={selectedPost}
                                onSave={savePost}
                            />
                            <ConfirmDeleteModal
                                isOpen={deleteModalIsOpen}
                                onClose={closeModal}
                                post={selectedPost}
                                onDelete={deletePost}
                            />
                        </>
                    )
                }
            </div>
        </div>
    );
}

export default Posts;