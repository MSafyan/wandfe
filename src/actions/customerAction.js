import axios,{url} from './customAxios';
// axios.defaults.withCredentials = true;

// import { history } from '../store';
import {
  NEW_CUSTOMER_SUCCESS,
  NEW_CUSTOMER_FAIL,
  CUSTOMER_LIST_SUCCESS,
  CUSTOMER_LIST_FAIL,
  CUSTOMER_COUNT_SUCCESS,
  CUSTOMER_COUNT_FAIL,
  CUSTOMER_EDIT_SUCCESS,
  CUSTOMER_UPDATE_SUCCESS,
  CUSTOMER_UPDATE_FAIL,
  CUSTOMER_FIND_SUCCESS,
  CUSTOMER_FIND_FAIL,
	SET_LOADING_CUSTOMER,
  CUSTOMER_YEARLY_SUCCESS,
  CUSTOMER_YEARLY_FAIL,
  CUSTOMER_INFO_SUCCESS,
  CUSTOMER_INFO_FAIL,
  CUSTOMER_EMAIL_SUCCESS,
  NOT_LOADING_CUSTOMER
} from './types';

import { toast } from "react-toastify";
import {errMsg} from './utils';

// const url = 'http://localhost:1337';
// const url = process.env.REACT_APP_BE_HOST_URL;

export const NEW_CUSTOMER = (form_data) => async (dispatch,getState) => {
	try {
    dispatch({ type: SET_LOADING_CUSTOMER });
    if(form_data.termsCheck){
      form_data.billingAddress = form_data.address1;
      delete form_data.termsCheck;
    }

		const res = await axios.post(`${url}/customers/`, form_data);
    toast.success("Customer successfully added...");
    debugger;
    var inviteObj = {
      businessID:getState().auth.user.cleaner.business,
      body:`you are inviting in Wandcleaners as a customer userName:${form_data.email} password:'${form_data.password}`,
      URL:"wand.com/register/323",
      sendTo:form_data.email
    }
    const a = await axios.post(`${url}/notifications/invite`,inviteObj)
    console.log(a)
    dispatch({ type: NEW_CUSTOMER_SUCCESS, payload: res.data });
    // console.log(res.data);

	} catch (error) {

		dispatch({ type: NEW_CUSTOMER_FAIL});
    // toast.warn('server error or customer email not unique')
    
		// errMsg(error)
	}
};

export const CUSTOMER_EMAIL = (form_data) => async (dispatch) => {
	try {
    dispatch({ type: SET_LOADING_CUSTOMER });
    const data={
      email:form_data.email || '',
      body:form_data.text || '',
      contactNo1:form_data.contactNo1 || '',
      subject:"volante",
      method:form_data.method
    };

		await axios.post(`${url}/customers/email`, data);

    // console.log(res.data);

		dispatch({ type: CUSTOMER_EMAIL_SUCCESS});
		toast.success(`${form_data.method} is send...`);
	} catch (error) {

		dispatch({ type: CUSTOMER_INFO_FAIL});
		errMsg(error)
	}
};

export const NEW_EMAIL = (form_data) => async (dispatch) => {
	try {
    dispatch({ type: SET_LOADING_CUSTOMER });
    const data={
      subject:form_data.subject || '',
      body:form_data.body || '',
      method:form_data.method || 'email',
      customerType:form_data.customerType || 'both',
    };
    if(form_data.customerType==='loyalcustomer'){
      await axios.post(`${url}/customers/bulkEmail?loyalCustomer_eq=true`, data);
    }else{
      await axios.post(`${url}/customers/bulkEmail`, data);
    }

    // console.log(res.data);

		dispatch({ type: CUSTOMER_EMAIL_SUCCESS});
		toast.success("Notification is send...");
	} catch (error) {

		dispatch({ type: CUSTOMER_INFO_FAIL});
		errMsg(error)
	}
};

