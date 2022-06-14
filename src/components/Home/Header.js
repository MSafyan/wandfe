import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx'
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  AppBar,
  Button,
  MenuItem,
  Container
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { NavLink } from 'react-router-dom'

const pages = ['Become a cleaner', 'Services', 'Products', 'FAQ'];

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor:theme.palette.primary.light,
    padding:'2vw',
    boxShadow:'0px 0px white',
    [theme.breakpoints.down('sm')]: {
      padding:'0.3rem',
    }
  },
  navBtn:{
    fontSize:'1.2vw',
    color:theme.palette.primary.lightDark,
    paddingRight:'1.8vw'
  },
  logo:{
    width:theme.spacing(18),
    display:'flex',
    paddingBottom:'1.2vw',
    [theme.breakpoints.down('sm')]: {
      width:'14vw',
    },
    [theme.breakpoints.down('xs')]: {
      width:'20vw',
    }
  },
  icon:{
    width:'3vw',
    height:'3vw',
    [theme.breakpoints.down('xs')]: {
      width:'5vw',
      height:'5vw'
    }
  },
  pricingPage:{
    background:'white',
  },
  navText:{
    color:theme.palette.primary.lightDark
  }
}))

const ResponsiveAppBar = ({history}) => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const classes = useStyles();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar className={clsx(classes.appbar,history.location.pathname==='/pricing' && classes.pricingPage)} position="static" sx={{boxShadow:'none',color:'black'}}>
      <Container component="main" maxWidth="xl">
        <Toolbar disableGutters>
        <NavLink to="/" style={{textDecoration:'none'}}>
        <div className={classes.logo}>
            <img alt='' src='http://app.wandcleaning.pro/wandBluefav.png' width={'30%'} style={{paddingRight:'4px'}} />
            <img alt='' src='wordcyan.png' width={'70%'} />
          </div>
        </NavLink>

          <Box sx={{ flexGrow: 1, justifyContent:'right' ,display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon className={classes.icon}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                  <NavLink to="/pricing" variant="body2" style={{textDecoration:'none'}}>
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography className={classes.navText} textAlign="center">{page}</Typography>
                    </MenuItem>
                  </NavLink>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent:'right' }} >
            {pages.map((page) => (
              <NavLink to="/pricing" variant="body2" style={{textDecoration:'none'}}>
                <Button
                  key={page}
                  className={clsx(classes.navBtn)}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2,mx:3, display: 'block' }}
                >
                  {page}
                </Button>
              </NavLink>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;