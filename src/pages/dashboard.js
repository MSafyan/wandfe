import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Typography,
	Checkbox,
  FormControlLabel,
	Select,
	MenuItem,
	FormControl ,
	InputLabel ,
	TextField,
	CircularProgress
} from '@material-ui/core';
import clsx from 'clsx';
import moment from 'moment';
import Layout from '../components/layout/Index';
import Revenue from '../components/dashboard/revenue'

import { connect } from "react-redux";
import { FETCH_APPOINTLIST,FETCH_STATS,ORDER_FEATURED,TOGGLE_ORDER_STATUS } from "../actions/orderAction";

const useStyles = makeStyles((theme) => ({
	formWrapper: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
		display:'grid',
		gridTemplateAreas:`
		"heading" 
		"bar" 
		"charts"`,
		gridTemplateColumns:'1fr',
		gridTemplateRows:'0.7fr 1fr 3fr',
		gridGap:theme.spacing(3),
		[theme.breakpoints.down('sm')]: {
			gridTemplateRows:'0.3fr 1fr 3fr',
		}
	},
	barGrid:{
		gridArea:'bar',
		display:'grid',
		gridTemplateColumns:'12% auto 25% 25%',
		gridTemplateAreas:`
		"stat1 stat2 stat3 stat4"`,
		alignItems:'center',
		[theme.breakpoints.down('sm')]: {
			gridTemplateAreas:`
			"stat1 stat2" "stat3 stat4"`,
			gridTemplateColumns:'1fr 1fr',
		}
	},
	chartsGrid:{
		gridArea:'charts',
		display:'grid',
		gridTemplateColumns:'1fr 1fr',
		gridGap:theme.spacing(3),
		gridTemplateAreas:`
		"chart1 chart2"`,
		alignItems:'center',
		[theme.breakpoints.down('sm')]: {
			gridTemplateColumns:'1fr',
			gridTemplateAreas:`
			"chart1" "chart2"`,
		}
	},
	card:{
		padding:`${theme.spacing(4)}px ${theme.spacing(3)}px`,
		marginTop:theme.spacing(3),
		borderRadius:theme.spacing(2),
		background:'white',
		gridColumnGap:theme.spacing(2),
		gridRowGap:theme.spacing(3),
	},
	chart:{
		textAlign:'left',
		height:'100%'
	},
	cardHeading:{
		fontSize:"18px",
		fontWeight:'bold'
	},
	statHead:{
		color:theme.palette.primary.lightDark,
		fontSize:theme.spacing(2.1)
	},
	statVal:{
		fontSize:theme.spacing(6),
		fontWeight:'bold'
	},
	itemBoldVal:{
		fontWeight:"bold",
		color:theme.palette.primary.lightDark,
		fontSize:theme.spacing(1.8)
	},
	header:{
		textAlign:'Start',
		paddingBottom:theme.spacing(1),
		fontWeight:"bold"
	},
	select:{
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      border: "none",
      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
    },
  },
	item:{
		justifyContent:'space-between',
		alignItems:'center',
		padding:theme.spacing(2),
		display:'grid',
		gridTemplateColumns:'1fr 0.8fr 1.2fr',
		gridTemplateAreas:`
		"name time action"`,
	},
	justifyStart:{
		justifySelf:'start'
	},
}));


