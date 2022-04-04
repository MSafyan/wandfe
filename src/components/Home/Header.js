import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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

// import icon from '/image2vector.svg'
import { NavLink } from 'react-router-dom'

const pages = ['Become a cleaner', 'Services', 'Products', 'FAQ'];

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor:theme.palette.primary.light,
    padding:'3rem'
  },
  navBtn:{
    fontSize:'1.5rem',
    color:theme.palette.primary.lightDark,
    paddingRight:'2rem'
  },
  logo:{
    width:theme.spacing(18),
    display:'flex',
    // padding:theme.spacing(3),
    paddingBottom:'1.2vw'
  },
}))

const ResponsiveAppBar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
  const classes = useStyles();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar className={classes.appbar} position="static" sx={{boxShadow:'none',color:'black'}}>
      <Container component="main" maxWidth="xl">
        <Toolbar disableGutters>
        <NavLink to="/" style={{textDecoration:'none'}}>
        <div className={classes.logo}>
            <img alt='' src='wandbluefav.png' width='45px' style={{paddingRight:'4px'}} />
            <img alt='' src='wordcyan.png' width='110px' />
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
              <MenuIcon />
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
                    <Typography style={{color:"black"}} textAlign="center">{page}</Typography>
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
                  style={{color:'black'}}
                  onClick={handleCloseNavMenu}
                  className={classes.navBtn}
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