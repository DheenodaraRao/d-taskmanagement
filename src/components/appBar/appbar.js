import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import UserImage from '../../img/donn-gabriel-baleva-U-Z4P2H3KFE-unsplash.png';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    color: '#6D8187',
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'normal normal medium 16px/19px Montserrat',
    color: '#6D8187'
  },
  appbar: {
    backgroundColor: 'white'
  },
  logout:{
    fontFamily: 'normal normal medium 16px/19px Montserrat',
    color: '#6D8187',
    textAlign: 'right'
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static"
      style={{
        backgroundColor:"white"
      }}
      >
        <Toolbar>
          <IconButton edge="start" className={classes.menutton} color="inherit" aria-label="menu">
            <Avatar 
              className={classes.big}
              src={UserImage}
            />
          </IconButton>
          <Typography className={classes.title}>
            {props.name}
          </Typography>
          <Button className={classes.logout} color="inherit">Log Out</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}