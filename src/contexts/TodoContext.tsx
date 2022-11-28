import React, { createContext } from 'react';
import { Todo } from '../models/Todo';
import { TodoContextType } from './TodoContextType';

export const TodoContext = createContext<TodoContextType>({     //createContext é um hook 
   todos: [],      
   addTodo: () => {},
   removeTodo: () => {},
   toggle: () => {},
});

const TodoProvider = (props:any) => {
   
   const todos:Todo[] = [
      {id:1, title: 'Comprar frutas', done: true},
      {id:2, title: 'Cancelar telefone', done: false}
   ];

   const addTodo=(title:string) => {
      console.log('Adicionou ' + title);
   }

   const removeTodo=(todo:Todo) => {
      console.log('Removeu ' + todo.title)
   }

   const toggle=(todo:Todo) => {
      console.log('Alterou ' + todo.title)
   }

   return (
      <TodoContext.Provider value={{todos, addTodo, removeTodo, toggle}}>
         {props.children}     
      </TodoContext.Provider>       //tudo que colocar no value fica disponível para os children, value é um objeto
   );
}

export default TodoProvider;