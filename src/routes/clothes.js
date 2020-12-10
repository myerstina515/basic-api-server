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
  const id = req.params.id;
  const oneArticle = clothes.get(id);
  res.status(200).json(oneArticle);
}

function createArticle(req, res){
  const obj = req.body;
  const newArticle = clothes.create(obj);
  res.status(200).json(newArticle);
}

function updateArticle(req, res){
//   const updated = ;
//   const postArticle = clothes.post(updated);
//   res.status(200).json(postArticle);
}

function deleteArticle(req, res){
  res.status(200).send('delete article of clothing');
}

module.exports = router;

