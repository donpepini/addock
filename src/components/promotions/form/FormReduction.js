import React from "react";

//style
import style from "../../../assets/css/Form.module.css";
import { Row, Col, TextInput } from "react-materialize";

const FormReduction = ({ promotion, setReductionType, setReductionAmount }) => {
  const selected = () => {
    if (promotion.reductionType) {
      if (promotion.reductionType === "CURRENCY") {
        return "CURRENCY";
      } else {
        return "PERCENTAGE";
      }
    } else {
      return "";
    }
  };

  return (
    <div className={style.marginTop}>
      <Row>
        <TextInput
          s={3}
          type="number"
          label="Montant de la remise"
          value={promotion.reductionAmount}
          onChange={setReductionAmount}
        />
        <Col s={6}>
          <select
            defaultValue={selected()}
            style={{ display: "block", marginTop: "20px", width: "60px" }}
            onChange={setReductionType}
          >
            <option value=""></option>
            <option value="CURRENCY">€</option>
            <option value="PERCENTAGE">%</option>
          </select>
        </Col>
      </Row>
    </div>
  );
};

export default FormReduction;
