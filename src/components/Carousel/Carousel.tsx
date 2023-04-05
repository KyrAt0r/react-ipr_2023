import React, {useState} from "react";

interface CarouselProps {
    images: string[];
}

function Carousel({ images }: CarouselProps) {
    const [index, setIndex] = useState(0);

    const nextImage = () => {
        setIndex((index + 1) % images.length);
    };

    const prevImage = () => {
        setIndex((index - 1 + images.length) % images.length);
    };

    return (
        <div>
            <img src={images[index]} alt="carousel" width={160} height={160} />
            <button
                className="user-info__login-button my-button"
                onClick={prevImage}>
                Назад
            </button>
            <button
                className="user-info__login-button my-button"
                onClick={nextImage}>
                Вперед
            </button>
        </div>
    );
}

export default Carousel;