import React, {useContext} from 'react';
import { TodoContext } from '../contexts/TodoContext';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TodoContextType } from '../contexts/TodoContextType';

const schema = yup.object().shape({
    title: yup.string().required('Tarefa inválida'),
}).required();     //usando yup para validação, se titulo não for fornecido exibe Tarefa inválida

/* interface AddTodoForm {
    title: string;
}; */

type AddTodoForm ={
    title: string;
};

const AddTodo = () => {
    const {addTodo} = useContext<TodoContextType>(TodoContext);

    /* const {register, handleSubmit, errors} = useForm({       */
    const {register, handleSubmit, formState: {errors}} = useForm<AddTodoForm>({      
        resolver: yupResolver(schema), //resolver usa schema para validação
    });

    const onSubmit = (data: AddTodoForm, e: any) => { 
        addTodo(data.title);
        e.target.reset();       //limpar form
        window.location.href = '/';     //voltar para a tela inicial
    }

    return( //form chama o método handleSubmit do tipo AddTodoForm e onsubmit método que vai executar se validação passar
    
        <form onSubmit={handleSubmit(onSubmit)}> 
            <h4>Nova tarefa</h4>    
            <div className='uk-margin uk-width-1-1'> 
            {/* name do input tem que ser o mesmo do AddTodoForm */}

                {/* <input type="text" name="title" id="title" placeholder="Nova tarefa..." className="uk-input" ref={register} /> */}
                <input name="title" type="text" id="title" placeholder="Nova tarefa..." className="uk-input" 
                {...register} />
                {/* se houver erro exibe na tela */}
                {/* <span><small><strong className="uk-text-danger">{errors.title?.message}
                    </strong></small></span> */}
                {errors.title && errors.title.type === "required" && (
                    <div className="error"> Você precisa escrever uma nova tarefa</div>
                )}
            </div>
            <div className="uk-width-1-1">
                <button type="submit" className="uk-button uk-button-primary">Salvar</button>
            </div>
        </form>
    );
}

export default AddTodo;