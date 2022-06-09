import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProducts } from "../../actions/productAction";
import ProductFeed from "./ProductFeed";
import { Link } from "react-router-dom";

class Products extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    let { products } = this.props.product;

    return (
      <div>
        <div style={{
          display: "flex",
          backgroundColor: "lightpink",
          height: 60,
          alignItems: "center",
          paddingLeft: 20,
          paddingRight: 20,
          marginBottom: 50,
        }}>
          <Link style={{
            textDecoration: "none", marginRight: 50,
            fontSize: 18,
            fontWeight: 500
          }} to="/orders"> <p style={{ margin: 0, color: "white" }}>Pedidos</p> </Link>
          <Link style={{
            textDecoration: "none", marginRight: 50,
            fontSize: 18,
            fontWeight: 500
          }} to="/products/register"><p style={{ margin: 0, color: "white" }}> Cadastrar novo Produto</p> </Link>

        </div>
        <div style={{
          display: "flex",
          flexDirection: " column",
          alignItems: "center"
        }}>
          <h1 style={{ color: "lightpink", marginBottom: 90 }}>Produtos</h1>
          <div>
            <ProductFeed products={products} />
          </div>
        </div >
      </div >
    );
  }
}

Products.propTypes = {
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { getProducts })(Products);
