import React from 'react';
import PropTypes from 'prop-types';

export const Recipe = ({ name, time, servings, calories, difficulty, image }) => {
  return (
    <li>
      <h2>{name}</h2>
      <p> Time: {time}</p>
      <p>Servings: {servings}</p>
      <p>Calories: {calories}</p>
      <p>Difficulty: {difficulty}</p>
      <img src={image} alt={name} />
    </li>
  );
};

Recipe.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  servings: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  difficulty: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};