import React from "react";

//style
import style from "../../../assets/css/Promotions.module.css";
import { Row, Col } from "react-materialize";

const FormDate = ({ promotion, setValidityFrom, setValidityTo }) => {
  return (
    <div className={style.marginTop}>
      <Row>
        <Col s={2}>
          <p>Validité du</p>
        </Col>
        <Col s={2}>
          <input
            type="date"
            value={promotion.validatyFrom}
            onChange={setValidityFrom}
          />
        </Col>
        <Col s={1}></Col>
        <Col s={1}>
          <p> au</p>
        </Col>
        <Col s={2}>
          <input
            type="date"
            value={promotion.validityTo}
            onChange={setValidityTo}
          />
        </Col>
      </Row>
    </div>
  );
};

export default FormDate;
