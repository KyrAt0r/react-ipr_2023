import {IPost} from "./IPost";

export interface IEditPostModalProps {
    post: IPost;
    isOpen: boolean;
    onClose: () => void;
    onSave: (id: number, title: string, body: string) => void;
}
