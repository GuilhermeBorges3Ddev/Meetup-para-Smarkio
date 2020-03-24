import React, { Component } from 'react';

import { connect } from 'react-redux';
import Post from './Post';

class AllPost extends Component {
    render() {
        return (
            <div>
                <h1>Veja todas as sugestões feitas para a Smarkio:</h1>
                {this.props.posts.map((post) => <Post key={post.id} post={post} />)}
            </div>
        );
    }
}

//Usando mais um benefício do redux-connect, que é acessar estados do modificador
const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(AllPost);