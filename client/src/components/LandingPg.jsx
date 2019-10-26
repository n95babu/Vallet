import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import landingPG from '../assets/landingPG.png';


const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 150,
    height: 150,
  },
});

const LandingPg = (props) => {
  const classes = useStyles();
  return (
    <div className="page landingpg">
      <div>
        <h1 className="Total_cap">TotalMarketCap: ${Math.round(props.totalMarketCap)}</h1>
      </div>
      <h1>A connected Wallet for a conected World.</h1>
      <Grid container justify="center" alignItems="center">
        <Avatar alt="Remy Sharp" src={landingPG} className={classes.bigAvatar} />
      </Grid>
    </div>
  )
}

export default LandingPg;