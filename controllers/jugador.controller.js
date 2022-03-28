const jugadorModel = require('../models/jugadores.model');
const jugadorController = {};

jugadorController.getJugadores = async(req, res)=>{
    const jugadores = await jugadorModel.find();
    res.json(jugadores);
};

jugadorController.addJugador = async(req, res)=>{
   const jugador = new jugadorModel(req.body);
   await jugador.save();
   res.json({'status':'El jugador se ha añadido correctamente' });
};

jugadorController.deleteJugador = async(req,res)=>{
    await jugadorModel.findByIdAndDelete(req.params.id);
    res.json({ status: 'El jugador se ha eliminado correctamente'});
};


module.exports = jugadorController;