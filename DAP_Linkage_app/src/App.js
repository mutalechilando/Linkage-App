import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import your components
import DAP from './components/DAPLink';
import BobReportGenerator from './components/BobReportGenerator';
import Home from './components/Home'; // New component for home page

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link> {/* Link to the home page */}
                        </li>
                        <li>
                            <Link to="/dap">DAP</Link>
                        </li>
                        <li>
                            <Link to="/bob-report">BOB Report</Link> {/* Updated link */}
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} /> {/* Route for the home page */}
                    <Route path="/dap" element={<DAP />} />
                    <Route path="/bob-report" element={<BobReportGenerator />} /> {/* Updated route */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;

