import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";

//style
import iconBack from "../../assets/img/left-arrow.png";
import style from "../../assets/css/Promotions.module.css";

//context
import { PeriodicalContext } from "../../contexts/promotionContexts/PeriodicalContext";
import { PackageContext } from "../../contexts/promotionContexts/PackageContext";

//component
import EditForm from "./form/EditForm";

const EditPromotion = props => {
  const type = props.match.params.type;
  const id = parseInt(props.match.params.id);
  const periodicalPromotions = useContext(PeriodicalContext);
  const packagesPromotions = useContext(PackageContext);
  let promotions =
    type === "periodical"
      ? periodicalPromotions.promotions
      : packagesPromotions.promotions;

  const promotion = promotions.find(prom => prom.id === id);
  const editPromotion = updated => {
    if (type === "periodical") {
      periodicalPromotions.dispatch({
        type: "UPDATE_PERIODICAL_PROMOTION",
        updated
      });
    } else {
      packagesPromotions.dispatch({
        type: "UPDATE_PACKAGE_PROMOTION",
        updated
      });
    }
    props.history.push("/");
  };
  return (
    <div className={style.edit}>
      <Link to="/">
        <img className={style.iconBack} src={iconBack} alt="back-arrow" />
      </Link>
      <EditForm promotion={promotion} editPromotion={editPromotion} />
    </div>
  );
};

export default withRouter(EditPromotion);
