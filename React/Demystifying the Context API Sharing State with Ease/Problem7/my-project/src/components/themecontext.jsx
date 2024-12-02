import { createContext, useState } from "react";

export let Themecontext= createContext();

export let Themevalue=({children})=>{
    let [theme, settheme]=useState("light");
    function onclick(){
        settheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }
    return <Themecontext.Provider value={{theme,onclick}}>{children}</Themecontext.Provider>
}