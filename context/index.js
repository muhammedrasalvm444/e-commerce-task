const { createContext, useContext, useState, useMemo } = require("react");

const AppContext = createContext()
export function AppWrapper({ children }) {
    const [first, setfirst] = useState("hellp")
    const contextValue = useMemo(
        () => ({
            first, setfirst
        }),
        [
            first, setfirst
        
        ]
      );
    return(
      <AppContext.Provider value={{ ...contextValue }}>
      {children}
    </AppContext.Provider>
    )
}
export function useAppContext() {
    return useContext(AppContext);
  }