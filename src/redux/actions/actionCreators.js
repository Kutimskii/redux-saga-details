import { SEARCH_SERVICES_FAILURE, SEARCH_SERVICES_SUCCESS, SEARCH_SERVICES_REQUEST,SEARCH_SERVICES_REQUEST_ID  } from "./actionsType";

  export const searchServiceRequest = () => ({
    type: SEARCH_SERVICES_REQUEST, payload: null
  });
  export const searchServiceFailure = error => ({
    type: SEARCH_SERVICES_FAILURE, payload: {error}
  });
  export const searchServiceSuccess = (items, service) => ({
    type: SEARCH_SERVICES_SUCCESS, payload: {items, service}
  });
  export const searchServiceIdRequest = (id) => ({
    type: SEARCH_SERVICES_REQUEST_ID, payload: null, search:`/${id}`
  });

