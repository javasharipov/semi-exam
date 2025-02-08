import { useReducer, useContext, createContext } from "react";


const Context = createContext();

export const ContextProvider = ({ children, reducer, initialState }) => {
    const value = useReducer(reducer, initialState);
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
}



export const useGlobalContext = () => useContext(Context)