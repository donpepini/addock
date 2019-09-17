import React from "react";

//component
import PromotionDetails from "./PromotionDetails";

const PromotionsList = ({ promotions, type }) => {

  //sort promotions by date
  const promotionsByDate = promotions.sort((a, b) => {
    return new Date(b.validatyFrom) - new Date(a.validatyFrom);
  });
  return (
    <tbody>
      {promotionsByDate.map(promotion => {
        return (
          <PromotionDetails
            key={promotion.id}
            promotion={promotion}
            type={type}
          />
        );
      })}
    </tbody>
  );
};

export default PromotionsList;
