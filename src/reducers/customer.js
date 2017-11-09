const initial_state = {
	errMessage:'',
	loading:false,
	customer:{
		rooms:[],
    controlSystems:[]
	}
};
export default function(state = initial_state, action) {
  switch (action.type) {
  	case 'GET_CUSTOMER_LOADING':
  	  return {...state,errMessage:'',customer:{rooms:[],controlSystems:[]},loading:true}
    case 'GET_CUSTOMER':
      return {...state,customer:action.payload,errMessage:'',loading:false};
    case 'GET_CUSTOMER_ERROR':
      return {...state,customer:{rooms:[],controlSystems:[]},errMessage:action.payload,loading:false};
    case 'GET_CUSTOMER_LOGOUT':
      return {...initial_state}
  }

  return state;
}