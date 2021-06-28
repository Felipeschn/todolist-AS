/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import '../css/Dashboard.css';
import Header from '../components/Header.jsx'

export const Dashboard = () => {
    return (
        <>
            <Header />
            <div className="dashboard">
                <iframe
                    width="800"
                    height="500"
                    src="https://app.powerbi.com/view?r=eyJrIjoiNTViMGI4MmItZjQ4NC00MjExLWJlNzctYjRiMzkwNWMzNmNhIiwidCI6ImVjYTU0MTY5LTc0ZGYtNDIwZS1iNTViLWI2ODNlNjJlYTI5ZCJ9&pageName=ReportSection"
                    frameborder="0"
                    allowFullScreen="true">
                </iframe>
            </div>
        </>
    );
}