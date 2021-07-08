export const types = {
  FETCH_START: 'CATEGORIES/FETCH_START',
  FETCH_FULFILLED: 'CATEGORIES/FETCH_FULFILLED',
  FETCH_REJECTED: 'CATEGORIES/FETCH_REJECTED',
};

export const initialState = {
  fetch: false,
  fetchSuccess: false,
  fetchError: null,
  collection: [],
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

    case types.FETCH_FULFILLED:
      return {
        ...state,
        fetch: false,
        fetchSuccess: true,
        collection: action.data,
      };

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

