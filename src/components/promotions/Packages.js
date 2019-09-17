import React, { useContext } from "react";
import { Link } from "react-router-dom";

//style
import { Table, Button } from "react-materialize";
import style from "../../assets/css/Promotions.module.css";

//context
import { PackageContext } from "../../contexts/promotionContexts/PackageContext";

//component
import PromotionsList from "./PromotionsList";

const Packages = () => {
  const promotions = useContext(PackageContext);
  return (
    <div>
      <Link to="/promotion/package/create">
        <Button>+ Ajouter une promotion </Button>
      </Link>
      <p>
        Retrouvez ici l'ensemble des promotions packages disponibles pour vos
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
        <PromotionsList promotions={promotions.promotions} type="package" />
      </Table>
    </div>
  );
};

export default Packages;
