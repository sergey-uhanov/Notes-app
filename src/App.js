import React from "react";
import '../src/styles/AppStyle.css'
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import Error from "./pages/Error";
import AppRouter from "./components/UI/AppRouter";



function App() {
return (
    <div>
<BrowserRouter>
<Navbar/>
<AppRouter/>
</BrowserRouter>
    </div>
    )

}

export default App;
