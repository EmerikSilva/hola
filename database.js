const mongoose = require('mongoose');
const URL = 'mongodb+srv://emeriksilva:emerik123@cluster0.91wm1.mongodb.net/test';

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Conexión Exitosa a la BD'))
.catch(err => console.log('Tienes un error : ' + err));

module.exports = mongoose;

