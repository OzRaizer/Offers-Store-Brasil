import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return <header>
    <div className='inner-content'>
      <div className='left-side'>
        <h2>Dê Um Novo Visual Ao Seu Escritório!</h2>
        <p>Proporcionamos estética, conforto e soluções tecnológicas para sua, casa, escritório, setup gamer
          e muito mais, desde 2020.
        </p>
        <Link to="/products"></Link>
          <span>Ver Agora</span>
          <FontAwesomeIcon icon={faChevronCircleRight} />
      </div>
      <div className='right-side'></div>
    </div>
  </header>
    
  
}
