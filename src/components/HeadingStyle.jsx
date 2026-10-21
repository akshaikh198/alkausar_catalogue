import React, { useState } from 'react';

function StylishHeading() {
  const [isHovered, setIsHovered] = useState(false);

  // Container styling to align items and detect hover
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1.5rem 0',
    cursor: 'pointer',
    width: 'fit-content',
    marginInline: 'auto', // Centers the container on the page
  };

  // Your original heading styles
  const headingStyle = {
    fontSize: '3rem',
    fontWeight: '800',
    background: 'linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'center',
    margin: 0, // Handled by container now
    paddingBottom: '8px',
  };

  // Smoothly animated underline style
  const underlineStyle = {
    width: '100%',
    height: '4px',
    background: 'linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)',
    borderRadius: '2px',
    transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
    transformOrigin: 'center',
    transition: 'transform 0.3s ease-out',
  };

  return (
    <div 
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 style={headingStyle}>AL Kausar</h1>
      <div style={underlineStyle} />
    </div>
  );
}

export default StylishHeading;
