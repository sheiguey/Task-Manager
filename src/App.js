import React,{useState}  from "react";
import Router from "./Routes/Router";
import './App.css';

function App() {
  const [isAuth, setIsAuth]= useState(false)

  function authentification(){
    setIsAuth(true)
  }

  return (
    <>
      <Router auth={isAuth} authentification={authentification}/>
    </>
  );
}

export default App;
