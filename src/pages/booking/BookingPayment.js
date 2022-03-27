import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import StripeContainer from '../../components/Booking/StripeContainer'
import {
  Avatar,
  Button,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';
import KitchenOutlinedIcon from '@material-ui/icons/KitchenOutlined';
import KingBedOutlinedIcon from '@material-ui/icons/KingBedOutlined';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import MoneyOutlinedIcon from '@material-ui/icons/MoneyOutlined';
// import Textfield from '../components/FormsUI/Textfields';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import Layout from '../../components/layout/Index'
import StarRatings from 'react-star-ratings';

import { connect } from "react-redux";
import { BOOKING_PAYMENT } from "../../actions/orderAction";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
  gridWrapper:{
    display:'grid',
    gridTemplateAreas:`"heading heading confirmBtn" "cleanerInfo breakdown empty" "paymentInfo breakdown empty"`,
    gridTemplateColumns:'5fr 4fr 3fr',
    gridTemplateRows:'0.6 1fr 1fr',
    gridColumnGap:theme.spacing(2),
    gridColumnRow:theme.spacing(2),
  },
  bold:{
    fontWeight:"bold"
  },
  card:{
    padding:`${theme.spacing(4)}px ${theme.spacing(3)}px`,
    marginTop:theme.spacing(3),
    borderRadius:theme.spacing(2),
    background:'white',
    gridColumnGap:theme.spacing(2),
    gridRowGap:theme.spacing(3),
  },
  flex:{
    display:'flex',
    justifyContent:"space-between"
  },
  flexComp:{
    display:"flex",
    
  },
  emailWrapper:{
    width:'70%'
  },
  justifyStart:{
    justifySelf:'start'
  },
  header:{
    justifySelf:'Start',
    paddingBottom:theme.spacing(3)
  },
  confirmBtn:{
    background:theme.palette.primary.main,
    width:'70%',
    padding:'0px'
  },
  cleanerHeader:{
    paddingBottom:theme.spacing(2)
  },
  fontLight:{
    color:"#004A6B"
  }
}));

const breakdown =[
  {icon:<BathtubOutlinedIcon style={{color:"#004A6B"}}/>,
  category:'Bathroom',
  price:'$25 x1 = $25'},
  {icon:<KitchenOutlinedIcon/>,
  category:'Kitchen',
  price:'$25 x1 = $25'},
  {icon:<KingBedOutlinedIcon/>,
  category:'Bedroom',
  price:'$25 x1 = $25'},
  {icon:<TableChartOutlinedIcon/>,
  category:'LivingRoom',
  price:'$25 x1 = $25'},
  {icon:<ReportProblemOutlinedIcon/>,
  category:'Covid',
  price:'x1.5'},
  {icon:<MoneyOutlinedIcon/>,
  category:'total',
  price:'$150'},
]

const FORM_VALIDATION = Yup.object().shape({
});

const CompanyInfo = ({BOOKING_PAYMENT,CUSTOMER_UPDATE,customer,edit}) => {
  const classes = useStyles();
  React.useEffect(()=>{

    // eslint-disable-next-line
  },[])

  const formState=()=>{
    const INITIAL_FORM_STATE = {

    };

    const EDIT_FORM_STATE={
    }

    if(!edit){
      return INITIAL_FORM_STATE;
    }else{
      return EDIT_FORM_STATE;
    }
  }

 



  return (
    <Layout>
            <Formik
              initialValues={ formState()}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                // console.log(values);
                if(edit) {
                  CUSTOMER_UPDATE(values);
                }else{
                  BOOKING_PAYMENT(values)
                  }
              }}
              enableReinitialize
            >
              {({ values, errors, isSubmitting, isValid }) => (
              <Form>
                <div className={classes.gridWrapper}>
                  <Typography variant='h4' style={{gridArea:'heading'}} className={classes.header}>
                    <span className={classes.bold}> Create a Booking - </span>
                    Payment Information
                  </Typography>
                  <Button style={{gridArea:'confirmBtn'}}
                    className={classes.confirmBtn}
                    type='submit'
                    variant='contained'
                    endIcon={<ArrowRightAltIcon/>}
                  >
                    Confirm Booking  
                  </Button>  

                  <div style={{gridArea:"cleanerInfo"}} className={classes.card}>
                    <div className={classes.flex}>
                      <Typography variant='h6' className={clsx(classes.cleanerHeader,classes.bold)}>
                        Cleaner Info  
                      </Typography>
                      <Typography variant='h6'>
                        USD 100/Home
                      </Typography>
                    </div>
                    <div className={classes.flex}>
                      <div className={classes.flexComp}>
                        <Avatar src="broken-image.jpg"/>
                        <div>
                          <Typography variant='h6' className={classes.bold}>
                            Anderson Johnson
                          </Typography>
                          <Typography variant='body2'>
                            wand certified cleaner
                          </Typography>
                        </div>
                      </div>
                      <div>
                        <StarRatings
                          rating={5}
                          starRatedColor="black"
                          starDimension="10px"
                          starSpacing="0px"
                          numberOfStars={5}
                          name='rating'
                        />
                        <Typography variant='body2'>
                          <span  className={classes.bold}>(45)</span>
                            {" reviews"}
                        </Typography>
                      </div>
                    </div>
                  </div>

                  <div style={{gridArea:"paymentInfo"}} className={classes.card}>
                    <Typography variant='h6'>Add Payment Information</Typography>
                    <StripeContainer/>  
                  </div>

                  <div style={{gridArea:"breakdown"}} className={classes.card}>
                    <Typography variant='h6'>Breakdown</Typography>
                    {breakdown.map((val,i)=>(<div key={i} className={classes.flex}>
                        <div className={classes.flexComp}>
                          {val.icon}
                          <Typography variant='body2'>{val.category}</Typography>
                        </div>
                        <Typography variant='body2'>
                          {val.price}  
                        </Typography>
                      </div>))}
                      
                  </div>

                </div>
                {/* address  */}
              </Form>
              )}
            </Formik>
    </Layout>
  );
};

const mapStateToProps = state => ({
  edit: state.customer.edit,
  customer:state.customer.customer,
  loading:state.customer.loading,
  success:state.customer.success,
});

export default connect(
  mapStateToProps,
  { BOOKING_PAYMENT }
)(CompanyInfo);