import actionTypes from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const getdata = (state = initState, {type, payload}) => {
switch (type){
  case actionTypes.GET_REQUEST:
    return {
      ...state,
      isLoading:true,
  }
  case actionTypes.GET_SUCCESS:
    return{
      ...state,
      data:payload
    }
    case actionTypes.GET_FAILURE:
      return{
        ...state,
        isError:true
      }
    default: {
      return state;
  }

}
};
export default  getdata ;