export const CUSTOMER_UPDATE = (form_data) => async (dispatch,getState) => {
	try {
    dispatch({ type: SET_LOADING_CUSTOMER });
    const {id} = getState().customer.customer;

    const data={
      firstName:form_data.firstName || '',
      lastName:form_data.lastName || '',
      address:form_data.address || '',
      email:form_data.email || '',
      contactNo1:form_data.contactNo1 || '',
      contactNo2:form_data.contactNo2 || '',
      DOB:form_data.DOB || ''
    };

		const res = await axios.put(`${url}/customers/${id}`, data);

    // console.log(res.data);

		dispatch({ type: CUSTOMER_UPDATE_SUCCESS, payload: res.data });
		toast.success("Customer updated scuccessfully...");
	} catch (error) {

		dispatch({ type: CUSTOMER_UPDATE_FAIL});
		errMsg(error)
	}
};

export const CUSTOMER_LIST = () => async (dispatch) => {
	try {
    dispatch({ type: SET_LOADING_CUSTOMER });

		const res = await axios.get(`${url}/customers`);
    // console.log(res.data);

		dispatch({ type: CUSTOMER_LIST_SUCCESS, payload: res.data });
	} catch (error) {

		dispatch({ type: CUSTOMER_LIST_FAIL});
		errMsg(error)
    
	}
};

export const CUSTOMER_COUNT = () => async (dispatch) => {
	try {
    dispatch({ type: SET_LOADING_CUSTOMER });

		const res = await axios.get(`${url}/customers/count`);
    // console.log(res.data);

		dispatch({ type: CUSTOMER_COUNT_SUCCESS, payload: res.data });
	} catch (error) {

		dispatch({ type: CUSTOMER_COUNT_FAIL});
		errMsg(error)
    
	}
};
export const CUSTOMER_INFO = () => async (dispatch) => {
	try {
    dispatch({ type: SET_LOADING_CUSTOMER });

		const res = await axios.get(`${url}/customers/customerInfo`);
    // console.log(res.data);

		dispatch({ type: CUSTOMER_INFO_SUCCESS , payload: res.data });
	} catch (error) {

		dispatch({ type: CUSTOMER_INFO_FAIL });
		errMsg(error)
    
	}
};
export const CUSTOMER_YEARLY = () => async (dispatch) => {
	try {
    dispatch({ type: SET_LOADING_CUSTOMER });

		const res = await axios.get(`${url}/customers/customerYearly`);
    // console.log(res.data);

		dispatch({ type: CUSTOMER_YEARLY_SUCCESS, payload: res.data });
	} catch (error) {

		dispatch({ type: CUSTOMER_YEARLY_FAIL});
		errMsg(error)
    
	}
};

export const CUSTOMER_FIND = (form_data) => async (dispatch) => {
	try {
    dispatch({ type: SET_LOADING_CUSTOMER });
    var res;
    // console.log(form_data)
    if(form_data.searchBy==='id'){
        res = await axios.get(`${url}/customers/${form_data.searchTerm}`);
        dispatch({ type: CUSTOMER_FIND_SUCCESS, payload: res.data });

      }
      else if(form_data.searchBy==='vehicleRegNo'){
        res = await axios.get(`${url}/vehicles?${form_data.searchBy}=${form_data.searchTerm}`);
        const vehiCustomer=res.data[0];
        const customer=vehiCustomer.customer;
        delete vehiCustomer.customer;
    
        customer.vehicles=[];
        customer.vehicles.push(vehiCustomer);
    
        dispatch({ type: CUSTOMER_FIND_SUCCESS, payload: customer });
        }
    else if(form_data.searchBy=== 'name' || 'email' || 'contactNo'){
        res = await axios.get(`${url}/customers?${form_data.searchBy}_eq=${form_data.searchTerm}`);
        dispatch({ type: CUSTOMER_FIND_SUCCESS, payload: res.data[0] });
      }
      // console.log(res);

	} catch (error) {

		dispatch({ type: CUSTOMER_FIND_FAIL});
    // console.log(error.response);
		errMsg(error)
    
	}
};

export const CUSTOMER_EDIT = (form_data) => async (dispatch) => {
		dispatch({ type: CUSTOMER_EDIT_SUCCESS, payload: form_data });
};

export const NOTLOADING_CUSTOMER = () => async (dispatch) => {
  dispatch({ type: NOT_LOADING_CUSTOMER});
};