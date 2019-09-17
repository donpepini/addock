import React from "react";

//style
import { Row, Switch, Col } from "react-materialize";

const FormActive = ({ promotion, setActive }) => {
  return (
    <Row>
      <Col s={2}>Activer la promotion</Col>
      <Col s={2}>
        <Switch
          offLabel=""
          onLabel=""
          checked={promotion.active}
          onChange={setActive}
        />
      </Col>
    </Row>
  );
};

export default FormActive;
