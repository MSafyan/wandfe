import {
	COMPANY_INFO_SUCCESS,
	COMPANY_INFO_FAIL,
} from "../actions/types";

const INITAL_AUTH_STATE = {
	employee: null,
	loading: false,
	employeeList:[],
	count:10,
	edit:false,
	company:null
};

export default function authReducer(
	state = INITAL_AUTH_STATE,
	action
){
	switch (action.type) {
		case COMPANY_INFO_SUCCESS:
			return {
				...state,
				company:action.payload,
				loading:false
			};
		case COMPANY_INFO_FAIL:
			return {
			...state,
			company:null,
			loading:false
		};
		default:
			return state;
	}
}

