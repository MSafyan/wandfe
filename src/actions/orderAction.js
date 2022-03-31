import axios,{url} from './customAxios';
import moment from 'moment';
// axios.defaults.withCredentials = true;

// import { history } from '../store';
import {
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
	FETCH_APPOINTLIST_SUCCESS,
	FETCH_APPOINTLIST_FAIL,
	FETCH_CLEANER_SUCCESS,
	FETCH_CLEANER_FAIL,
  NEW_ORDER_SUCCESS,
  NEW_ORDER_FAIL,
	BOOKING_PAYMENT_SUCCESS,
	BOOKING_PAYMENT_FAIL,
	SET_LOADING_ORDER,
	ORDER_REVENUE_SUCCESS,
	ORDER_REVENUE_FAIL,
	ORDER_FIND_FAIL,
	ORDER_FIND_SUCCESS,
	ORDER_UPDATE_SUCCESS,
	ORDER_UPDATE_FAIL,
	FETCH_STATS_SUCCESS,
	FETCH_STATS_FAIL
} from './types';

import { toast } from "react-toastify";
import {errMsg} from './utils';

export const NEW_ORDER = (form_data) => async (dispatch,getState) => {

	// const {email} = getState().auth.user;
	// console.log(email)

	try {
		dispatch({ type: NEW_ORDER_SUCCESS, payload: form_data.values });
		form_data.history.push('/bookingPayment')
	} catch (error) {
		dispatch({ type: NEW_ORDER_FAIL});
		errMsg(error)
	}
};
export const BOOKING_PAYMENT = (form_data) => async (dispatch,getState) => {

	try {
    dispatch({ type: SET_LOADING_ORDER });

		const {id} = getState().auth.user;
		const {order} = getState().order;
		debugger;
		const time = moment(order.time).format('HH:mm')
    const data={
			...order,
			time,
			customer:id,
			cleaner:6
    };

		const res = await axios.post(`${url}/bookings`,data);

		dispatch({ type: BOOKING_PAYMENT_SUCCESS, payload: res.data });
		// form_data.history.push('/orders')
		toast.success("Booking created scuccessfully...");
	} catch (error) {
		dispatch({ type: BOOKING_PAYMENT_FAIL});
		errMsg(error)
	}
};

export const FETCH_CLEANER = () => async (dispatch,getState) => {
	try {
		const res = await axios.get(`${url}/cleaners/fetchcleaner`);

		dispatch({ type: FETCH_CLEANER_SUCCESS, payload: res.data });
	} catch (error) {
		dispatch({ type: FETCH_CLEANER_FAIL});
		errMsg(error)
	}
};

export const FETCH_STATS = () => async (dispatch) => {
	try {
		const res = await axios.get(`${url}/cleaners/stats`);

		dispatch({ type: FETCH_STATS_SUCCESS, payload: res.data });
	} catch (error) {
		dispatch({ type: FETCH_STATS_FAIL});
		errMsg(error)
	}
};

export const UPDATE_ORDER = (form_data) => async (dispatch) => {
	console.log(form_data)
	try {
    dispatch({ type: SET_LOADING_ORDER });

    const data={
			status:form_data.status,
    };

		const res = await axios.put(`${url}/sales/${form_data.id}`, data);

    console.log(res.data);
		dispatch({ type: ORDER_UPDATE_SUCCESS, payload: res.data });
		toast.success("ORDER updated scuccessfully...");
	} catch (error) {

		dispatch({ type: ORDER_UPDATE_FAIL});
		errMsg(error)
	}
};

export const ORDER_LIST = () => async (dispatch,getState) => {
	try {
    dispatch({ type: SET_LOADING_ORDER });
		const type = getState().auth.user.role.name;
		let res=[];
		if(type==='cleaner' || type==='premium'){
			res = await axios.get(`${url}/bookings`);
			console.log(res.data);
			dispatch({ type: ORDER_LIST_SUCCESS, payload: res.data });
		}
	} catch (error) {

		dispatch({ type: ORDER_LIST_FAIL});
		errMsg(error)
    
	}
};

export const FETCH_APPOINTLIST = (form_data) => async (dispatch) => {
	try {
		// const today= moment().format('YYYY-MM-DD')
		// debugger;
    dispatch({ type: SET_LOADING_ORDER });

		const res = await axios.get(`${url}/bookings?status_eq=${form_data}`);
		console.log(res.data);
		dispatch({ type: FETCH_APPOINTLIST_SUCCESS, payload: res.data });

	} catch (error) {
		dispatch({ type: FETCH_APPOINTLIST_FAIL});
		errMsg(error)
	}
};
export const TOGGLE_ORDER_STATUS = (form_data) => async (dispatch) => {
	try {
		let status,res;
    dispatch({ type: SET_LOADING_ORDER });
		if(form_data.status==="COMPLETED"){
			status="ACTIVE"
		}else{
			status="COMPLETED"
		}
		await axios.put(`${url}/bookings/${form_data.id}`,{status});
		res = await axios.get(`${url}/bookings?status_eq=${form_data}`);
		dispatch({ type: FETCH_APPOINTLIST_SUCCESS, payload: res.data });

	} catch (error) {
		errMsg(error)
	}
};


export const ORDER_FEATURED = (form_data) => async (dispatch) => {
	try {
    dispatch({ type: SET_LOADING_ORDER });
		console.log(form_data)

		const res = await axios.post(`${url}/bookings/revenueYearly`,form_data);
    // console.log(res.data);

		dispatch({ type: ORDER_REVENUE_SUCCESS, payload: res.data });
	} catch (error) {

		dispatch({ type: ORDER_REVENUE_FAIL});
		errMsg(error)
	}
};

export const ORDER_FIND = (form_data) => async (dispatch) => {
	try {
    dispatch({ type: SET_LOADING_ORDER });
    var res;
    // console.log(form_data)
        res = await axios.post(`${url}/bookings/finder}`,form_data);
        dispatch({ type: ORDER_FIND_SUCCESS, payload: [res.data] });

	} catch (error) {

		dispatch({ type: ORDER_FIND_FAIL});
    console.log(error.response);
		// errMsg(error)
    
	}
};

// export const ORDER_EDIT = (form_data) => async (dispatch) => {
// 		dispatch({ type: ORDER_EDIT_SUCCESS, payload: form_data });
// };

