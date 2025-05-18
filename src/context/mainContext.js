import { createContext, useContext } from "react";


export const mainContext = createContext();

export const MainContextProvider = mainContext.Provider;


export default function useMainContext(){
  return useContext(mainContext);
}