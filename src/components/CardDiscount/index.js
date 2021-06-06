import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles.scss';
import { AiOutlinePercentage } from 'react-icons/ai';
import protect from '../../assets/id_protection.jpg';

function CardDiscount() {
    const dispatch = useDispatch();
    const score = useSelector(state => state.score.initial_score);

    function upgradeScore() {
      var min = Math.ceil(score);
      var max = Math.floor(100);
      dispatch({ type: 'INCREASE_SCORE', nw_score: Math.floor(Math.random() * (max - min) + min) })
    }

  return (
    <div className="box_offer">
      <div className="discount-heading">
        <strong><AiOutlinePercentage/> Desconto no plano de proteção</strong>
        <span>Está disponível pra você um desconto!</span>
      </div>
      
      <div className="grid_sale_offer">
        <img src={protect} alt="Plano de proteção ao RG" />
        <span> 
          <p className="offer"> R$ 2500,00 </p>
          por R$ 1000,00
        </span>
      </div>

      <button type="submit" onClick={upgradeScore}>Ver desconto</button>
    </div>  
  );
}

export default CardDiscount;