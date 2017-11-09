const initial_state = {
	errMessage:'',
	loading:false,
	integrator:{
		customers:[]
	}
};
export default function(state = initial_state, action) {
  switch (action.type) {
  	case 'GET_INTEGRATOR_LOADING':
  	  return {...state,errMessage:'',integrator:{customers:[]},loading:true}
    case 'GET_INTEGRATOR':
      return {...state,integrator:action.payload,errMessage:'',loading:false};
    case 'GET_INTEGRATOR_ERROR':
      return {...state,integrator:{customers:[]},errMessage:action.payload,loading:false};
    case 'GET_INTEGRATOR_LOGOUT':
      return initial_state
  }

  return state;
}