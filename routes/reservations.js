const express = require('express');
 const router = express.Router();
 const reservationsCtrl = require('../controllers/reservations');
 
 router.post('/restaurants/:id/reservations', reservationsCtrl.create);
 router.get('/reservations/:id/edit', reservationsCtrl.edit);
 router.put('/reservations/:id', reservationsCtrl.update);
 
 module.exports = router;
