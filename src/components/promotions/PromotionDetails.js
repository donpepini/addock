import React, { useContext } from "react";
import { Link } from "react-router-dom";

//style
import style from "../../assets/css/Promotions.module.css";
import visibleLogo from "../../assets/img/visibility.png";
import notVisibleLogo from "../../assets/img/visibilityoff.png";
import editLogo from "../../assets/img/edit.png";
import deleteLogo from "../../assets/img/delete.png";

//context
import { PeriodicalContext } from "../../contexts/promotionContexts/PeriodicalContext";
import { PackageContext } from "../../contexts/promotionContexts/PackageContext";

const PromotionDetails = ({ promotion, type }) => {
  const periodicalPromotion = useContext(PeriodicalContext);
  const packagePromotion = useContext(PackageContext);

  const deletePromotion = () => {
    if (type === "periodical") {
      periodicalPromotion.dispatch({
        type: "DELETE_PERIODICAL_PROMOTION",
        id: promotion.id
      });
    } else {
      packagePromotion.dispatch({
        type: "DELETE_PACKAGE_PROMOTION",
        id: promotion.id
      });
    }
  };

  const reductionType = promotion.reductionType === "CURRENCY" ? "€" : "%";
  const promotionActive = promotion.active ? (
    <img className={style.icons} src={visibleLogo} alt="eye-logo" />
  ) : (
    <img className={style.icons} src={notVisibleLogo} alt="eye-logo" />
  );

  return (
    <tr>
      <td>{promotion.name}</td>
      <td>{promotion.validatyFrom}</td>
      <td>{promotion.validityTo}</td>
      <td>
        {promotion.reductionAmount} {reductionType}
      </td>
      <td>{promotionActive}</td>
      <td>
        <Link to={`/promotion/${type}/${promotion.id}`}>
          <img className={style.iconEdit} src={editLogo} alt="edit-logo" />
        </Link>
      </td>
      <td>
        <img
          onClick={deletePromotion}
          className={style.iconDelete}
          src={deleteLogo}
          alt="delete-logo"
        />
      </td>
    </tr>
  );
};

export default PromotionDetails;
