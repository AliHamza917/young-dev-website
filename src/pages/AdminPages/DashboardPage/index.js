import React, {useEffect} from 'react';
import UserCounterDisplay from "./components/userCounterDisplay";
import BlogSection from "./components/BlogSection";
import {toast, ToastContainer} from "react-toastify";
import {useLocation, useNavigate} from "react-router-dom";

const DashboardPage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state && location.state.message) {
            toast.success(location.state.message);
            navigate(location.pathname, { replace: true });
        }
    }, [location.state , navigate]);


    return (
        <>
            <ToastContainer />

            <UserCounterDisplay/>
            <BlogSection/>

        </>
    );
};

export default DashboardPage;