import { SEARCH_SERVICES_FAILURE, SEARCH_SERVICES_SUCCESS, SEARCH_SERVICES_REQUEST,SEARCH_SERVICES_REQUEST_ID } from "../actions/actionsType";
const initialState = { items: [], loading: false, error: null, service:{} };
export default function servicesReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_SERVICES_REQUEST:
      return {...state, loading: true, error: null};
    case SEARCH_SERVICES_REQUEST_ID:
      return {...state, loading: true, error: null};
    case SEARCH_SERVICES_FAILURE:
      const {error} = action.payload;
      return {...state, loading: false, error};
    case SEARCH_SERVICES_SUCCESS:
      debugger
      let {items, service} = action.payload;
      if(items===null){
        items = state.items
      }
      return {...state, items,service, loading: false, error: null};
    default:
    return state;
  }
}