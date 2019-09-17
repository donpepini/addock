import React from "react";

//style
import { Row, Textarea } from "react-materialize";
import style from "../../../assets/css/Form.module.css";

const FormDescription = ({ promotion, setDescription }) => {
  return (
    <Row>
      <Textarea
        className={style.textArea}
        label="Description"
        defaultValue={promotion.description}
        onChange={setDescription}
        s={12}
      />
    </Row>
  );
};

export default FormDescription;
