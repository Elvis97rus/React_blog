import React, {useContext} from 'react';
import CommonRouter from "../router/CommonRouter";
import PrivatRouter from "../router/PrivatRouter";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth,isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
        ? <PrivatRouter/>
        : <CommonRouter/>
    );
};

export default AppRouter;