import React from "react";

//style
import style from "../../../assets/css/Form.module.css";
import { Row, Col } from "react-materialize";
import Select from "react-select";

const FormProducts = ({ promotion, setProducts }) => {
  const products = promotion.products.map(product => {
    return { value: product.name, label: product.name, id: product.id };
  });
  const selectChange = selected => {
    if (selected) {
      const selectedProducts = selected.map(select => {
        return { name: select.value, id: select.id };
      });
      setProducts(selectedProducts);
    }
  };
  return (
    <div className={style.marginTop}>
      <Row>
        <div>
          <Col s={4} className={style.marginTop20}>
            Sélectionnez vos produits
          </Col>
          <Col s={8}>
            <Select
              options={products}
              isMulti={true}
              onChange={selectChange}
            ></Select>
          </Col>
        </div>
      </Row>
    </div>
  );
};

export default FormProducts;
