import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addProduct } from "../../actions/productAction";

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
    if (this.produto.name) {
      this.props.addProduct(this.produto);
    }
    alert("Produto salvo com sucesso!!")
  }

  render() {
    return (
      <div>
        <header style={{
          fontSize: 25,
          textAlign: "center",
          marginTop: 15,
          fontWeight: "bold",
          color: "lightpink",
          marginBottom: 15
        }}>Cadastro  de Produto</header>
        <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }} onSubmit={this.saveProduct}>
          <div style={{
            width: "90%", alignItems: "center",
            display: "flex",
            flexDirection: "column",
            marginTop: 30
          }}>
            <div style={{
              display: "flex", flexDirection: "row", width: "36%",
              justifyContent: "space-between"
            }}>
              <label style={{
                fontSize: 18,
                fontWeight: 500,
                marginBottom: 5,
              }}>Nome do produto</label>
              <input style={{ marginBottom: 5 }}
                onChange={(event) => this.produto.name = event.target.value}
              />
            </div>
            <div style={{
              display: "flex", flexDirection: "row", width: "36%",
              justifyContent: "space-between"
            }}>
              <label style={{
                fontSize: 18,
                fontWeight: 500,
                marginBottom: 5,
              }}>Tipo do produto</label>
              <input style={{ marginBottom: 5 }}
                onChange={(event) => this.produto.type = event.target.value}
              />
            </div>
            <div style={{
              display: "flex", flexDirection: "row", width: "36%",
              justifyContent: "space-between"
            }}>
              <label style={{
                fontSize: 18,
                fontWeight: 500,
                marginBottom: 5,
              }}>Valor do produto</label>
              <input style={{ marginBottom: 5 }}
                onChange={(event) => this.produto.value = event.target.value}
              />
            </div>
            <div style={{
              display: "flex", flexDirection: "row", width: "36%",
              justifyContent: "space-between"
            }}>
              <label style={{
                fontSize: 18,
                fontWeight: 500,
                marginBottom: 5,
              }}>Foto do produto</label>
              <input style={{ marginBottom: 5 }}
                onChange={(event) => this.produto.photo = event.target.value}
              />
            </div>
          </div>

          <button style={{
            backgroundColor: "rgb(195, 0, 69)",
            border: 0,
            width: "20%",
            fontSize: 18,
            color: "white",
            borderRadius: 15,
            marginTop: "10%",
            height: 40
          }} onClick={this.saveProduct}>Salvar</button>
        </form >
      </div >
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
