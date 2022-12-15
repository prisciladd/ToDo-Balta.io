import React, { createContext, useEffect, useState } from 'react';
import { Todo } from '../models/Todo';
import { get, save } from '../services/TodoService';
import { TodoContextType } from './TodoContextType';

export const TodoContext = createContext<TodoContextType>({     //createContext é um hook 
   todos: [],      
   addTodo: () => {},
   removeTodo: () => {},
   toggle: () => {},
});

const TodoProvider = (props:any) => {
   
   const [todos, setTodos] = useState<Todo[]>(get);      //estado é sempre uma lista de Todo[], tipando. Sempre que usa o useState usamos 2 parametros, variavel que mantem o estado e método para alterá-lo
   
   useEffect(() => {    //useEffect é um hook, [todos] é qual objeto vai ficar observando quanquer mudança no objeto ele executa a função
      save(todos);
   },[todos]);


   /* const todos:Todo[] = [
      {id:1, title: 'Comprar frutas', done: true},
      {id:2, title: 'Cancelar telefone', done: false}
   ]; */

   const addTodo=(title:string) => {
      /* console.log('Adicionou ' + title); */

      const todo: Todo = {id: todos.length + 1, title: title, done: false}    //id dos todos do useState
      setTodos([...todos, todo]);      //estado é imutável só reage (React) a mudanças, não altera o estado diretamente, ...é spred operator abre a lista de todos e inclui o todo nela
      /* save(todos); */
   }

   const removeTodo=(todo:Todo) => {
      /* console.log('Removeu ' + todo.title) */

      const index = todos.indexOf(todo);
      setTodos(todos.filter((_,i) => i !== index));      //filtrar tudo que o índice seja diferente do indice acima 
      /* save(todos); */
   }

   const toggle=(todo:Todo) => {
      /* console.log('Alterou ' + todo.title) */

      const index = todos.indexOf(todo);
      todos[index].done = !todo.done;     //se for true converte para false e vice versa
      setTodos([...todos]);
      /* save(todos); */
   }

   return (
      <TodoContext.Provider value={{todos, addTodo, removeTodo, toggle}}>
         {props.children}     
      </TodoContext.Provider>       //tudo que colocar no value fica disponível para os children, value é um objeto
   );
}

export default TodoProvider;