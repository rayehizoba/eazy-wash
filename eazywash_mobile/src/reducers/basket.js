export const types = {
  UPDATE_ITEM: 'BASKET/UPDATE_ITEM',
  CLEAR_ALL: 'BASKET/CLEAR_ALL',
};

export const initialState = {
  collection: [],
};

export default function reducer(
  state = {...initialState},
  action,
) {
  switch (action.type) {

    case types.UPDATE_ITEM: {
      const collection = state.collection;
      const index = collection.findIndex((item) => (
        item.cloth_id === action.data.cloth_id
        && item.service_id === action.data.service_id
      ));
      if (index < 0) {
        collection.push(action.data);
      } else {
        if (action.data.quantity === 0) {
          collection.splice(index, 1);
        } else {
          collection[index].quantity = action.data.quantity;
          collection[index].rate = action.data.rate;
        }
      }
      return {
        ...state,
        collection,
      };
    }

    case types.CLEAR_ALL:
      return {
        ...state,
        collection: [],
      };

    default:
      return state;
  }
}

