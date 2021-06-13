export const types = {
  UPDATE_ITEM: 'CART/UPDATE_ITEM'
};

export const initialState = {
  collection: [],
};

export default function reducer(
  state = { ...initialState },
  action
) {
  switch (action.type) {

    case types.UPDATE_ITEM:
      return {
        ...state,
      };

    default:
      return state;
  }
}

