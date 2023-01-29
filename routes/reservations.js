const express = require('express');
 const router = express.Router();
 const reservationsCtrl = require('../controllers/reservations');
 
 router.post('/restaurants/:id/reservations', reservationsCtrl.create);
 
 module.exports = router;
