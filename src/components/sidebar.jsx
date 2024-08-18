import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">Nexus</div>
            <div className="sidebar-section">
                <div className="sidebar-title">General</div>
                <div className="sidebar-item">Inbox</div>
                <div className="sidebar-item">Draft</div>
            </div>
            <div className="sidebar-section">
                <div className="sidebar-title">Teams</div>
                <div className="sidebar-item">UI/UX Teams</div>
                <div className="sidebar-item">Research Gang</div>
                <div className="sidebar-item">Talks Project</div>
                <div className="sidebar-item">Create New Team</div>
            </div>
            <div className="sidebar-section">
                <div className="sidebar-title">Channel</div>
                <div className="sidebar-item">Mobile Designer</div>
                <div className="sidebar-item">Front-End Community</div>
                <div className="sidebar-item">UI/UX Community</div>
                <div className="sidebar-item">Web Designer</div>
                <div className="sidebar-item">Make a Channel</div>
            </div>
            <div className="sidebar-section">
                <div className="sidebar-title">Integrations</div>
                <div className="sidebar-item">Google Calendar</div>
                <div className="sidebar-item">Zoom Meetings</div>
                <div className="sidebar-item">Add another Integrations</div>
            </div>
        </div>
    );
};

export default Sidebar;
