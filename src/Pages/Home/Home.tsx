import React from 'react';
import './Home.css';
import Content from "../../components/Content/Content";

function Home() {
    return (
        <div className="home">
            {/*<h1 className="inWork">В разработке</h1>*/}
            <Content/>
        </div>
    );
}

export default Home;
