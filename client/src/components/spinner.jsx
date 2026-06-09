import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Spinner = ({ path = "login" }) => {
    const [count, setCount] = useState(3);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((preValue) => --preValue);
        }, 1000);
        count === 0 &&
        navigate(`/${path}`, { state: location.pathname });
    }, [count, navigate, location, path]);
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <h1 className="text-center">Redirecting you in {count} seconds</h1>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;


// this is to check the pr close thing thats all 