import React from 'react';
import {useNavigate} from "react-router";
import MyButton from "../components/UI/button/MyButton";

const Error = () => {
    const navigation = useNavigate();
    return (
        <div>
            <h1 style={{color: 'red'}}>No such page <br/> or &nbsp;
                <MyButton onClick={() => navigation(`/login`)}>
                    Login first
                </MyButton>
            </h1>

        </div>
    );
};

export default Error;