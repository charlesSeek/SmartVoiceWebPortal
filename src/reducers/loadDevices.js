const initial_state = {
	errMessage:'',
	loading:false,
	devices:[]
};
export default function(state = initial_state, action) {
  switch (action.type) {
  	case 'GET_LOAD_DEVICE_LOADING':
  	  return {...state,errMessage:'',devices:[],loading:true}
    case 'GET_LOAD_DEVICE':
      return {...state,devices:action.payload,errMessage:'',loading:false};
    case 'GET_LOAD_DEVICE_ERROR':
      return {...state,devices:[],errMessage:action.payload,loading:false};
  }

  return state;
}