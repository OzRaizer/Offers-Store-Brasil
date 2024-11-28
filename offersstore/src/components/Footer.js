import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="pager-inner-content content">
        <div className="download-options">
          <p>Baixe nosso aplicativo</p>
          <p>Baixe nosso aplicativo para Android e iOS</p>
          <div>
            <img src="/images/app-store.png" alt="App Store download" />
            <img src="/images/play-store.png" alt="Play Store download" />
          </div>
        </div>

        <div className="Logo-footer">
          <h1 className="Logo">
            Offers<span>Store</span>
          </h1>
          <p>
            Nosso obejtivo é oferecer produtos de qualidade,
            trazendo a máxima satisfação aos nossos clientes
          </p>
        </div>

        <div className="Links">
          <h3>Links úteis</h3>
          <ul>
            <li>
              <Link to="/">Cupons</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Políticas</Link>
            </li>
            <li>
              <Link to="/">Torne-se afiliado</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="page-inner-content">
        <hr />

        <p className="copyright">
          Copyright 2024 - Oziel Raizer - Todos Direitos Reservados
        </p>
      </div>
    </footer>
  );
}