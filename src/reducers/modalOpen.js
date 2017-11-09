const initial_state = {
	customerDeleteModal:false,
	addCustomerModal:false,
	addControlSystemModal:false,
  editControlSystemModal:false,
  addDeviceModal:false,
  loadDeviceModal:false
}
export default function(state = initial_state, action) {
  switch (action.type) {
  	case 'CUSTOMER_DELETE_MODAL_CHANGE':
  		return {...state,customerDeleteModal:action.payload}
  	case 'CUSTOMER_ADD_MODAL_CHANGE':
  		return {...state,addCustomerModal:action.payload}
  	case 'CUSTOMER_ADD_CONTROLSYSTEM_MODAL_CHANGE':
  		return {...state,addControlSystemModal:action.payload}
    case 'CUSTOMER_EDIT_CONTROLSYSTEM_MODAL_CHANGE':
      return {...state,editControlSystemModal:action.payload}
    case 'CUSTOMER_ADD_DEVICE_MODAL_CHANGE':
      return {...state,addDeviceModal:action.payload}
    case 'LOAD_DEVICE_MODAL_CHANGE':
      return {...state,loadDeviceModal:action.payload}
  }
  return state;
}