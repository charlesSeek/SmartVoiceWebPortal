const initial_state = {
	errMessage:'',
  loading:false,
  controlSystem:{
    Name:'',
    ControlSystem:'',
    Params:{}
  }
};
export default function(state = initial_state, action) {
  switch (action.type) {
  	case 'CHANGE_CURRENT_CONTROLSYSTEM':
  	  return {...state,controlSystem:action.payload}
  }

  return state;
}