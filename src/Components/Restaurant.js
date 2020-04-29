import React from 'react';
import './Restaurant.scss';

const Restaurant = ({ restaurant }) => {
	return (
		<div className="restaurant">
			<img className="restaurant__img" src={restaurant.img} alt={`${restaurant.name} logo`} /> 
			<div className="restaurant__info">
				<p className="restaurant__info__name">{restaurant.name}</p>
				<p className="restaurant__info__address">{restaurant.address}</p>
				<p className="restaurant__info__price">Price point: {restaurant.price}</p> 
				<p className="restaurant__info__area">{restaurant.area}</p>
			</div>
		</div>
	);
}

export default Restaurant;