import {createContext, useContext} from "react";

const themeContext = createContext()

export function useUser(){
    return useContext(themeContext)
}

export default function ThemeProvider({children, theme}){
    return(
        <themeContext.Provider value={theme}>
            {children}
        </themeContext.Provider>
    )
}