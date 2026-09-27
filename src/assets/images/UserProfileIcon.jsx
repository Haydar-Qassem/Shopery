import React from 'react';

const UserProfileIcon = ({ size = 100, color = '#2E1A1A', ...props }) => {
  return (
    <svg
      xmlns="http://w3.org"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      {...props}
    >
      {/* Circle Head */}
      <circle 
        cx="50" 
        calcy="30" /* Adjusted slightly higher up to match the floating spacing */
        cy="31" 
        r="17" 
        stroke={color} 
        strokeWidth="6" 
      />
      {/* Oval Pill-Shaped Body */}
      <rect
        x="20"
        y="58"
        width="60"
        height="30"
        rx="15" /* Handles the soft edge rounding */
        stroke={color}
        strokeWidth="6"
      />
    </svg>
  );
};

export default UserProfileIcon;
