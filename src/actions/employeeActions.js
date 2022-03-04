import axios,{url} from './customAxios';
// axios.defaults.withCredentials = true;

// import { history } from '../store';
import {
  EMPLOYEE_LIST_SUCCESS,
  EMPLOYEE_LIST_FAIL,
  EMPLOYEE_COUNT_SUCCESS,
  EMPLOYEE_COUNT_FAIL,
  EMPLOYEE_EDIT_SUCCESS,
  EMPLOYEE_UPDATE_SUCCESS,
  EMPLOYEE_UPDATE_FAIL,
	SET_LOADING_EMPLOYEE
} from './types';

import { toast } from "react-toastify";
import {errMsg} from './utils';

export const EMPLOYEE_UPDATE = (form_data) => async (dispatch,getState) => {
	try {
    // console.log(form_data)
    dispatch({ type: SET_LOADING_EMPLOYEE });
    const {id} = getState().employee.employee;

    const data={
      type:form_data.type
    };

		const res = await axios.put(`${url}/users/${id}`, data);

    // console.log(res.data);

		dispatch({ type: EMPLOYEE_UPDATE_SUCCESS, payload: res.data });
		toast.success("EMPLOYEE updated scuccessfully...");
	} catch (error) {

		dispatch({ type: EMPLOYEE_UPDATE_FAIL});
		errMsg(error)
	}
};

export const EMPLOYEE_LIST = () => async (dispatch) => {
	try {
    dispatch({ type: SET_LOADING_EMPLOYEE });

		const res = await axios.get(`${url}/users`);
    // console.log(res.data);

		dispatch({ type: EMPLOYEE_LIST_SUCCESS, payload: res.data });
	} catch (error) {

		dispatch({ type: EMPLOYEE_LIST_FAIL});
		errMsg(error)
    
	}
};

export const EMPLOYEE_COUNT = () => async (dispatch) => {
	try {
    dispatch({ type: SET_LOADING_EMPLOYEE });

		const res = await axios.get(`${url}/users/count`);
    // console.log(res.data);

		dispatch({ type: EMPLOYEE_COUNT_SUCCESS, payload: res.data });
	} catch (error) {

		dispatch({ type: EMPLOYEE_COUNT_FAIL});
		errMsg(error)
    
	}
};

export const EMPLOYEE_EDIT = (form_data) => async (dispatch) => {
		dispatch({ type: EMPLOYEE_EDIT_SUCCESS, payload: form_data });
};

