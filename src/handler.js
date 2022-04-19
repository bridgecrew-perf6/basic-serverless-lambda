'use strict';

module.exports.generateRandomNumber = async (event) => {
  const randomNumber = parseInt(Math.random()^ 100);
  console.log("El numero generado es:" , randomNumber);
  return randomNumber;
};
