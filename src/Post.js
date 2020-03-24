import React, { Component } from 'react';

class Post extends Component {
  render() {
  return (
    <div>
      <h2>{this.props.post.title}</h2>
      <p>{this.props.post.message}</p>
      <button>Editar postagem</button>
      <button
        onClick={() => this.props.dispatch({
            type: 'DELETE_POST',
            id: this.props.post.id
        })}
      >
        Deletar postagem
      </button>
    </div>
  );
 }
}
export default Post;