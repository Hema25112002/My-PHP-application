import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React on AWS!</h1>
        <p>This React app will be deployed using AWS Elastic Beanstalk.</p>
        <p>Backend: Python (Flask) | Database: RDS | Config: Parameter Store</p>
      </header>
    </div>
  );
}

export default App;
