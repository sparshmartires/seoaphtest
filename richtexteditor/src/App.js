// src/App.js
import React from 'react';
import RichTextEditor from './components/RichTextEditor';

function App() {
  return (
    <div className="App">
      <header style={{ textAlign: 'center', margin: '20px' }}>
        <h1>Rich Text Editor</h1>
      </header>
      <main style={{ maxWidth: '800px', margin: 'auto' }}>
        <RichTextEditor />
      </main>
    </div>
  );
}

export default App;
