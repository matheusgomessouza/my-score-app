import React, { ReactElement, useContext } from 'react';
import { ScoreContext } from '../../contexts/ScoreContext';

import './styles.scss';
import { AiOutlinePercentage } from 'react-icons/ai';
import protect from '../../assets/id_protection.jpg';

function CardDiscount(): ReactElement {
	const { upgradeScore }: any = useContext(ScoreContext);

	return (
		<div className="box_offer">
			<div className="discount-heading">
				<strong>
					<AiOutlinePercentage /> Desconto no plano de proteção
				</strong>
				<span>Está disponível pra você um desconto!</span>
			</div>

			<div className="grid_sale_offer">
				<img src={protect} alt="Plano de proteção ao RG" />
				<span>
					<p className="offer"> R$ 2500,00 </p>
					por R$ 1000,00
				</span>
			</div>

			<button type="submit" onClick={upgradeScore()}>
				Ver desconto
			</button>
		</div>
	);
}

export default CardDiscount;
