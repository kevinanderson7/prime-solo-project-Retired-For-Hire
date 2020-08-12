import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';

//MaterialUI
import {
  Typography,
  Paper,
  Grid,
  Container,
  Card,
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Box,
  // Modal,
  // Backdrop,
  // Fade,
  makeStyles,
} from '@material-ui/core';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 300,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    border: '2px solid #000',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(60),
      textAlign: 'center',
      height: theme.spacing(5),
      padding: theme.spacing(2, 4, 3),
      justifyConent: 'center',
      alignItems: 'center',
    },
  },
}));

const UserPage = (props) => {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const handleHireClick = () => {
    props.history.push('/listings');
  };

  return (
    <Box m={3}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Typography gutterBottom component="h1" variant="h3" id="welcome">
            Welcome, {props.store.user.first_name}!
          </Typography>
        </Grid>
        <Grid item>
          <Typography gutterBottom variant="h6" component="p">
            Your ID is: {props.store.user.id}
          </Typography>
        </Grid>
        <Grid>
          <LogOutButton className="log-in" />
        </Grid>
      </Grid>
      <Box mt={4}>
        <Grid container justify="center" alignItems="center">
          <Grid item>
            <div className={classes.root}>
              <Paper elevation={3}>
                <Typography component="h2" variant="h4">
                  What would you like to do?
                </Typography>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Grid container justify="space-evenly">
        <Grid item xs={5}>
          <Box mt={4}>
            <Card elevation={3}>
              <CardActionArea>
                <CardMedia
                  title="image of now hiring sign"
                  component="img"
                  src="/images/looking-to-hire.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Looking to Hire?
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin commodo sapien dolor, in vehicula orci ullamcorper
                    sed. Aenean tincidunt euismod massa, nec convallis massa
                    sollicitudin a. Proin quis erat interdum sapien ornare
                    euismod. Aenean luctus metus elit. Duis auctor arcu ac ante
                    rutrum ultrices. Mauris ac facilisis ant
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button onClick={handleHireClick} size="small" color="primary">
                  Learn More
                </Button>
                {/* <Modal
                  className={classes.modal}
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open}>
                    <div className={classes.paper}>
                      <Typography
                        component="h2"
                        variant="h4"
                        id="transition-modal-title"
                      >
                        Hiring Details
                      </Typography>
                      <Typography
                        component="p"
                        variant="body1"
                        id="transition-modal-description"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin commodo sapien dolor, in vehicula orci ullamcorper
                        sed. Aenean tincidunt euismod massa, nec convallis massa
                        sollicitudin a. Proin quis erat interdum sapien ornare
                        euismod. Aenean luctus metus elit. Duis auctor arcu ac
                        ante rutrum ultrices. Mauris ac facilisis ant
                      </Typography>
                      <Button variant="contained" color="primary">
                        Let's Go!
                      </Button>
                    </div>
                  </Fade>
                </Modal> */}
              </CardActions>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box mt={4}>
            <Card elevation={3}>
              <CardActionArea>
                <CardMedia
                  title="retired individual"
                  component="img"
                  src="/images/retired-image.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Or Retired?
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin commodo sapien dolor, in vehicula orci ullamcorper
                    sed. Aenean tincidunt euismod massa, nec convallis massa
                    sollicitudin a. Proin quis erat interdum sapien ornare
                    euismod. Aenean luctus metus elit. Duis auctor arcu ac ante
                    rutrum ultrices. Mauris ac facilisis ant
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
                {/* <Modal
                  className={classes.modal}
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open}>
                    <div className={classes.paper}>
                      <Typography
                        component="h2"
                        variant="h4"
                        id="transition-modal-title"
                      >
                        Retired Details
                      </Typography>
                      <Typography
                        component="p"
                        variant="body1"
                        id="transition-modal-description"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin commodo sapien dolor, in vehicula orci ullamcorper
                        sed. Aenean tincidunt euismod massa, nec convallis massa
                        sollicitudin a. Proin quis erat interdum sapien ornare
                        euismod. Aenean luctus metus elit. Duis auctor arcu ac
                        ante rutrum ultrices. Mauris ac facilisis ant
                      </Typography>
                      <Button variant="contained" color="primary">
                        Let's Go!
                      </Button>
                    </div>
                  </Fade>
                </Modal> */}
              </CardActions>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(withRouter(UserPage));
