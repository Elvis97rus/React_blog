import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Error from "../pages/Error";
import Login from "../pages/Login";

const PrivatRouter = () => {
    return (
        <Routes>
            <Route index element={"<Home />"} />
            <Route path="/about" element={<About />} />
            <Route exact path="/posts" element={<Posts />} />
            <Route exact path="/posts/:id" element={<PostIdPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error/>} />
        </Routes>
    );
};

export default PrivatRouter;