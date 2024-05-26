import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Layout from "./components/ui/Layout";
import Login from "./pages/Login";
import { Ragister } from "./pages/Ragister";

function App() {
  //1

  //2

  //3
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>}></Route>
          <Route path="login" element={<Login/>}></Route>
          <Route path="ragister" element={<Ragister/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;