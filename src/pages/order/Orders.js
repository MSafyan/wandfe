import React from 'react'
import { Paper, makeStyles,Typography } from '@material-ui/core';

import TableContent from '../../components/orders/TableContent'
import SearchForm from '../../components/orders/SearchForm';
import { connect } from "react-redux";
import clsx from 'clsx';
import { ORDER_LIST } from "../../actions/orderAction";
import Layout from '../../components/layout/Index'

const useStyles = makeStyles(theme => ({
	pageContent: {
		padding: theme.spacing(3),
		background:'white',
		// background:theme.palette.primary.light,
		boxShadow:'none',
		[theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    }
	},
	searchInput: {
		width: '75%'
	},
	itemWrapper:{
		paddingTop:theme.spacing(3),
		paddingBottom:theme.spacing(3),
	},
	flex:{
		display:'flex',
		justifyContent:'space-between',
		paddingBottom:theme.spacing(3)
	},
	bold:{
		fontWeight:'bold'
	},
	statusButton:{
		fontSize:'0.7rem',
		padding:'0.1rem'
	},
	statusActive:{
		background:theme.palette.primary.light,
		padding:`${theme.spacing(1)}px`,
		borderRadius:'50%',
		textAlign:'center',
		fontWeight:'bold',
		[theme.breakpoints.down('sm')]: {
      marginTop:"1.5rem",
			borderRadius:'20%',
    }
	},
	line:{
    borderTop:'2px red solid',
    borderTopColor:theme.palette.primary.lightDark,
    // width:'5rem',
    margin:'auto',
    padding:theme.spacing(2),
  },
	justifyStart:{
		textAlign:'left'
	},
	mobileView:{
    display:'none',
    [theme.breakpoints.down('sm')]: {
      display:'block'
    }
  },
  desktopView:{
    [theme.breakpoints.down('sm')]: {
      display:'none'
    }
  }
}))

function ORDER_List({type, ORDER_LIST,history,loading,orderList}) {

	const classes = useStyles();
	React.useEffect(()=>{
		if(type==='customer'){
			history.push('/createBooking')
		}else{
			ORDER_LIST();
		}
		// ORDER_COUNT();
		  // eslint-disable-next-line
	},[])

	return (
		<Layout>
			<SearchForm/>
			<Paper className={classes.pageContent}>
				<div className={classes.desktopView}>
					<TableContent  history={history}/>
				</div>
					{orderList ? (
						<div className={classes.mobileView}>
						{
							orderList.map((item,i)=>{
								return <div key={i} className={classes.itemWrapper}>
									<div className={classes.flex}>
										<div className={classes.justifyStart}>
											<Typography variant='body1' className={clsx(classes.bold)}>
												{item.instructions.substring(0, 30)}
											</Typography>
											{item.address}
										</div>
										<Typography variant='h5' className={clsx(classes.statusActive)}>
											{item.status || 'ACTIVE'}
										</Typography>
									</div>
									<div className={classes.flex}>
										<Typography variant='body1' className={classes.bold}>
											{item.time.substring(0, 5)}
										</Typography>
										<Typography variant='body1' className={classes.bold}>
											{item.date}  <br/>
											{item.duration}  Minutes
										</Typography>
										<Typography variant='body2' className={classes.bold}>
											{item.cleaner? `${item.cleaner.firstName}` : 'No cleaner Assigned'} <br/>
											$ {item.amount.toFixed(2)}
										</Typography>
									</div>
									<div className={clsx(classes.flex,classes.line)}></div>
								</div>
							})
						}
						</div>
					): (
						<h3 className={classes.mobileView}>Loading... </h3>
					)
				}
			</Paper>
		</Layout>
	)
}


const mapStateToProps = state => ({
	orderList:state.order.orderList,
	loading:state.order.loading,
	type:state.auth.user.role.name
});

export default connect(
	mapStateToProps,
	{ ORDER_LIST }
)(ORDER_List);
