import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FaRegFileAlt } from 'react-icons/fa';
import santander from '../../assets/santander.jpg'

import './styles.scss';

function CardOffer() {
  const dispatch = useDispatch();
  const score = useSelector(state => state.score.initial_score);

  function upgradeScore() {
    var min = Math.ceil(score);
    var max = Math.floor(100);
    dispatch({ type: 'INCREASE_SCORE', nw_score: Math.floor(Math.random() * (max - min) + min) })
  }

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