export const types = {
  FETCH_START: 'SERVICES/FETCH_START',
  FETCH_FULFILLED: 'SERVICES/FETCH_FULFILLED',
  FETCH_REJECTED: 'SERVICES/FETCH_REJECTED',
};

export const initialState = {
  fetch: false,
  fetchSuccess: false,
  fetchError: null,
  collection: [],
  map: {},
};

export default function reducer(
  state = { ...initialState },
  action
) {
  switch (action.type) {

    case types.FETCH_START:
      return {
        ...initialState,
        fetch: true,
        fetchSuccess: false,
        fetchError: null,
      };

    case types.FETCH_FULFILLED: {
      const map = {};
      action.data.forEach((service) => map[service.id] = service);
      return {
        ...state,
        fetch: false,
        fetchSuccess: true,
        collection: action.data,
        map,
      };
    }

    case types.FETCH_REJECTED:
      return {
        ...state,
        fetch: false,
        fetchSuccess: false,
        fetchError: action.data,
      };

    default:
      return state;
  }
}

