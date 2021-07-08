export const types = {
  SET_MODEL: 'ORDER/SET_MODEL'
};

export const initialState = {
  model: null,
};

export default function reducer(
  state = { ...initialState },
  action
) {
  switch (action.type) {

    case types.SET_MODEL:
      return {
        ...state,
        model: action.data
      };

    default:
      return state;
  }
}
