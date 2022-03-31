import React from 'react'
import {Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  HomeOutlined,
  Schedule,
  PersonOutlined,
  LocalLaundryServiceOutlined,
  MonetizationOnOutlined,
  LibraryBooksOutlined,
  AssessmentOutlined,
  ArrowRightAltOutlined
} from '@material-ui/icons';
import { NavLink } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  sidebar:{
    padding:theme.spacing(2),
    textAlign:'left',
    width:'240px'

  },
  scrollable:{
    position:'fixed',
    height:'80vh',
    overflowY:"auto",
    width:'240px',
    overflow:"hidden"
  },
  category:{
    marginBottom:theme.spacing(4)
  },
  catHeading:{
    fontWeight:'bold'
  },
  navText:{
    paddingLeft:theme.spacing(1),
    // color:theme.palette.fontPrimary.main
  },
  navLink:{
    color:'black',
    textDecoration:'none',
    display:'flex',
    alignItems:'center',
    margin:`${theme.spacing(3)}px 0px`
  },
  support:{
    position:'fixed',
    bottom:theme.spacing(1),
    background:theme.palette.primary.dark,
    color:'white',
    padding:theme.spacing(1),
    borderRadius:theme.spacing(1),
  },
  flex:{
    display:'flex',
    paddingBottom:theme.spacing(1)
  },
  arrow:{
    fill:'white'
  },
  font:{
    color:'white'
  }
}))


export const links =[
  {
    heading:'Workspace',
    navs:[
      {
        icon:<HomeOutlined/>,
        link:'/dashboard',
        text:'Dashboard'
      },
      {
        icon:<Schedule/>,
        link:'/orders',
        text:'Scheduling'
      },
    ]
  },
  {
    heading:'PERSONAL',
    navs:[
      {
        icon:<PersonOutlined/>,
        link:'/newcustomer',
        text:'Contacts'
      },
      {
        icon:<LocalLaundryServiceOutlined/>,
        link:'/companyInfo',
        text:'Company'
      },
    ]
  },
  {
    heading:'STATS AND PAYMENTS',
    navs:[
      {
        icon:<MonetizationOnOutlined/>,
        link:'/Payroll',
        text:'Payroll'
      },
      {
        icon:<LibraryBooksOutlined/>,
        link:'/createBooking',
        text:'Bookings'
      },
      {
        icon:<AssessmentOutlined/>,
        link:'/Reports',
        text:'Reports'
      },
    ]
  },
]

const Sidebar = () => {
  const classes = useStyles();

  return (
    <div className={classes.sidebar}>
      <div className={classes.scrollable}>
      <img alt='' src='wandblue.png'/>
        {links.map((val,i)=>{
          return <div key={i} className={classes.category}>
            <Typography variant='body1' className={classes.catHeading}>
              {val.heading}  
            </Typography>
            {
              val.navs.map((nav,i)=>{
                return <NavLink key={i} to={nav.link} className={classes.navLink} style={{}}>
                  {nav.icon}
                  <Typography variant='body2' className={classes.navText}>
                    {nav.text}  
                  </Typography>
                </NavLink>
              })
            }
          </div>
          })}
        </div>
        <div className={classes.support}>
          <div className={classes.flex}>
            <Typography variant='body1'>
              Contact Support
            </Typography>
            <ArrowRightAltOutlined className={classes.arrow}/>
          </div>
          <Typography variant='body2' className={classes.font}>
          Any Queries or Questions?
          <span style={{display:'block'}}>Let us know!</span>
          </Typography>
        </div>
    </div>
  )
}

export default Sidebar