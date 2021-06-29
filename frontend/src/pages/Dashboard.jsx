/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import '../css/Dashboard.css';
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx';

export const Dashboard = () => {
    return (
        <>
            <Header />
            <div className="dashboard">
                <iframe width="100%" height="600px" src="https://app.powerbi.com/view?r=eyJrIjoiN2Y1ZWQ3OTgtNDQ5Yy00YjUyLTgxMWMtNGFlZjkzMzQ1OTA5IiwidCI6ImVjYTU0MTY5LTc0ZGYtNDIwZS1iNTViLWI2ODNlNjJlYTI5ZCJ9" frameborder="0" allowFullScreen="true"></iframe>
            </div>
            <Footer />
        </>
    );
}