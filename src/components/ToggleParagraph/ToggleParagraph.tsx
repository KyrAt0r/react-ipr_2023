import React, {useState} from "react";

interface ToggleParagraphProps {
    text: string;
}

function ToggleParagraph({ text }: ToggleParagraphProps) {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            {isVisible && <p>{text}</p>}
            <button
                className="user-info__login-button my-button"
                onClick={toggleVisibility}>
                {isVisible ? 'Скрыть' : 'Показать'}
            </button>
        </div>
    );
}

export default ToggleParagraph