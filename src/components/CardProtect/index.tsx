import React, { useContext } from 'react';
import { ScoreContext } from '../../contexts/ScoreContext';

import protect from '../../assets/id_protection.jpg';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';

import './styles.scss';

function CardProtect() {
	const { upgradeScore }: any = useContext(ScoreContext);

	return (
		<div className="box_offer">
			<div className="protect-heading">
				<strong>
					<AiOutlineSafetyCertificate /> Plano de proteção
				</strong>
				<span>Está disponível pra você um plano de proteção ao RG!</span>
			</div>

			<div className="grid_sale_offer">
				<img src={protect} alt="Plano de proteção ao RG" />
				<span>
					<p className="credit"> Seus dados sempre seguros </p>
					por R$ 2500,00
				</span>
			</div>

			<button type="submit" onClick={upgradeScore}>
				Ver plano
			</button>
		</div>
	);
}

export default CardProtect;
