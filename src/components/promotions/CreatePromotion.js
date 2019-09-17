import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";

//style
import iconBack from "../../assets/img/left-arrow.png";
import style from "../../assets/css/Promotions.module.css";

//context
import { PeriodicalContext } from "../../contexts/promotionContexts/PeriodicalContext";
import { PackageContext } from "../../contexts/promotionContexts/PackageContext";

//component
import CreateForm from "./form/CreateForm";

const CreatePromotion = props => {
  const type = props.match.params.type;

  const periodicalPromotions = useContext(PeriodicalContext);
  const packagesPromotions = useContext(PackageContext);

  const createPromotion = newPromotion => {
    if (type) {
      if (type === "periodical") {
        periodicalPromotions.dispatch({
          type: "ADD_PERIODICAL_PROMOTION",
          newPromotion
        });
      } else {
        packagesPromotions.dispatch({
          type: "ADD_PACKAGE_PROMOTION",
          newPromotion
        });
      }
      props.history.push("/");
    }
  };

  return (
    <div className={style.edit}>
      <Link to="/">
        <img className={style.iconBack} src={iconBack} alt="back-arrow" />
      </Link>
      <CreateForm createPromotion={createPromotion} />
    </div>
  );
};

export default withRouter(CreatePromotion);
