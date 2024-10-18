
import React ,{createContext, useContext, useState} from "react";
import './../styles/App.css';
import Auth from "./Auth";


export const AuthContext=createContext();
const App = () => {
  const [isAuthenticated,setIsAuthenticated]=useState(false);
  return (
    <AuthContext.Provider value={{isAuthenticated ,setIsAuthenticated}}>
    <div>
        {/* Do not remove the main div */}
        <h1>
          Click on the checkbox to get authenticated
        </h1>
        <p id="authText">{isAuthenticated?'You are now authenticated,you can proceed':'you are not authenticated'}</p>
        <Auth/>
    </div>
    </AuthContext.Provider>
  )
}

export default App
