const initialState = {
  cats: {
    1: {
      name: "Charlie",
      activity: "Hissing",
    },
  },
};

export const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTION_ADD_CAT": {
      const { name, activity } = action.payload;
      const id =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
      return {
        cats: {
          ...state.cats,
          [id]: { name, activity },
        },
      };
    }
    default:
      return state;
  }
};
