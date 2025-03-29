import React from 'react';
import PropTypes from 'prop-types';

import "./Recipe.css";

export const Recipe = ({ name, time, servings, calories, difficulty, image }) => {
  return (
    <li className="recipeItem">
      <h2 className="recipeTitle">{name}</h2>
      <p className="recipeTime"> Time: {time}</p>
      <p className="recipeServings">Servings: {servings}</p>
      <p className="recipeCalories">Calories: {calories}</p>
      <p className="recipeDifficulty">Difficulty: {difficulty}</p>
      <p className="description">test</p>
      <img className="recipeImage" src={image} alt={name} />
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