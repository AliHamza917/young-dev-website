import React from 'react';
import UserCounterDisplay from "./components/userCounterDisplay";
import BlogSection from "./components/BlogSection";

const DashboardPage = () => {
    return (
        <>

            <UserCounterDisplay/>
            <BlogSection/>

        </>
    );
};

export default DashboardPage;