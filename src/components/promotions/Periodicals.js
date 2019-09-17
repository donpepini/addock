import React, { useContext } from "react";
import { Link } from "react-router-dom";

//style
import { Table, Button } from "react-materialize";
import style from "../../assets/css/Promotions.module.css";

//context
import { PeriodicalContext } from "../../contexts/promotionContexts/PeriodicalContext";

//component
import PromotionsList from "./PromotionsList";

const Periodicals = () => {
  const promotions = useContext(PeriodicalContext);
  return (
    <div>
      <Link to="/promotion/periodical/create">
        <Button>+ Ajouter une promotion </Button>
      </Link>
      <p>
        Retrouvez ici l'ensemble des promotions périodiques disponibles pour vos
        produits{" "}
      </p>
      <Table className={style.table} hoverable>
        <thead className={style.thead}>
          <tr>
            <th>Nom</th>
            <th>Début de validité</th>
            <th>Fin de validité</th>
            <th>Montant de la réduction</th>
            <th>Activé</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <PromotionsList promotions={promotions.promotions} type="periodical" />
      </Table>
    </div>
  );
};

export default Periodicals;
