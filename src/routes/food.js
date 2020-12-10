'use strict';

const express = require('express');
const Foods = require('../models/food');
const foods = new Foods();

const router = express.Router();

router.get('/foods', getFoods);
router.get('/foods/:id', getOneFood);
router.post('/foods', createFood);
router.put('/foods/:id', updateFood);
router.delete('/foods/:id', deleteFood);

function getFoods(req, res){
  const allFoods = foods.get();
  res.status(200).json(allFoods);
}

function getOneFood(req, res){
  const id = req.params.id;
  const oneFood = foods.get(id);
  res.status(200).json(oneFood);
}

function createFood(req, res){
  const obj = req.body;
  const newFood = foods.create(obj);
  res.status(200).json(newFood);
}

function updateFood(req, res){
  const obj = req.body;
  console.log(req.body);
  const updatedFood = foods.update(obj);
  res.status(200).json(updatedFood);
}

function deleteFood(req, res){


  res.status(200).send('deleting banana');
}


module.exports = router;

