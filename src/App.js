import React from 'react';
import Dashboard from './components/Dashboard';
import DashboardBody from './components/DashboardBody';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Financial Dashboard</h1>
            </header>
            <Dashboard />
            <DashboardBody/>
        </div>
    );
}

export default App;
