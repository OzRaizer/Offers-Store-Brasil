import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

export default function Product({
  id,
  image,
  name,
  rate,
  price,
  addProductToCart,
}) {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <p className="rate">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
      <p className="price">
        <span>R$</span> {price}
      </p>

      <div className="buttons">
        <Link to="/products/123/checkout" className="btn-icon">
          <span>Comprar</span>
          <FontAwesomeIcon icon={faDollarSign} />
        </Link>
        <button
          onClick={() => addProductToCart(id)}
          className="btn-icon add-to-cart-btn"
        >
          <span>Adicionar ao carrinho</span>
        </button>
      </div>
    </div>
  );
}