//Podemos enviar en el payload el objeto entro o el id

//{ type: 'REMOVE', payload: id }

export const todoReducer = ( initialState = [], action ) => {

    switch ( action.type ) {
        case 'ADD':
            return [...initialState, action.payload ];        
        case 'REMOVE':
            return initialState.filter( todo => todo.id !== action.payload );    
        case 'TOGGLE':
            return initialState.map( todo => {
                if( todo.id === action.payload ){ //id
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            })
        case 'ABC':
            throw new Error('Action.type = Add no esta implementada');    
        default:
            return initialState;
    }
}