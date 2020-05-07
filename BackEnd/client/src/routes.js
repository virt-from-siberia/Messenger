//NOTE/: external
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
//NOTE/: internal
import { Home } from "./pages";
import { LoginForm } from "./modules";
import { RegisterForm } from "./modules";

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path='/home' exact>
                    <Home />
                </Route>
                <Redirect to='/home' />
            </Switch>
        );
    }

    return (
        <Switch>
            <Route path='/' exact>
                <LoginForm />
            </Route>
            <Route path='/register' exact>
                <RegisterForm />
            </Route>
            <Redirect to='/' />
        </Switch>
    );
};
