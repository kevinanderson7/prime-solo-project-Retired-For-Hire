import React from 'react';
import { connect } from 'react-redux';
//MaterialUI
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const LogOutButton = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        size="medium"
        // This button shows up in multiple locations and is styled differently
        // because it's styled differently depending on where it is used, the className
        // is passed to it from it's parents through React props
        className={props.className}
        onClick={() => props.dispatch({ type: 'LOGOUT' })}
      >
        Log Out
      </Button>
    </div>
  );
};

// This component doesn't need 'mapStateToProps'
// because it doesn't care what the current state is.
// No matter what the redux state is, this button will always be a log out button
// this component still needs 'connect' though, because it is going to dispatch a redux action
export default connect()(LogOutButton);