const Dashboard = ({appointmentList,FETCH_STATS,stats,ORDER_FEATURED,firstName,FETCH_APPOINTLIST,TOGGLE_ORDER_STATUS,loading,type,history}) => {
	const classes = useStyles();
	const [select,setSelect] = React.useState('ACTIVE');
	const [monthList,setMonthList]=React.useState([]);
	const [startDate,setStartDate]=React.useState();
	const [endDate,setEndDate]=React.useState();
	React.useEffect(()=>{
		if(type==='customer'){
			history.push('/createBooking')
		}else{
			FETCH_APPOINTLIST(select)
		}
		// eslint-disable-next-line
	},[select])
	React.useEffect(()=>{
		dateListSetter();
		ORDER_FEATURED()
		FETCH_STATS()
		// eslint-disable-next-line
	},[])

	const dateListSetter=()=>{
		var arr=[];
		var b;
		const today = moment().startOf('month')
		// debugger
		for(var a=0;a<12;a++){
			if(a===0){
				b=0;
			}else{
				b=1
			}
			
			var val = today.subtract(b,'months').format('YYYY-MM-DD')
			if(a===0){
				setStartDate(val)
			}else if(a===11){
				setEndDate(val)
			}
			var key = today.format('MMM:YYYY')
			arr.push({
				key,
				val
			})
		}
		setMonthList(arr);
	}


	return (
		<Layout>
			{type!=='customer' &&
			<div className={classes.formWrapper}>
				<div style={{gridArea:"heading"}}>
					<Typography variant='h4' className={classes.header}>			Welcome Back
					</Typography>
					<Typography variant='h1' className={classes.header}>			
						{firstName}
					</Typography>
				</div>
				<div className={clsx(classes.card,classes.barGrid)}>
					<div style={{gridArea:'stat1'}}>
						<Typography variant='body1' className={classes.statHead}>
							Total Bookings
						</Typography>
						<Typography variant='h5' className={classes.statVal}>
							{stats?.totalBookings}
						</Typography>
					</div>
					<div style={{gridArea:'stat2'}}>
						<Typography variant='body1' className={classes.statHead}>
							Forecast Revenue
						</Typography>
						<Typography variant='h5' className={classes.statVal}>
							{stats?.forcastRevenue.toFixed(2)}
						</Typography>
					</div>
					<div style={{gridArea:'stat3'}}>
						<Typography variant='body1' className={classes.statHead}>
							Total Revenue
						</Typography>
						<Typography variant='h5' className={classes.statVal}>
							{stats?.totalRevenue.toFixed(2)}
						</Typography>
					</div>
					<div style={{gridArea:'stat4'}}>
						<Typography variant='body1' className={classes.statHead}>
							Uncompleted Tasks
						</Typography>
						<Typography variant='h5' className={classes.statVal}>
							{stats?.unCompletedCount}
						</Typography>
					</div>

				</div>
				<div className={clsx(classes.chartsGrid)}>
					<div style={{gridArea:"chart1"}} className={clsx(classes.chart,classes.card)}>
						<Typography variant='body1' className={classes.cardHeading}>
							ACTUAL REVENUE THIS MONTH
						</Typography>
						{
							monthList.length>2 && <>
							<FormControl variant="outlined" className={classes.formControl}>
								<TextField
									className={classes.select}
									value={startDate}
									select
									variant= 'outlined'
									fullWidth
									onChange={(e)=>{
										setStartDate(e.target.value)
										ORDER_FEATURED({startDate:e.target.value,endDate})
									}}>
										{monthList.map((val,i)=>{
											return <MenuItem key={i} value={val.val}>{val.key}</MenuItem>
										}
										)}
									</TextField>
							</FormControl>
								<FormControl variant="outlined" className={classes.formControl}>
									<TextField
									className={classes.select}
									select
									variant= 'outlined'
									fullWidth
									value={endDate}
									onChange={(e)=>{
										setEndDate(e.target.value)
										ORDER_FEATURED({startDate,endDate:e.target.value})
									}}>
										{monthList.map((val,i)=>{
											return <MenuItem key={i} value={val.val}>{val.key}</MenuItem>
										})}
									</TextField>
								</FormControl>
							</>
						}
							<Revenue/>
					</div>
					<div style={{gridArea:"chart2"}} className={clsx(classes.chart,classes.card)}>
						<Typography variant='body1' className={classes.cardHeading}>
							APPOINTMENT's
						</Typography>
						<FormControl variant="outlined" className={classes.formControl}>
							<TextField
								select
								variant= 'outlined'
								fullWidth
								value={select}
								className={classes.select}
								onChange={(e)=>{
									setSelect(e.target.value)
								}}>
								<MenuItem value={'ACTIVE'}>Active Appointments</MenuItem>
								<MenuItem value={'COMPLETED'}>Completed Appointments</MenuItem>
							</TextField>
						</FormControl>
						{
							loading && <CircularProgress/>
						}
						{
							appointmentList.map((val,i)=>{
								return <div key={i} className={classes.item}>
									<div style={{gridArea:"name"}}>
										<Typography variant='h6'>
											{val.customer.firstName}
										</Typography>
										<Typography variant='body2'>
											{val.customer.companyName}
										</Typography>
									</div>
									<Typography variant='h6' style={{gridArea:"time"}} className={classes.cardHeading}>
										{val.time.substring(0,5)}
									</Typography>
									{
										val.status==='ACTIVE' && 
										<FormControlLabel
											style={{gridArea:"action"}}
											checked={val.status==="COMPLETED"}
											onChange={() =>{
												TOGGLE_ORDER_STATUS(val)
												FETCH_APPOINTLIST(select)
											} }
											control={<Checkbox />}
											label="mark as done"
										/>
									}
									{
										val.status==='COMPLETED' && 
										<FormControlLabel
											style={{gridArea:"action"}}
											checked={val.status==="COMPLETED"}
											onChange={() =>{
												TOGGLE_ORDER_STATUS(val)
											} }
											control={<Checkbox />}
											label="mark as unComplete"
										/>
									}
								</div>
							})
						}
					</div>
				</div>
			</div>
			
			}
		</Layout>
		);
	};
	
	const mapStateToProps = state => ({
		loading:state.order.loading,
		type:state.auth.user.role.name,
		appointmentList:state.order.appointmentList,
		firstName:state.auth.user.cleaner?.firstName,
		stats:state.order.stats
	});
	
	export default connect(
		mapStateToProps,
		{ FETCH_APPOINTLIST,TOGGLE_ORDER_STATUS,FETCH_STATS,ORDER_FEATURED}
		)(Dashboard);