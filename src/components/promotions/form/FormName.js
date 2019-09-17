import React from "react";

//style
import { Row, TextInput } from "react-materialize";

const FormName = ({ promotion, setName }) => {
  return (
    <Row>
      <TextInput
        label="Titre"
        defaultValue={promotion.name}
        onChange={setName}
        s={6}
      />
    </Row>
  );
};

export default FormName;
