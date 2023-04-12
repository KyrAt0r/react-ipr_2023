import React, {useState} from "react";
import Modal from "react-modal";
import "./PostModal.css";
import {IPost} from "../../interface/IPost"
interface EditPostModalProps {
    post: IPost;
    isOpen: boolean;
    onClose: () => void;
    onSave: (id: number, title: string, body: string) => void;
}


function EditPostModal({ post, isOpen, onClose, onSave }: EditPostModalProps) {
    const [id, setId] = useState(post.id);
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBody(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        onSave(id, title, body);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} className="add-post-modal" ariaHideApp={false}>
            <h2>Изменить пост</h2>
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
                <button className="my-button" type="submit">Сохранить</button>
                <button className="my-button" type="button" onClick={onClose}>
                    Отмена
                </button>
            </form>
        </Modal>
    );
}

export default EditPostModal;