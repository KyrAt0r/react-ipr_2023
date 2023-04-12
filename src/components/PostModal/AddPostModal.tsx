import React, { useState } from "react";
import Modal from "react-modal";
import "./PostModal.css";


type AddPostModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (title: string, body: string) => void;
};

const AddPostModal = ({ isOpen, onClose, onAdd }: AddPostModalProps) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBody(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onAdd(title, body);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} className="add-post-modal" ariaHideApp={false}>
            <h2>Добавить пост</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Заголовок</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
                <div>
                    <label htmlFor="body">Описание</label>
                    <textarea id="body" value={body} onChange={handleBodyChange} />
                </div>
                <button className="my-button" type="submit">Добавить</button>
                <button className="my-button" type="button" onClick={onClose}>
                    Отмена
                </button>
            </form>
        </Modal>
    );
};

export default AddPostModal;