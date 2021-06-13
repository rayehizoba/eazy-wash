export const types = {
  FETCH_START: 'OFFERS/FETCH_START',
  FETCH_FULFILLED: 'OFFERS/FETCH_FULFILLED',
  FETCH_REJECTED: 'OFFERS/FETCH_REJECTED',
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
        collection: action.data.offers,
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

