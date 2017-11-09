import { hashHistory,browserHistory } from 'react-router';
import axios from 'axios';
import _ from 'lodash';

export function signinUser(user) {
  	const username = user.email||'';
  	const password = user.password||'';
  	return function(dispatch) {
  		dispatch({type:'AUTH_LOGIN'});
  		const url = "https://2y7j7iy0cf.execute-api.us-east-1.amazonaws.com/v1/integrator/signin";
	  	axios.post(url, {username,password})
      .then(response => {
        // If request is good...
        // - Update state to indicate user is authenticated
        console.log('login in successfully');
        dispatch({ type:'AUTH_USER',payload:user.email});
        // - Save the JWT token
        localStorage.setItem('jwtToken', response.data.jwtToken);
        // - redirect to the route '/feature'
        hashHistory.push('/integrator');
      })
      .catch((err) =>{
          dispatch(authError(err.response.data.message));
      }) 
	}
}

export function authError(error) {
  return {
    type: 'AUTH_ERROR',
    payload: error
  };
}

export function fetchIntegratorInfo(integratorEmail,token){
  return function(dispatch){
    dispatch({type:'GET_INTEGRATOR_LOADING'});
    const url = 'https://gxzrqa69g3.execute-api.us-east-1.amazonaws.com/v1/integrator/'+integratorEmail;
    axios.get(url,{
      headers:{Authorization:token}
    })
    .then(response=>{
      const integrator = response.data.integrator||{};
      dispatch({type:'GET_INTEGRATOR',payload:integrator});

    })
    .catch(err=>{
      const errMessage = _.get(err,'err.response.data.message','Internal error')
      dispatch({
        type:'GET_INTEGRATOR_ERROR',
        payload: errMessage
      })
    })
  }
}

export function changeCustomer(customerEmail){
  return function(dispatch){
    dispatch({type:'CHANGE_CUSTOMER',payload:customerEmail})
  }
}

export function changeLocation(location){
  return function(dispatch){
    dispatch({type:'CHANGE_LOCATION',payload:location})
  }
}

export function fetchCustomerInfo(integratorEmail,customerEmail,jwtToken){
  return function(dispatch){
    dispatch({type:'GET_CUSTOMER_LOADING'});
    dispatch({type:'CHANGE_CUSTOMR',payload:customerEmail});
    const url = 'https://h2gf88qrka.execute-api.us-east-1.amazonaws.com/v1/integrator/'+integratorEmail+'/customer/'+customerEmail;
    axios.get(url,{
      headers:{Authorization:jwtToken}
    })
    .then(response=>{
      const customer = response.data.customer||{};
      console.log('customer:',customer);
      dispatch({type:'GET_CUSTOMER',payload:customer});
      hashHistory.push('/integrator/customer');

    })
    .catch(err=>{
      console.log('err:',err);
      const errMessage = _.get(err,'err.response.data.message','Internal error')
      dispatch({
        type:'GET_CUSTOMER_ERROR',
        payload: errMessage
      })
    })
  }
}

export function fetchDevices(integratorEmail,customerEmail,location,jwtToken){
  return function(dispatch){
    dispatch({type:'GET_DEVICE_LOADING'});
    dispatch({type:'CHANGE_LOCATION',payload:location});
    const url = 'https://au91xvgwng.execute-api.us-east-1.amazonaws.com/v1/integrator/'+
    integratorEmail+'/customer/'+customerEmail+'/device?room='+location;
    axios.get(url,{
      headers:{Authorization:jwtToken}
    })
    .then(response=>{
      const devices = response.data.devices||[];
      console.log('devices:',devices);
      dispatch({type:'GET_DEVICE',payload:devices});
      hashHistory.push('/integrator/customer/device');
    })
    .catch(err=>{
      console.log('err:',err);
      const errMessage = _.get(err,'err.response.data.message','Internal error');
      dispatch({type:'GET_DEVICE_ERROR',payload:errMessage})
    })
  }
}

export function fetchAutoLoadDevices(controlSystem,integratorEmail,customerEmail,jwtToken){
  return function(dispatch){
    dispatch({type:'GET_LOAD_DEVICE_LOADING'});
    const data = [
      {
        name:"Climate Control",
        type:"AC",
        location:'gym',
        controlSystem:"Williamstown, Airtopia",
        params:{
          id:96,
          type:'unit',
          group:'Home',
          label:'GYM'
        }
      },
      {
        name:"Climate Control",
        type:"AC",
        location:"office",
        controlSystem:"Williamstown, Airtopia",
        params:{
          id:375,
          type:'unit',
          group:'Home',
          label:'Office'
        }
      }
    ]
    setTimeout(function(){
      dispatch({type:'GET_LOAD_DEVICE',payload:data});
    },6000)
  }
}

export function customerDeleteModalShow(isOpen){
  return function(dispatch){
    dispatch({type:'CUSTOMER_DELETE_MODAL_CHANGE',payload:isOpen})
  }
}

export function customerAddModalShow(isOpen){
  return function(dispatch){
    dispatch({type:'CUSTOMER_ADD_MODAL_CHANGE',payload:isOpen})
  }
}

export function controlSystemModalShow(isOpen){
  return function(dispatch){
    dispatch({type:'CUSTOMER_ADD_CONTROLSYSTEM_MODAL_CHANGE',payload:isOpen})
  }
}

export function editControlSystemModalShow(controlSystem,isOpen){
  return function(dispatch){
    dispatch({type:'CHANGE_CURRENT_CONTROLSYSTEM',payload:controlSystem});
    dispatch({type:'CUSTOMER_EDIT_CONTROLSYSTEM_MODAL_CHANGE',payload:isOpen})
  }
}

export function deviceModalShow(isOpen){
  return function(dispatch){
    dispatch({type:'CUSTOMER_ADD_DEVICE_MODAL_CHANGE',payload:isOpen})
  }
}

export function loadDeviceModalShow(controlSystem,isOpen){
  console.log('action load device modal:',isOpen);
  console.log('action load device modal control system:',controlSystem);
  return function(dispatch){
    dispatch({type:'CHANGE_CURRENT_CONTROLSYSTEM',payload:controlSystem});
    dispatch({type:'LOAD_DEVICE_MODAL_CHANGE',payload:isOpen})
  }
}

export function integratorLogout(){
  return function(dispatch){
    dispatch({type:'GET_CUSTOMER_LOGOUT'});
    dispatch({type:'GET_INTEGRATOR_LOGOUT'});
    dispatch({type:'AUTH_LOGOUT'});
    localStorage.removeItem('jwtToken');
    hashHistory.push('/login');
  }
}

