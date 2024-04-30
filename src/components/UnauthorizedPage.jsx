// UnauthorizedPage.js

import React from 'react';
import './UnauthorizedPage.css'; // Import CSS file for styling

const UnauthorizedPage = () => {
  return (
    <div className="unauthorized-container">
      <h1>401 Unauthorized</h1>
      <p>You are not authorized to access this page.</p>
      <p>Please login with appropriate credentials.</p>
    </div>
  );
}

export default UnauthorizedPage;
