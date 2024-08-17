import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleLogout = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/auth/logout', {
                    method: 'POST',
                    credentials: 'include',  // Ensure cookies are sent with the request
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log(data.message);  // Logout successful
                    localStorage.removeItem('Token');  // Properly remove the token
                    navigate('/login-page');  // Redirect to login page or update UI accordingly
                } else {
                    console.error('Logout failed');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        handleLogout();
    }, [navigate]);

    return <div>Logging out...</div>; // Optionally show a message while logging out
};

export default LogoutPage;
