import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Modal,Button ,IconButton} from '@material-ui/core';
import clsx from 'clsx'
import SendIcon from '@material-ui/icons/Send';

import PersonIcon from '@material-ui/icons/Person';
// import { ModalHover } from 'react-modal-hover'
import InfoIcon from '@material-ui/icons/Info';
// import Button from '../../components/FormsUI/Buttons';
// import GetAppIcon from '@material-ui/icons/GetApp';
import { connect } from "react-redux";
import { ORDER_FIND } from "../../actions/orderAction";
import moment from 'moment';
// import PhotoCamera from '@material-ui/icons/PhotoCamera';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '40vw',
    borderRadius:'5%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    padding:'2rem 2rem',
    [theme.breakpoints.down('sm')]: {
      width: '85vw',
      padding:'1rem 1rem',
      left:'6vw !important',
      top:'33vw !important',
      transform:'translate(0%, 0%) !important'
    }
  },
  flex:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center'
  },
  address:{
		color: '#C8CBCB',
    fontSize:'1vw',
    [theme.breakpoints.down('sm')]: {
      fontSize:'12px',
      width:'50%'
    }
	},
  instructions:{
		fontSize:'1.8vw',
		fontWeight:"600",
		color:theme.palette.primary.lightDark,
    [theme.breakpoints.down('sm')]: {
      fontSize:'15px',
    }
	},
  statusActive:{
    fontSize:'1.8vw',
		background:theme.palette.primary.active,
		padding:'0.7vw',
		borderRadius:'30%',
		textAlign:'center',
		fontWeight:'bold',
		color:theme.palette.primary.lightDark,
		[theme.breakpoints.down('sm')]: {
      marginTop:"1.5rem",
			borderRadius:'20%',
      fontSize:'12px',
    }
	},
  heading2:{
    marginTop:'.5vw',
    marginBottom:'2.5vw',
    	[theme.breakpoints.down('sm')]: {
        marginBottom:'5vw',
      }
  },
  dot:{
    height: '8px',
    width: '8px',
    backgroundColor: theme.palette.primary.lightDark,
    borderRadius: '50%',
    display: 'inline-block',
    margin:'0px 0.8vw',
    [theme.breakpoints.down('sm')]: {
      height: '5px',
      width: '5px',
      margin:'0px 1.8vw',
    }
  },
  assignButton:{
    border:null,
    '& .MuiButton-outlined':{
      border:null,
    },
    '& .MuiButton-label':{
      fontSize:"0.76vw",
      color:theme.palette.primary.lightDark,
      [theme.breakpoints.down('sm')]: {
        fontSize:'8px'
      }
    },
    '& .MuiSvgIcon-root':{
        width:'1.1vw',
     [theme.breakpoints.down('sm')]: {
        width:'10px',
      }
    }
  },
  date:{
		fontSize:'1vw',
		fontWeight:'500',
    marginBottom:"2.5vw",
		color:theme.palette.primary.lightDark,
    [theme.breakpoints.down('sm')]: {
		  fontSize:'9px',
      marginBottom:"4.5vw",
    }
	},
  timeDots:{
    height:'1vw',
    margin:'0 0.5vw',
    [theme.breakpoints.down('sm')]: {
      height:'2vw',
    }
  },
  duration:{
		fontSize:'1vw',
		fontWeight:'500',
		color:theme.palette.primary.lightDark,
    marginBottom:'2.5vw',
    [theme.breakpoints.down('sm')]: {
		  fontSize:'9px',
      marginBottom:"4.5vw",
    }
	},
  time:{
    display:'flex',
    alignItems:'center',
		fontSize:'1vw',
		fontWeight:'bold',
		color:theme.palette.primary.lightDark,
    marginBottom:'2.5vw',
    [theme.breakpoints.down('sm')]: {
		  fontSize:'9px',
      marginBottom:"4.5vw",
    }
	},
  name:{
    fontSize:'1vw',
		fontWeight:'600',
		color:theme.palette.primary.lightDark,
    display:'flex',
    alignItems:'center',
    [theme.breakpoints.down('sm')]: {
		  fontSize:'9px',
    }
  },
  cleanerIcon:{
    fill:theme.palette.primary.lightDark,
    marginRight:'0.5vw',
		width:'1.8vw',
    [theme.breakpoints.down('sm')]: {
		  width:'2.8vw',
    }
  },
  amount:{
    color:theme.palette.primary.lightDark,
    fontSize:"1.8vw",
     [theme.breakpoints.down('sm')]: {
		  fontSize:'18px',
    }
  },
  justifyStart:{
		textAlign:'left'
	},
  mobileView:{
    display:'none',
    [theme.breakpoints.down('sm')]: {
      display:'inline-block',
      
    }
  },
}));

function SimpleModal({item,open,handleClose,handleOpen}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);


  return (
    <div>
      <IconButton onClick={handleOpen} className={classes.mobileView}>
        <InfoIcon/>
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
        {/* <IconButton color="primary" aria-label="upload picture" component="span" 
          onClick={()=>{console.log('click cross')}}>
          <PhotoCamera />
        </IconButton> */}
          <div className={classes.flex}>
            <div className={clsx(classes.justifyStart)}>
              <Typography variant='body1' className={clsx(classes.instructions)}>
                {item.instructions}
                {/* Debbie Sardon (Example Appointment) */}
              </Typography>
            </div>
            <div>
              <Typography variant='h5' className={clsx(classes.statusActive)}>
                {item.status || ''}
              </Typography>
            </div>
          </div>
          <div className={clsx(classes.flex,classes.heading2)}>
            <div className={clsx(classes.justifyStart,classes.address)}>
              {item.address}
            </div>
            <Button
              className={classes.assignButton}
              startIcon={<SendIcon className={classes.assignIcon}/>}
              >
              Message to Customer
            </Button>
          </div>
            <Typography variant='body1' className={classes.date}>
              {item.date}
              <span className={classes.dot}></span>
              {moment(item.date).format('dddd')}
            </Typography>

            <Typography variant='body2' className={classes.time}>
              {moment(`2017-12-14T${item.time}`).format('hh:mm A')}
              <img src='timeDots.PNG' alt='' className={classes.timeDots}/>
              {moment(`2017-12-14T${item.time}`).add(item.duration,'minutes').format('hh:mm A')}
            </Typography>

            <Typography variant='body1' className={classes.duration}>
              {item.duration}  Minutes
            </Typography>
          <div className={classes.flex}>
            <Typography variant='body2' className={classes.name}>
              <PersonIcon className={classes.cleanerIcon}/>
              {item.cleaner? `${item.cleaner.firstName}` : 'No cleaner Assigned'} <br/>
            </Typography>        
            <Typography variant='h6' className={classes.amount}>
              $ {item.amount?.toFixed(2)}
            </Typography>
          </div>
        </div>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => ({
  loading:state.order.loading
});

export default connect(
  mapStateToProps,
  { ORDER_FIND  }
)(SimpleModal);