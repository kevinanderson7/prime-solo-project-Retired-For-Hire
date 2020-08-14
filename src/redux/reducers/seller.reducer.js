const sellerReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SELLER':
      return action.payload;
    default:
      return state;
  }
};

export default sellerReducer;
