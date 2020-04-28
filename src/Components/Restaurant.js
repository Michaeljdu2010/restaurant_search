import React from 'react';
import './Restaurant.scss';

const Restaurant = ({ restaurant }) => {
	return (
		<div className="restaurant">
			<img className="restaurant__img" src={restaurant.img} alt={`${restaurant.name} logo`} /> 
			<div className="restaurant__info">
				<p> {restaurant.name} </p>
				<p> {restaurant.address} </p>
				<p> Price point: {restaurant.price} </p> 
				<p> {restaurant.area} </p>
			</div>
		</div>
	);
}

export default Restaurant;