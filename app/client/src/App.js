//NOTE/: external
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

//NOTE/: internal
import { useRoutes } from "./routes";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";

function App() {
    const { token, login, logout, userId } = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);

    return (
        <AuthContext.Provider
            value={{
                token,
                login,
                logout,
                userId,
                isAuthenticated,
            }}
        >
            <Router>
                <section className='wrapper'>{routes}</section>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
