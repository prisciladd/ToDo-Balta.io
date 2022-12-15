import {Todo}  from "../models/Todo";


const TODO_STORE = 'todos'; //para não correr o risco de errar a chave do localStorage

export const get = (): Todo[] => {      //retorna lista de todos

    const data = localStorage.getItem(TODO_STORE) || " ";

    try {
        const result = JSON.parse(data) as Todo[];      //tenta converter em objeto, converte para data e depois lista
        return result;
    }
    catch {
        return [];
    };

}

export const save = (data:Todo[]) => {      //recebe a lista com o estado atual

    if(data?.length >= 1)
    localStorage.setItem(TODO_STORE, JSON.stringify(data));
}