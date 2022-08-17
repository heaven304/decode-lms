import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddnewStudent from "../../pages/add-new-student";
import AddStudent from "../../pages/add-student";
import Dashboard from "../../pages/dashboard";

export default function RouterContainer() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/add-student" element={<AddStudent />} />
                    <Route path="/add-new-student" element={<AddnewStudent />} />
                </Routes>
            </Router>
        </>
    );
}
