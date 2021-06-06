import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles.scss';
import { GoCreditCard } from 'react-icons/go';
import nubank from '../../assets/nubank.jpg';

function CardCredit() {
  const dispatch = useDispatch();
  const score = useSelector(state => state.score.initial_score);

  function upgradeScore() {
    var min = Math.ceil(score);
    var max = Math.floor(101);
    dispatch({ type: 'INCREASE_SCORE', nw_score: Math.floor(Math.random() * (max - min) + min) })
  }

  return (
    <div className="box_offer">
      <div className="credit-heading">
        <strong><GoCreditCard/> Propostas de crédito</strong>
        <span>Encontramos uma oferta de cartão de crédito!</span>
      </div>
      
      <div className="grid_sale_offer">
        <img src={nubank} alt="Nubank" />
        <span> 
          <p className="credit"> Anuidade Grátis </p>
          Limite de R$ 8000,00
        </span>
      </div>

      <button type="submit" onClick={upgradeScore}>Ver oferta</button>
    </div>  
  );
}

export default CardCredit;