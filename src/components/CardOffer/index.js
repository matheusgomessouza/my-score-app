import React, { useContext } from 'react';
import { ScoreContext } from '../../contexts/ScoreContext'; 

import { FaRegFileAlt } from 'react-icons/fa';
import santander from '../../assets/santander.jpg'

import './styles.scss';

function CardOffer() {
  const { upgradeScore } = useContext(ScoreContext);

  return (
    <div className="box_offer">
      <div className="offer-heading">
        <strong><FaRegFileAlt/> Negocie suas dívidas</strong>
        <span>Você possui uma pendência com </span>
      </div>
      
      <div className="grid_sale_offer">
        <img src={santander} alt="Santander" />
        <span> 
          <p> R$ 3600,00 </p>
          por R$ 1800,00
        </span>
      </div>

      <button type="submit" onClick={upgradeScore}>Negociar agora</button>
    </div>  
    );
}

export default CardOffer;