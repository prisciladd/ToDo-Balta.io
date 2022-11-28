import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { TodoContextType } from '../contexts/TodoContextType';
//import {Todo} from '../models/Todo';
import TodoListItem from './TodoListItem';

const TodoList = () => {
   // const todos: Todo[] = [];        //usando o models para tipar a variável
    
   const {todos} = useContext<TodoContextType>(TodoContext);        //{destruction} extraindo todos do context

    return(
        <table className="uk-table">
            <caption>Lista de Tarefas</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tarefa</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    todos?.map(
                    todo => (<TodoListItem key={todo.id} todo={todo}></TodoListItem>)       //{todo} é um objeto
                    )
                }
            </tbody>
        </table>
    );
}


export default TodoList;