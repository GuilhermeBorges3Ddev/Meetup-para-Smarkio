import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditComponent extends Component {
    handleEdit = (e) => {
      e.preventDefault();

      //Passando os novos valores de título e corpo para o estado do post
      const newTitle = this.getTitle.value;
      const newMessage = this.getMessage.value;
      const data = {
        newTitle,
        newMessage
      }
      
      this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data });
    }
    render() {
        return (
            <div key={this.props.post.id} className="post">
                <form className="form" onSubmit={this.handleEdit}>
                    <input required 
                        type="text" 
                        ref={(input) => this.getTitle = input}
                        defaultValue={this.props.post.title} 
                        placeholder="Entre com um novo título para o post:" 
                    />
                    <br /><br />
                    <textarea required 
                        rows="5" 
                        ref={(input) => this.getMessage = input}
                        defaultValue={this.props.post.message} 
                        cols="28" 
                        placeholder="Entre com as edições no corpo do post:" 
                    />
                    <br /><br />
                    <button>Atualizar Post</button>
                </form>
            </div>
        );
    }
}

export default connect()(EditComponent);
