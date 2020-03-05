import React, { Component } from 'react';

//Para obtermos o dispatch e o acessarmos usamos o connect para manter o componente ligado ao seu estado
import { connect } from 'react-redux';

class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message
        }
        console.log(data)
        //Acessando a action dentro do state usando os benefícios do connect
        this.props.dispatch({
            type: 'ADD_POST',
            data
        });
        this.getTitle.value = '';
        this.getMessage.value = '';
    }
    render() {
        return (
            <div>
                <h1>Poste a sua sugestão para a Smarkio:</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        required 
                        type="text"
                        ref={ (input) => this.getTitle = input} 
                        placeholder="Digite um título para sua sugestão" 
                    />
                    <br /><br />
                    <textarea 
                        required 
                        rows="5" 
                        cols="28"
                        ref={ (input) => this.getMessage = input} 
                        placeholder="Escreva sua sugestão" 
                    />
                    <br /><br />
                    <button>Publicar</button>
                </form>
            </div>
        );
    }
}

export default connect()(PostForm);