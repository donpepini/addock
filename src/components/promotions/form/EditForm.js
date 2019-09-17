import React, { Component } from "react";

//style
import style from "../../../assets/css/Form.module.css";
import { Button } from "react-materialize";

//components
import FormName from "./FormName";
import FormDescription from "./FormDescription";
import FormActive from "./FormActive";
import FormProducts from "./FormProducts";
import FormDate from "./FormDate";
import FormReduction from "./FormReduction";

class EditForm extends Component {
  state = {
    ...this.props.promotion
  };
  handleSubmit = e => {
    e.preventDefault();
    const isEmpty = Object.values(this.state).some(x => x === null || x === "");
    if (!isEmpty) {
      this.props.editPromotion(this.state);
    } else {
      return alert("Veuillez remplir tous les champs");
    }
  };
  setName = e => {
    if (e.target.value) {
      this.setState({
        name: e.target.value
      });
    }
  };
  setDescription = e => {
    if (e.target.value) {
      this.setState({
        description: e.target.value
      });
    }
  };
  setActive = () => {
    this.setState({
      active: !this.state.active
    });
  };
  setProducts = selected => {
    if (selected) {
      this.setState({
        products: selected
      });
    }
  };
  setValidityFrom = e => {
    if (Date.parse(e.target.value)) {
      this.setState({
        validatyFrom: e.target.value
      });
    }
  };
  setValidityTo = e => {
    if (Date.parse(e.target.value)) {
      this.setState({
        validityTo: e.target.value
      });
    }
  };
  setReductionAmount = e => {
    if (e.target.value) {
      this.setState({
        reductionAmount: parseInt(e.target.value)
      });
    }
  };
  setReductionType = e => {
    this.setState({
      reductionType: e.target.value
    });
  };
  render() {
    const promotion = this.props.promotion;
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <FormName promotion={this.state} setName={this.setName} />
        <FormDescription
          promotion={this.state}
          setDescription={this.setDescription}
        />
        <FormActive promotion={this.state} setActive={this.setActive} />
        <FormProducts promotion={promotion} setProducts={this.setProducts} />
        <FormDate
          promotion={this.state}
          setValidityFrom={this.setValidityFrom}
          setValidityTo={this.setValidityTo}
        />
        <FormReduction
          promotion={this.state}
          setReductionType={this.setReductionType}
          setReductionAmount={this.setReductionAmount}
        />
        <Button>Enregistrer</Button>
      </form>
    );
  }
}

export default EditForm;
