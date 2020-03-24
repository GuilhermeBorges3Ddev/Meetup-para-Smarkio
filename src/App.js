import React from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <h2 className="center">Caixa de sugestões - SMK</h2>
      </div>
      <PostForm />
      <AllPost />
    </div>
  );
}

export default App;
