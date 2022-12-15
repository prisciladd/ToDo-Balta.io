import React from 'react';
/* import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';   switch não existe mais substitua por Routes*/
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'; 
import TodoContext from '../contexts/TodoContext';
import AddTodo from './AddTodo';
import Navbar from './Navbar';
import TodoList from './TodoList';

const App = () => {
    return (
        <TodoContext>
            <Router>
                <Navbar></Navbar>
                <br/>
                
            <div className="uk-container">
                <Routes>
                    <Route path="/create" element={<AddTodo/>}>
                        {/* Se a rota for /create renderiza o componente AddTodo */}
                        {/* <AddTodo></AddTodo> */}
                    </Route>
                    <Route path="/" element={<TodoList/>}>
                        {/* Rota mais genérica sempre por último */}    
                        {/* <h4>Minha lista de tarefas</h4> */}
                    {/* <TodoList></TodoList> */}
                    </Route>
                </Routes>
            </div>
            </Router>
        </TodoContext>
    );
}

export default App;