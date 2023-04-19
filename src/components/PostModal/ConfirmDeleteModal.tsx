import Modal from "react-modal";
import React from "react";
import "./PostModal.css";
import {IConfirmDeleteModalProps} from "../../interface/IConfirmDeleteModalProps";

function ConfirmDeleteModal({ post, isOpen, onClose, onDelete }: IConfirmDeleteModalProps) {
    const onDeletePost = () => {
        onDelete(post.id);
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