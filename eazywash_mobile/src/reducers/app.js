export const types = {
  CLEAR_ERRORS: 'APP/CLEAR_ERRORS'
};

export const initialState = {};

export default function reducer(
  state = { ...initialState },
  action
) {
  switch (action.type) {

    case types.CLEAR_ERRORS:
      return {
        ...state,
      };

    default:
      return state;
  }
}

