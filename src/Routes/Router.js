import React from "react";
import { Route,Routes } from "react-router";
import Home from "../pages/Home";
import TaskDetail from "../components/Tasks/TaskDetail";
import Login from "../pages/Login";
import PrivateRoutes from "./PrivateRoutes";


const Router = ({ auth, authentification }) => {
  return (
    <Routes>
      <Route element={<PrivateRoutes auth={auth} />}>
        <Route path="/Home" element={<Home />} />
        <Route path="task/:id" element={<TaskDetail />} />
      </Route>
      <Route path="/" element={<Login authentification={authentification} />} />

    </Routes>
  )
}

export default Router;