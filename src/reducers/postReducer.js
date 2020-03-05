//Nessa arrow temos a constante que espera um array de actions para disparar os estados
const postReducer = (state = [], action) => {
    switch(action) {
        case 'ADD_POST':
            return state.concat([action.data]);
        default:
            return state;
    }
}

export default postReducer;