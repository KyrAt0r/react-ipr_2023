import {IPost} from "./IPost";

export interface IConfirmDeleteModalProps {
    post: IPost;
    isOpen: boolean;
    onClose: () => void;
    onDelete: (id: number) => void;
}