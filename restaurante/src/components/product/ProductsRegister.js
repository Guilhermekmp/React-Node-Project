import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addProduct } from "../../actions/productAction";
import TextFieldGroup from "../common/TextFieldGroup";


class ProductsRegister extends Component {
  produto = {
    name: "",
    type: "",
    value: "",
    photo: "",
    naoTemValorNulo() {
      return this.name && this.type && this.value && this.photo;
    }
  }

  saveProduct = (e) => {
    e.preventDefault()
    console.log(this.produto);
    if(this.produto.name){
      this.props.addProduct(this.produto);
    }
  }

  render() {
    return (
      <div>
        <header>Cadastro Produto</header>
        <form onSubmit={this.saveProduct}>
          <div>
            <label>Nome do produto</label>
            <input
            onChange={(event) => this.produto.name = event.target.value}
          />
          </div>
          <div>
            <label>Tipo do produto</label>
            <input
            onChange={(event) => this.produto.type = event.target.value}
          />
          </div>
          <div>
            <label>Valor do produto</label>
            <input
            onChange={(event) => this.produto.value = event.target.value}
          />
          </div>
          <div>
            <label>Foto do produto</label>
              <input
            onChange={(event) => this.produto.photo = event.target.value}
          />
          </div>

          <button onClick={this.saveProduct}>Salvar</button>
        </form>
      </div>
    );
  }
}

ProductsRegister.propTypes = {
  addProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  product: state.product,
});


export default connect(mapStateToProps, { addProduct })(ProductsRegister);
