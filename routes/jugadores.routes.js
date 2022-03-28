const express = require('express');
const router = express.Router();
const jugadorController = require('../controllers/jugador.controller');

//Controlador

router.get('/', jugadorController.getJugadores);
router.post('/', jugadorController.addJugador);
/*router.put('/',);*/
router.delete('/:id', jugadorController.deleteJugador);

module.exports = router;