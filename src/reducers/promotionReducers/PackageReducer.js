export const packageReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PACKAGE_PROMOTION":
      let promotions = state;
      const replace = promotions.findIndex(promotion => {
        return promotion.id === action.updated.id;
      });
      promotions.splice(replace, 1, action.updated);
      return state;
    case "DELETE_PACKAGE_PROMOTION":
      return state.filter(promotion => {
        return promotion.id !== action.id;
      });
    case "ADD_PACKAGE_PROMOTION":
      return [...state, action.newPromotion];
    default:
      return state;
  }
};
