import React, { Component } from 'react';

class PostForm extends Component {
    render() {
        return (
            <div>
                <h1>Poste a sua sugestão para a Smarkio:</h1>
                <form>
                    <input required type="text" placeholder="Digite um título para sua sugestão" /><br /><br />
                    <textarea required rows="5" cols="28" placeholder="Escreva sua sugestão" /><br /><br />
                    <button>Publicar</button>
                </form>
            </div>
        );
    }
}

export default PostForm;