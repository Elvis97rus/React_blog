import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }
    return (
        <div className="navbar">
            {isAuth
                ?<MyButton onClick={logout}>Logout</MyButton>
                :<MyButton><Link to="/login">Login</Link></MyButton>
            }
            <div className="navbar__links">
                <MyButton><Link to="/">Home</Link></MyButton>
                <MyButton><Link to="/about">About</Link></MyButton>
                <MyButton><Link to="/posts">Posts</Link></MyButton>
            </div>
        </div>
    );
};

export default Navbar;