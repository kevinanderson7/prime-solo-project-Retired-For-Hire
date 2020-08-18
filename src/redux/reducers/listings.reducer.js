const listingsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_LISTINGS':
      return action.payload;
    default:
      return state;
  }
};

export default listingsReducer;
