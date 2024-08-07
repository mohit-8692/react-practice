import { createContext, useContext } from "react";

export const TodoContext = createContext({

})

export const todo = ()=>{
    return TodoContext(useContext);
}

export const TodoProvider = TodoContext.Provider;