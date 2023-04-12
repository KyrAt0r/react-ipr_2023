import Modal from "react-modal";
import React, {useState} from "react";
import "./PostModal.css";
import {IPost} from "../../interface/IPost";

interface ConfirmDeleteModalProps {
    post: IPost;
    isOpen: boolean;
    onClose: () => void;
    onDelete: (id: number) => void;
}

function ConfirmDeleteModal({ post, isOpen, onClose, onDelete }: ConfirmDeleteModalProps) {
    const [id, setId] = useState(post.id);

    const onDeletePost = () => {
        onDelete(id);
        onClose();
    };

    return (
        <Modal
            className="add-post-modal"
            isOpen={isOpen}
            onRequestClose={onClose}
            ariaHideApp={false}
        >
            <h3>Вы действительно хотите удалить этот пост?</h3>
            <button className="my-button-warning" type="button" onClick={onDeletePost}>Удалить</button>
            <button className="my-button" type="button" onClick={onClose}>
                Отмена
            </button>
        </Modal>
    )
}

export default ConfirmDeleteModal;