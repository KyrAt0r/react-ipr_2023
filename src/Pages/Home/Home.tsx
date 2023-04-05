import React from 'react';
import './Home.css';
import Content from "../../components/Content/Content";
import ToggleParagraph from "../../components/ToggleParagraph/ToggleParagraph";
import Carousel from "../../components/Carousel/Carousel";
import InputText from "../../components/InputText/InputText";
import DummyPosts from "../../components/DummyPosts/DummyPosts";

function Home() {
    const text: string = 'Этот текст отображается в параграфе';
    const images: string[] = [
        'https://via.placeholder.com/160x160?text=img+1',
        'https://via.placeholder.com/160x160?text=img+2',
        'https://via.placeholder.com/160x160?text=img+4',
    ]

    return (
        <div className="home">
            <div className="left-column">
                <Content/>
                <ToggleParagraph text={text} />
                <Carousel images={images} />
                <InputText min={3} max={10} />
            </div>
            <div className="right-column">
                <DummyPosts/>
            </div>
        </div>
    );
}

export default Home;
