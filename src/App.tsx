import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

      <Outlet />
    </header>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link className="App-link" to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link className="App-link" to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;
