import React, { useState } from "react";
import uuid from "uuid/v1";

//style
import style from "../../../assets/css/Form.module.css";
import { Row, Col, TextInput } from "react-materialize";
import Select from "react-select";

const FormAddProducts = ({ setProducts }) => {
  const [inputVal, setInputVal] = useState("");
  const [product, setStateProduct] = useState({});
  const [products, setStateProducts] = useState([]);
  const addProduct = () => {
    setStateProducts([
      ...products,
      { label: product.name, value: product.name, id: product.id }
    ]);
    setInputVal("");
  };
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
        <Col s={2} className={style.marginTop}>
          <p>Ajouter des produits</p>
        </Col>

        <TextInput
          value={inputVal}
          s={4}
          onChange={e => {
            setStateProduct({ id: uuid(), name: e.target.value });
            setInputVal(e.target.value);
          }}
        />
        <Col s={2} className={style.marginTop}>
          <span
            onClick={addProduct}
            className={style.addProduct}
          >
            +
          </span>
        </Col>

        <Col s={4} className={style.marginTop}>
          <Select
            options={products}
            isMulti={true}
            onChange={selectChange}
          ></Select>
        </Col>
      </Row>
    </div>
  );
};

export default FormAddProducts;
