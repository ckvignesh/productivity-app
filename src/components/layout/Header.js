import React from "react";

export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/test.jpg" alt="appLogo" />
        </div>
        <div className="settings">
          <ul>
            <li>Test 1</li>
            <li>Test 2</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
