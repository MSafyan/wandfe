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
import { Link } from 'react-router-dom'
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  sidebar:{
    textAlign:'left',
    width:'240px'
    
  },
  logo:{
    width:theme.spacing(15),
    // padding:theme.spacing(3),
    paddingBottom:'1vw'
  },
  scrollable:{
    position:'fixed',
    height:'80vh',
    padding:'2vw',
    overflowY:"auto",
    width:'18vw',
    overflow:"hidden"
  },
  category:{
    marginBottom:theme.spacing(4)
  },
  catHeading:{
    fontWeight:'bold',
    fontSize:theme.spacing(2.2),
    [theme.breakpoints.only('md')]: {
      fontSize:theme.spacing(1.8)
    }
  },
  navText:{
    paddingLeft:'1.6vw',
    fontWeight:'500'
    // color:theme.palette.fontPrimary.main
  },
  navLink:{
    color:'black',
    textDecoration:'none',
    display:'flex',
    alignItems:'center',
    padding:'.3vw',
    margin:`${theme.spacing(3)}px 0px`
  },
  support:{
    position:'fixed',
    bottom:theme.spacing(1),
    background:theme.palette.primary.dark,
    color:'white',
    padding:'1.3vw',
    paddingRight:'3.3vw',
    borderRadius:theme.spacing(1),
    margin:'1.5vw'
  },
  supportLabel:{
    fontWeight:'bold',
    paddingBottom:'0.4vw',
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
    type:'customer',
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

const Sidebar = ({type}) => {
  const classes = useStyles();

  return (
    <div className={classes.sidebar}>
      <div className={classes.scrollable}>
          <div className={classes.logo}>
            <img alt='' src='http://app.wandcleaning.pro/wandBluefav.png' width='35px' style={{paddingRight:'4px'}} />
            <img alt='' src='wordcyan.png' width='90px' />
          </div>
        {links.map((val,i)=>{
          return <>
            {val.type===type? null: 
            <div key={i} className={classes.category}>
              <Typography variant='body1' className={classes.catHeading}>
                {val.heading}  
              </Typography>
              {
                val.navs.map((nav,i)=>{
                  return <Link key={i} to={nav.link} className={classes.navLink}>
                    {nav.icon}
                    <Typography variant='body1' className={classes.navText}>
                      {nav.text}  
                    </Typography>
                  </Link>
                })
              }
            </div>}
          </>
          })}
        </div>
        <div className={classes.support}>
          <div className={classes.flex}>
            <Typography variant='body1' className={classes.supportLabel}>
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

const mapStateToProps = state => ({
  type: state.auth.user.role.name,
});

export default connect(
  mapStateToProps,
  {  }
)(Sidebar);