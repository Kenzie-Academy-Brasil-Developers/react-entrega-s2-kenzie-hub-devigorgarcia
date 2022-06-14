import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import { Login } from "../Pages/LoginPage";

import Register from "../Pages/RegisterPage";

export default function Routes() {
  const [isAuth, setIsAuth] = useState();

  useEffect(() => {
    const token = localStorage.getItem("@KenzieHub:token");

    if (token) {
      return setIsAuth(true);
    }
  }, [isAuth]);

  return (
    <Switch>
      <Route exact path="/">
        <Login setIsAuth={setIsAuth} isAuth={isAuth} />
      </Route>
      <Route path="/Register">
        <Register isAuth={isAuth} />
      </Route>
      <Route path={"/Dashbord/:id"}>
        <Dashboard isAuth={isAuth} setIsAuth={setIsAuth}/>
      </Route>
    </Switch>
  );
}
