import axios,{url} from './customAxios';
// axios.defaults.withCredentials = true;

// import { history } from '../store';
import {
  EMPLOYEE_COUNT_FAIL,
	SET_LOADING_EMPLOYEE,
	COMPANY_INFO_SUCCESS
} from './types';

import { toast } from "react-toastify";
import {errMsg} from './utils';

export const COMPANY_INFO = (form_data) => async (dispatch,getState) => {
	try {
    dispatch({ type: SET_LOADING_EMPLOYEE });
    const id = getState().auth.user.cleaner.business;
		// if(name!='premium'){
		// 	toast.warn("only premium cleaners can edit");
		// 	return;
		// }
		debugger;

		const res = await axios.put(`${url}/businesses/${id}`, form_data);

    // console.log(res.data);

		dispatch({ type: COMPANY_INFO_SUCCESS, payload: res.data });
		toast.success("EMPLOYEE updated scuccessfully...");
	} catch (error) {

		dispatch({ type: EMPLOYEE_COUNT_FAIL});
		errMsg(error)
	}
};

