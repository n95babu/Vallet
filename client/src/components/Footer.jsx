import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';




const Footer = () => {
  return (
    <div >
      <BottomNavigation className="Footer"
        showLabels
      >
        <BottomNavigationAction label="&copy; Vallet" />
      </BottomNavigation>
    </div>
  );
}


export default Footer;