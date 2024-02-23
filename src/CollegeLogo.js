import React from 'react';

const CollegeLogo = () => {
  const handleLogoClick = (event) => {
    event.stopPropagation(); // Prevents the click event from bubbling up to the parent div
    
  };

  return (
    <div className="college-logo">
      <a href="https://velammal.edu.in/" target="_blank" rel="noopener noreferrer">
        {/* Replace <CollegeLogoImage> with the actual college logo image component */}
        <img
          src={require('./download (1) (1).png')}
          alt="College Logo"
          onClick={handleLogoClick} // Click event only triggers when clicking on the logo image
          style={{ cursor: 'pointer' }}
        />
      </a>
    </div>
  );
};

export default CollegeLogo;
