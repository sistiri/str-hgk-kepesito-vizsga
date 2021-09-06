/**
 * @Todo két végpont implementálása egy put és get metódusra
 *
 */
const express = require('express');
const router = express.Router();


module.exports = router;
const controller = require('./building.controller');
 
 router.get('/', (req, res, next) => {
     return controller.getAllBuildingWithClassrooms(req, res, next);
 });
 
 router.put('/:id', (req, res, next) => {
     return controller.updateBuilding(req, res, next);
 });
 
 
 module.exports = router;