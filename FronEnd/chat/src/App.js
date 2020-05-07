//NOTE/: external
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

//NOTE/: internal
import { Auth } from "./pages";

function App() {
    return (
        <Router>
            <section className='wrapper'>
                <Auth />
            </section>
        </Router>
    );
}

export default App;
