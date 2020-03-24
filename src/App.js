import React from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';
import box from './image/box.png';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <h2 className="center">
          <img src={box} height="75px" width="75px" alt="Box logo" />
          Caixa de sugestões - SMK
          <img src={box} height="75px" width="75px" alt="Box logo" />
        </h2>
      </div>
      <PostForm />
      <AllPost />
    </div>
  );
}

export default App;
