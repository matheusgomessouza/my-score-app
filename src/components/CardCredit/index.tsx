import React, { useContext } from 'react';
import { ScoreContext } from '../../contexts/ScoreContext'; 

import './styles.scss';
import { GoCreditCard } from 'react-icons/go';
import nubank from '../../assets/nubank.jpg';
import inter from '../../assets/inter.jpg';

export function CardCredit() {
  const  { upgradeScore }: any  = useContext(ScoreContext);

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

export function CardCreditTwo() {
  const { upgradeScore }: any  = useContext(ScoreContext);

  return (
    <div className="box_offer">
      <div className="credit-heading">
        <strong><GoCreditCard/> Propostas de crédito</strong>
        <span>Encontramos uma oferta de cartão de crédito!</span>
      </div>
      
      <div className="grid_sale_offer">
        <img src={inter} alt="Banco Inter" />
        <span> 
          <p className="credit"> Anuidade Grátis </p>
          Limite de R$ 6000,00
        </span>
      </div>

      <button type="submit" onClick={upgradeScore}>Ver oferta</button>
    </div>  
  );
}