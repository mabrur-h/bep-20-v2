import { createContext, useState } from "react";

export const ModlaContext = createContext();

function ModalContextProvider({children}) {
    const [state, setState] = useState(false)

    return (
        <ModlaContext.Provider value={{state, setState}}>
            {children}
        </ModlaContext.Provider>
    )
}

export default ModalContextProvider