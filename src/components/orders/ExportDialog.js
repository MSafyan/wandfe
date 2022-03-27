import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Modal,Button} from '@material-ui/core';
import clsx from 'clsx'
import SendIcon from '@material-ui/icons/Send';
import {
  IconButton,
} from '@material-ui/core';

// import Button from '../../components/FormsUI/Buttons';
import GetAppIcon from '@material-ui/icons/GetApp';
import { connect } from "react-redux";
import { ORDER_FIND } from "../../actions/orderAction";

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
    width: 500,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    // display:'flex',
    // flexDirection:'column',

  },
  flex:{
    display:'flex',
    justifyContent:'space-between'
  },
  statusActive:{
		background:theme.palette.primary.light,
		padding:`${theme.spacing(1)}px`,
		borderRadius:'50%',
		width:'100px',
		textAlign:'center',
		fontWeight:'bold'
	}
}));

function SimpleModal({item}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <span>
      <IconButton onClick={handleOpen}>
        <GetAppIcon/>
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <div className={classes.flex}>
            <Typography variant='h5'>
                {item.description}
            </Typography>
            <Typography variant='h5' className={clsx(classes.statusActive)}>
              {item.status || ''}
            </Typography>
          </div>
          <div className={classes.flex}>
            <Typography variant='body2' className={classes.lighten}>
              {item.address}  
            </Typography>
            <Button
              variant="outlined"
              startIcon={<SendIcon/>}
              >
              assign a cleaner
            </Button>
          </div>
          <div>
            <Typography variant='body2'>
              handleClose
              <span className={classes.dot}></span>  
                friday
            </Typography>
          </div>
          <div>
            <Typography variant='body2'>
              {item.time}-{item.time}
            </Typography>
          </div>
          <div>
            <Typography variant='body2'>
              {item.duration}
            </Typography>
          </div>
          <div className={classes.flex}>
            <div>
                {item.assigned ===null ? (
                  <>
                    <Typography variant='body2' className={classes.bold}>
                      No cleaner Assigned
                    </Typography>
                    <Typography variant='body2'>
                      Assign a cleaner
                    </Typography>
                  </>
                ):null}
            </div>
            <Typography variant='body2'>
              {item.amount}  
            </Typography>
        
          </div>
        </div>
      </Modal>
    </span>
  );
}

const mapStateToProps = state => ({
  loading:state.order.loading
});

export default connect(
  mapStateToProps,
  { ORDER_FIND  }
)(SimpleModal);