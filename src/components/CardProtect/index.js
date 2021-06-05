import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import protect from '../../assets/id_protection.jpg';
import { AiOutlineSafetyCertificate } from "react-icons/ai";

function CardProtect() {
  const dispatch = useDispatch();
  const score = useSelector(state => state.score.initial_score);

  function upgradeScore() {
    var min = Math.ceil(score);
    var max = Math.floor(99);
    dispatch({ type: 'INCREASE_SCORE', nw_score: Math.floor(Math.random() * (max - min) + min) })
  }

  return (
    <div className="box_offer">
      <div className="credit-heading">
        <strong><AiOutlineSafetyCertificate/> Plano de proteção</strong>
        <span>Está disponível pra você um plano de proteção ao RG!</span>
      </div>
      
      <div className="grid_sale_offer">
        <img src={protect} alt="Plano de proteção ao RG" />
        <span> 
          <p className="credit"> Seus dados sempre seguros </p>
          por R$ 2500,00
        </span>
      </div>

      <button type="submit" onClick={upgradeScore}>Ver plano</button>
    </div>  
  );
}

export default CardProtect;