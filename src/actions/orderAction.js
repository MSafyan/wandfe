import axios,{url} from './customAxios';
import moment from 'moment';
// axios.defaults.withCredentials = true;

// import { history } from '../store';
import {
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_COUNT_SUCCESS,
  ORDER_COUNT_FAIL,
  NEW_ORDER_SUCCESS,
  NEW_ORDER_FAIL,
	BOOKING_PAYMENT_SUCCESS,
	BOOKING_PAYMENT_FAIL,
	SET_LOADING_ORDER,
	ORDER_REVENUE_SUCCESS,
	ORDER_REVENUE_FAIL,
	ORDER_FEATURED_FAIL,
	ORDER_FEATURED_SUCCESS,
	ORDER_FIND_FAIL,
	ORDER_FIND_SUCCESS,
	ORDER_UPDATE_SUCCESS,
	ORDER_UPDATE_FAIL
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
		const time = moment(order.time).format('HH:mm:ss.SSS')
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

export const ORDER_COUNT = () => async (dispatch) => {
	try {
    dispatch({ type: SET_LOADING_ORDER });

		const res = await axios.get(`${url}/sales/count`);
    // console.log(res.data);

		dispatch({ type: ORDER_COUNT_SUCCESS, payload: res.data });
	} catch (error) {

		dispatch({ type: ORDER_COUNT_FAIL});
		errMsg(error)
    
	}
};

export const ORDER_REVENUE = () => async (dispatch) => {
	try {
    dispatch({ type: SET_LOADING_ORDER });

		const res = await axios.get(`${url}/sales/revenue`);
    // console.log(res.data);

		dispatch({ type: ORDER_FEATURED_SUCCESS, payload: res.data });
	} catch (error) {

		dispatch({ type: ORDER_FEATURED_FAIL});
		errMsg(error)
    
	}
};

export const ORDER_FEATURED = () => async (dispatch) => {
	try {
    dispatch({ type: SET_LOADING_ORDER });

		const res = await axios.get(`${url}/sales/revenueYearly`);
    // console.log(res.data);

		dispatch({ type: ORDER_REVENUE_SUCCESS, payload: res.data });
	} catch (error) {

		dispatch({ type: ORDER_REVENUE_FAIL});
		errMsg(error)
	}
};

export const INVOICE_DOWNLOAD = (id) => async (dispatch) => {
	try {

		const res = await axios.get(`${url}/sales/invoiceDownload/${id}`);
    console.log(res.data);
		toast.success('download successfull..')

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
    if(form_data.searchBy==='OrderId'){
        res = await axios.get(`${url}/sales/${form_data.searchTerm}`);
        dispatch({ type: ORDER_FIND_SUCCESS, payload: [res.data] });

      }
      else if(form_data.searchBy==='vehicleRegNo'){
        const vehicle = await axios.get(`${url}/vehicles?${form_data.searchBy}=${form_data.searchTerm}`);

				// console.log(vehicle)
        res = await axios.get(`${url}/sales?vehicle_eq=${vehicle.data[0].id}`);
    
        dispatch({ type: ORDER_FIND_SUCCESS, payload: res.data });
        }
      else if(form_data.searchBy==='csv'){

        const data = await axios.get(`${url}/sales?created_at_gte=${form_data.startDate}&&created_at_lte=${form_data.endDate}`);

				// console.log(data.data) 
        dispatch({ type: ORDER_FIND_SUCCESS, payload: data.data });
        }
				else if(form_data.searchBy=== 'customerId'){
			
					res = await axios.get(`${url}/sales?customer_eq=${form_data.searchTerm}`);
	
					dispatch({ type: ORDER_FIND_SUCCESS, payload: res.data});
				}
    else if(form_data.searchBy=== 'name' || 'email' || 'contactNo'){
        const customer = await axios.get(`${url}/customers?${form_data.searchBy}_eq=${form_data.searchTerm}`);
				// console.log(customer)
				res = await axios.get(`${url}/sales?customer_eq=${customer.data[0].id}`);

				console.log(res.data)

        dispatch({ type: ORDER_FIND_SUCCESS, payload: [res.data] });
      }

			// console.log('true', form_data.searchBy==='customerId');

      // console.log(res);

	} catch (error) {

		dispatch({ type: ORDER_FIND_FAIL});
    console.log(error.response);
		// errMsg(error)
    
	}
};

// export const ORDER_EDIT = (form_data) => async (dispatch) => {
// 		dispatch({ type: ORDER_EDIT_SUCCESS, payload: form_data });
// };

