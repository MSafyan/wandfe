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
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Select from '../../components/FormsUI/Selects'

import {types} from './createBooking'

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
    gridTemplateColumns:'5fr 4fr 4fr',
    gridTemplateRows:'0.6 1fr 1fr',
    gridColumnGap:theme.spacing(2),
    gridColumnRow:theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns:'1fr 1fr',
      gridTemplateRows:'0.4fr 1fr 1fr 1.7fr' ,
      gridTemplateAreas:`"heading confirmBtn" 
      "cleanerInfo cleanerInfo" 
      "paymentInfo paymentInfo"
      "breakdown breakdown"`,
    }
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
  breakHeading:{
    paddingBottom:theme.spacing(4),
  },
  flex:{
    display:'flex',
    justifyContent:"space-between",
    paddingBottom:theme.spacing(1)
  },
  flexComp:{
    display:"flex",
    justifyContent:'center',
    alignItems:'center'
  },
  emailWrapper:{
    width:'70%'
  },
  justifyStart:{
    textAlign:'left'
  },
  header:{
    justifySelf:'Start',
    paddingBottom:theme.spacing(3)
  },
  confirmBtn:{
    background:theme.palette.primary.lightDark,
    width:'60%',
    height:theme.spacing(7),
    padding:'0px',
    color:"white",
    justifySelf:'right',
    paddingRight:theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      width:'100%'
    }
  },
  dot:{
    height: '8px',
    width: '8px',
    backgroundColor: 'black',
    borderRadius: '50%',
    display: 'inline-block',
    marginRight:'1rem'
  },
  cleanerHeader:{
    paddingBottom:theme.spacing(2)
  },
  fontLight:{
    color:"#004A6B"
  },
  hide:{
    background:'white'
  },
  nameCert:{
    paddingLeft:theme.spacing(1)
  }
}));





const CompanyInfo = ({BOOKING_PAYMENT,service,order,business,onBoarding}) => {
  const classes = useStyles();
  React.useEffect(()=>{

    // eslint-disable-next-line
  },[])

  const pricer=()=>{
    var price= types.filter((val)=>{
      return val.label===order.type
    })
    return price[0]?.value
  }

  const totalCal = ()=>{
    return ((service.bathroomDuration*order.bathroomCount + 
      service.bedroomDuration*order.kitchenCount +
      service.bedroomDuration*order.bedroomCount +
      service.livingroomDuration ) /60) * service.ratePerHour * pricer();
  }

  const breakdown =[
    {icon:<BathtubOutlinedIcon style={{color:"#004A6B"}}/>,
    category:'Bathroom',
    price:`${service.bathroomDuration}mint x${order.bathroomCount} 
    = ${service.bathroomDuration*order.bathroomCount}mint`},
    {icon:<KitchenOutlinedIcon/>,
    category:'Kitchen',
    price:`${service.kitchenDuration}mint x${order.kitchenCount} 
    = ${service.bedroomDuration*order.kitchenCount}mint`},
    {icon:<KingBedOutlinedIcon/>,
    category:'Bedroom',
    price:`${service.bedroomDuration}mint x${order.bedroomCount} 
    = ${service.bedroomDuration*order.bedroomCount}mint`},
    {icon:<TableChartOutlinedIcon/>,
    category:'LivingRoom',
    price:`${service.livingroomDuration}mint x${1} 
    = ${service.livingroomDuration}mint`},
    {icon:<ReportProblemOutlinedIcon/>,
    category:`${order.type}`,
    price:`${pricer()}`},
    {
    //  icon:<MoneyOutlinedIcon/>,
    // category:'hourly Rate',
    // price:`${service.ratePerHour}usd`
    },{},
    {icon:<MoneyOutlinedIcon/>,
    category:'total',
    price:`${totalCal().toFixed(2)}usd`},
  ]

  const paidBy={
    BY_HAND:'ByHand',
    STRIPE:'Stripe',
  }

  const FORM_VALIDATION = Yup.object().shape({
    paidBy: Yup.string()
    .required('Required')
    .test((paidBy,_)=>{
      if(paidBy==='STRIPE' && onBoarding!==true){
        return new Yup.ValidationError(
          `Can not pay via strape, please choose By_hand`,
          undefined,
          'paidBy'
        );
      }
      return true;
    })
  });

  const formState=()=>{
    const INITIAL_FORM_STATE = {
      paidBy:''
    };

    // if(!edit){
      return INITIAL_FORM_STATE;
    // }else{
    //   return EDIT_FORM_STATE;
    // }
  }

  return (
    <Layout>
            <Formik
              initialValues={ formState()}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                // console.log(values);
                // if(edit) {
                //   CUSTOMER_UPDATE(values);
                // }else{
                  BOOKING_PAYMENT(values)
                  // }
              }}
              enableReinitialize
            >
              {({ values, errors, isSubmitting, isValid }) => (
              <Form>
                <div className={classes.gridWrapper}>
                  <Typography variant='h4' style={{gridArea:'heading'}} className={clsx(classes.header,classes.justifyStart)}>
                    <span className={classes.bold}> Create a Booking - </span>
                    Payment Information
                  </Typography>
                  <Button style={{gridArea:'confirmBtn'}}
                    className={classes.confirmBtn}
                    type='submit'
                    variant='contained'
                    endIcon={<ArrowRightAltIcon style={{fill:'white'}}/>}
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
                        <Avatar src={business.logo? business.logo.url:'employee.png'}/>
                        <div className={classes.nameCert}>
                          <Typography variant='h6' className={clsx(classes.bold,classes.justifyStart)}>
                            {business.cleaningService}
                          </Typography>
                          <Typography variant='body2' className={clsx(classes.justifyStart)}>
                            wand certified cleaner
                          </Typography>
                        </div>
                      </div>
                      <div style={{textAlign:'right',paddingTop:'1rem'}}>
                        <StarRatings
                          rating={5}
                          starRatedColor="black"
                          starDimension="12px"
                          starSpacing="0px"
                          numberOfStars={5}
                          name='rating'
                        />
                        <Typography variant='body1'>
                          <span  className={classes.bold}>(45)</span>
                            {" reviews"}
                        </Typography>
                      </div>
                    </div>
                  </div>

                  <div style={{gridArea:"paymentInfo"}} className={classes.card}>
                    <Typography variant='h6'>Add Payment Information</Typography>
                    <Select
                      style={{paddingBottom:'1rem'}}
                      name="paidBy"
                      label="Paid By"
                      options={paidBy}
                    />
                    {values.paidBy==='STRIPE' && 
                    <StripeContainer/>  
                    }
                  </div>

                  <div style={{gridArea:"breakdown"}} className={classes.card}>
                    <Typography variant='h6' 
                      className={clsx(classes.bold,classes.justifyStart,classes.breakHeading)}>
                        Breakdown
                    </Typography>
                    {breakdown.map((val,i)=>(<div key={i} className={classes.flex}>
                        <div className={classes.flexComp}>
                        {val.category &&  <span className={clsx(classes.dot,val.category==='total' && classes.hide)}></span>}
                          {val.icon}
                          <Typography variant='body1' style={{paddingLeft:'0.5rem'}}>{val.category}</Typography>
                        </div>
                        <Typography variant='body1' >
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
  business:state.order.cleanerInfo.business,
  loading:state.customer.loading,
  service:state.order.cleanerInfo.service,
  onBoarding:state.order.cleanerInfo.wallet,
  order:state.order.order
});

export default connect(
  mapStateToProps,
  { BOOKING_PAYMENT }
)(CompanyInfo);