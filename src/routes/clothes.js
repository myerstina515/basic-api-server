'use strict';

const express = require('express');
const Clothes = require('../models/clothes');
const clothes = new Clothes();

const router = express.Router();

router.get('/clothes', getClothes);
router.get('/clothes/:id', getOneArticle);
router.post('/clothes', createArticle);
router.put('/clothes/:id', updateArticle);
router.delete('/clothes/:id', deleteArticle);

function getClothes(req, res){
  const allClothes = clothes.get();
  res.status(200).json(allClothes);
}

function getOneArticle(req, res){
  const id = parseInt(req.params.id);
  const oneArticle = clothes.get(id);
  res.status(200).json(oneArticle);
}

function createArticle(req, res){
  const obj = req.body;
  const newArticle = clothes.create(obj);
  res.status(200).json(newArticle);
}

function updateArticle(req, res){
  const obj = req.body;
  const updatedArticle = clothes.update(req.params.id, obj);
  res.status(200).json(updatedArticle);
}

function deleteArticle(req, res){
  const id = req.params.id;
  const deletedClothes = clothes.delete(id);
  res.status(200).json(deletedClothes);
}

module.exports = router;

