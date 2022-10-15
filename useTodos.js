import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const initialState = [];

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
};

export const useTodos = () => {

    const [ todos, dispatchTodo = {} ] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ) || "");
    }, [todos])
    
    //  console.log( { todos } );
    const handleNewTodo = ( todo ) => {

        if ( todos.filter( s=>s.description === todo.description ).length > 0 ) return;

        const actionAdd = {
            type: 'ADD',
            payload: todo
        }

        dispatchTodo(actionAdd);
        //  console.log( { todos } );
    }

    const handleDeleteTodo = ( id ) => {
        dispatchTodo({
            type: 'REMOVE',
            payload: id
        })
    }

    const handleToggleTodo = ( id ) => {
        dispatchTodo({
            type: 'TOGGLE',
            payload: id
        })
    }

    const todosCount = todos.length;
    const pendingTodosCount = todos.filter( todo => !todo.done ).length;

    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}
