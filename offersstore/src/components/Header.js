import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="inner-content">
        <div className="left-side">
          <h2>Tecnologia e Conforto para Todos os Ambientes</h2>
          <p>
          Encontre eletrônicos de ponta para sua casa, setup gamer, 
          escritório e muito mais. Qualidade, inovação e ofertas imperdíveis em um só lugar!
          </p>
          <Link to="/products" className="see-more-btn">
            <span>Ver Agora</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
        <div className="right-side">
          <img src="/images/header-image.png" alt="Products" />
        </div>
      </div>
    </header>
  );
}