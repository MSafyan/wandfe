import React from 'react'
import clsx from 'clsx';
import {alpha, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import Popper from '@material-ui/core/Popper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Avatar,Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import EmailIcon from '@material-ui/icons/Email';
import Sidebar from './sidebar'

import { connect } from "react-redux";
import {LOGOUT} from '../../actions/authActions'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    display:'grid',
    gridTemplateColumns:"3fr 1fr 1fr 1fr",
    gridTemplateAreas:`"search messages next avatar"`,
    alignItems:'flex-start'
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow:'none',
    paddingTop:theme.spacing(3),
    background:theme.palette.primary.light,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    // background:theme.palette.backgroundSecondary.default,
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
      minHeight: '100vh',
      height:'100%',
      zIndex: '1202'
    }
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
    [theme.breakpoints.down('xs')]: {
      width: 0,
      display:'none',
    },
  },
  search: {
    gridArea:"search",
    display:'flex',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    fontWeight:'bold',
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      '&:focus': {
        width: '20ch',
      },
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    padding:'1rem'
  },
  hideCard:{
    [theme.breakpoints.down('xs')]: {
      display:"none !important"
    }
  },
  main:{
    padding:"1rem",
    width:"-webkit-fill-available",
    background:theme.palette.primary.light
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  logo:{
    margin:'auto',
    display:'flex',
    alignItems:"baseline",
    color:theme.palette.lightFill.main
  },
  lightFill:{
    color:theme.palette.lightFill.main
  },
  messagesWrapper:{
    gridArea:"messages",
    display:'flex',
    textAlign:'start'
  },
  nextWrapper:{
    gridArea:"next",
    display:'flex',
    textAlign:'start'
  },
  avatarWrapper:{
    gridArea:'avatar',
    display:'flex',
    textAlign:'start'
  },
  bold:{
    fontWeight:'bold'
  },
  icon:{
    marginRight:theme.spacing(0.5)
  },
  flex:{
    display:'flex',
    textAlign:'start'
  }
}));

const Index = ({LOGOUT,children}) => {
    const classes = useStyles();
    const [open] = React.useState(true);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
  
    const openPopper = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <>
      <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon className={classes.icon}/>
            </div>
            <InputBase
              placeholder="Search Anything…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.messagesWrapper}>
            <EmailIcon className={classes.icon}/>
            <div>
              <Typography variant='body2' className={classes.bold}>
                Your Messages
              </Typography>
            </div>
          </div>
          <div className={classes.nextWrapper}>
            <ChevronLeftIcon className={classes.icon}/>
            <div>
              <Typography variant='body2' className={classes.bold}>
                Next Cleaner Service
              </Typography>
              <Typography variant='body2'>
                23 march 2012
              </Typography>
            </div>
          </div>
          <div className={classes.avatarWrapper} onClick={handleClick}>
            <Avatar src='lady.jpg' className={classes.icon}/>
            <div>
              <Typography variant='body2' className={classes.bold}>
                Benjamin A
              </Typography>
              <Typography variant='body2'>
                x.y.z company
              </Typography>
            </div>
            <Popper id={id} open={openPopper} anchorEl={anchorEl}>
              <div className={classes.paper}>
                <Button variant='outlined' onClick={()=>LOGOUT()} >
                  LogOut
                </Button>
              </div>
            </Popper>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <Sidebar />
      </Drawer>
      <main className={classes.main}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth='xl' className={classes.container}>
          {children}
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
        </>
    )
}


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  {LOGOUT}
  )(Index);