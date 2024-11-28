import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function ExclusiveSection() {
  return (
    <div className="exclusive-section">
      <div className="page-inner-content">
        <div className="content">
          <div className="left-side">
            <h2>Smart Band 9</h2>
            <p>
              O Smart Band 9 Tela AMOLED de 1,62” com brilho incrível e design personalizável. 
              Monitora frequência cardíaca, SpO2, sono e oferece mais de 150 modos de exercícios. 
              Versátil, pode ser usada no pulso, como pingente ou clipe. Bateria de até 21 dias com 
              recarga rápida. Exclusividade Xiaomi com acesso a livros digitais.
            </p>
            <Link to="/products" className="see-more-btn">
              <span>Ver Agora</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </div>
          <div className="right-side">
            <img src="/images/exclusive.png" alt="Smart Band 4" />
          </div>
        </div>
      </div>
    </div>
  );
}