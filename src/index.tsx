import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


const element = (
    <div>
        <h1 className={'hello-text'}>Hello, world!</h1>
        <h2>It is {new Date().getDate()}.</h2>
    </div>
);


root.render(element);



// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

