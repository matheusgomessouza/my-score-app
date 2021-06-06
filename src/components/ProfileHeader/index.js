import React from 'react';
import { useSelector } from 'react-redux';

import { FiChevronUp } from 'react-icons/fi';
import './styles.scss'

import CardOffer from '../CardOffer'
import CardCredit from '../CardCredit';
import CardProtect from '../CardProtect';
import CardDiscount from '../CardDiscount';


export default function ProfileHeader() {
  const score = useSelector(state => state.score.initial_score);

  return (
    <>
      <header className={
        score < 30 ? "containerHeader container_bg_level_low" 
        : score < 60 ? "containerHeader container_bg_level_medium" 
        : score > 61 ? "containerHeader container_bg_level_high" 
        : ""
      }>
        <img 
          src="https://avatars.githubusercontent.com/u/62625213?v=4" 
          alt="Usuário" 
        />
        <strong>Matheus G. de Souza</strong>
      </header>

      <div className="score_info_status">
        <div className="score_level">
          <strong>{score}</strong>
          <span>Sua pontuação é baixa</span>
          <a href="/">Saiba mais <FiChevronUp/></a>
        </div>

        <div className="grid_progressive_bar">
        <div className="clmn_grid_low">
          <span>0 a 30</span>
          <div className="bar_level_low"></div>
        </div>

        <div className="clmn_grid_medium">
          <span>31 a 60</span>
          <div className="bar_level_medium"></div>
        </div>

        <div className="clmn_grid_high">
          <span>61 a 100</span>
          <div className="bar_level_high"></div>
        </div>
      </div>
      </div>
    
      <div className="score_opportunities">
        { score < 30 &&
           <CardOffer />
        }

        { (score >= 31 && score <= 60) &&
          <CardCredit />
        }
        
        { score > 50 &&
          <CardProtect />
        }
        
        { score > 90 &&
          <CardDiscount />
        }  
      </div>
    </>
  );
}


