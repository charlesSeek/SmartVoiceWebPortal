
export default function(state = {}, action) {
  console.log('action:',action);
  switch (action.type) {
  	case 'AUTH_LOGIN':
  		return {...state,loading:true}
    case 'AUTH_USER':
      console.log('go to reducer');
      return {...state,error:'',loading:false,authenticated:true,integrator:action.payload}
    case 'AUTH_ERROR':
      return { ...state,error: action.payload,loading:false,integrator:''};
    case 'UNAUTH_USER':
      return { ...state,authenticated: false,loading:false,integrator:''};
    case 'CHANGE_CUSTOMER':
      return {...state,customer:action.payload}
    case 'CHANGE_LOCATION':
      return {...state,location:action.payload}
    case 'AUTH_LOGOUT':
      return {}
  }

  return state;
}