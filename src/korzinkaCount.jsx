import { createContext } from "react";

import React from "react";
import { First } from "react-bootstrap/esm/PageItem";
const CountContext = createContext()
 const CountProvider = ({children})=>{

  const [first, setfirst] = React.useState(0)
  React.useEffect(() => {
    let korzinka = JSON.parse(localStorage.getItem("Products"))
    setfirst(korzinka?.length)
  }, [first])

   return <CountContext.Provider value={{first,setfirst}}>
    {children}
   </CountContext.Provider>
}
export {CountProvider,CountContext}