import Modal from "react-modal";
import "./PostModal.css";

interface Post {
    id: number;
    title: string;
    body: string;
}

interface ViewPostModalProps {
    post: Post | null;
    isOpen: boolean;
    onClose: () => void;
}

function ViewPostModal({post, isOpen, onClose}: ViewPostModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="add-post-modal"
            ariaHideApp={false}
        >
            <div style={{display: isOpen ? "block" : "none"}}>
                <h2>{post?.title}</h2>
                <p>{post?.body}</p>
            </div>
            <button type="button" onClick={onClose}>
                Закрыть
            </button>
        </Modal>
    );
}

export default ViewPostModal;
