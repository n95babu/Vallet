import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


const useStyles = makeStyles({
  root: {

  },
});

const Footer = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div >
      <BottomNavigation className="Footer"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >

        <BottomNavigationAction label="&copy; Vallet" />
      </BottomNavigation>
    </div>
  );
}


export default Footer;