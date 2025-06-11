import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="#section1">Go to Section 1</Link></li>
        <li><Link to="#section2">Go to Section 2</Link></li>
      </ul>
    </nav>
  );
}

function HomePage() {
  return (
    <div>
      <section id="section1" style={{ height: '100vh' }}>
        <h2>Section 1</h2>
        <p>Content of Section 1...</p>
      </section>
      <section id="section2" style={{ height: '100vh' }}>
        <h2>Section 2</h2>
        <p>Content of Section 2...</p>
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
