import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    return (
        <div>
            <h1>Hello anh em</h1>
            <h2>Học react thôi !</h2>
        </div>
    );
}

// React 17
// ReactDOM.render(<App />, document.getElementById('root'));

// React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);