export const periodicalReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PERIODICAL_PROMOTION":
      let promotions = state;
      const replace = promotions.findIndex(promotion => {
        return promotion.id === action.updated.id;
      });
      promotions.splice(replace, 1, action.updated);
      return state;
    case "DELETE_PERIODICAL_PROMOTION":
      return state.filter(promotion => {
        return promotion.id !== action.id;
      });
    case "ADD_PERIODICAL_PROMOTION":
      return [...state, action.newPromotion]
    default:
      return state;
  }
};
