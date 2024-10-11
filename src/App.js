import React from "react";
import Api from "./Components/Pixaba";
import FrontPage from "./Components/FrontPage";
import Register from "./pages/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./Components/Form";
let App=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<FrontPage/>}></Route>
        <Route path="/home" element={<Api/>}></Route>
        <Route path="/register" element={< Register/>}></Route>
        <Route path="/login" element={<User/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default App