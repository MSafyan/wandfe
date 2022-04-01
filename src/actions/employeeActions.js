import axios,{url} from './customAxios';
// axios.defaults.withCredentials = true;
import moment from 'moment';

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
		debugger;
    const id = getState().auth.user.cleaner.business;
		// if(name!='premium'){
		// 	toast.warn("only premium cleaners can edit");
		// 	return;
		// }
		const service_data={
			bathroomDuration:form_data.bathroomDuration,
			kitchenDuration:form_data.kitchenDuration,
			bedroomDuration:form_data.bedroomDuration,
			livingroomDuration:form_data.livingroomDuration,
			ratePerHour:form_data.ratePerHour
		}

		const schedule_data={
			available:form_data.available,
			startTime: moment(form_data.startTime).format('HH:mm:ss.SSS'),
			endTime: moment(form_data.endTime).format('HH:mm:ss.SSS'),
			days:form_data.days	
		}

		const res = await axios.put(`${url}/businesses/${id}`, form_data);
		await axios.post(`${url}/services`, service_data);
		await axios.post(`${url}/schedules`, schedule_data);

    // console.log(res.data);

		dispatch({ type: COMPANY_INFO_SUCCESS, payload: res.data });
		toast.success("EMPLOYEE updated scuccessfully...");
	} catch (error) {

		dispatch({ type: EMPLOYEE_COUNT_FAIL});
		errMsg(error)
	}
};

