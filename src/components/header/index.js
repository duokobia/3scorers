import React from 'react'

const Header = () => {
  return (
    <header className="app-header">
      <div className="app-header-sub">
        <div className="app-header-sub-logo">
          <span>logo</span>
          <span>logo</span>
          <span>logo</span>
          <span>logo</span>
          <span>logo</span>
          <span>logo</span>
          <span>logo</span>
          <span>logo</span>
          <span>logo</span>
          <span>logo</span>
          <span>logo</span>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Login</a>
            </li>
            <li>
              <a href="/">Signup</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="app-header-main">
        <h2 className="app-header-main-logo">3Scorers</h2>
        <nav>
          <ul>
            <li>
              <a href="/">Premier League</a>
            </li>
            <li>
              <a href="/">Premier League</a>
            </li>
            <li>
              <a href="/">Premier League</a>
            </li>
            <li>
              <a href="/">Premier League</a>
            </li>
          </ul>
        </nav>
        <span>Series</span>
      </div>
    </header>
  );
}

export default Header