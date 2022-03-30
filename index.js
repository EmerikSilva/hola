const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const {mongoose} = require('./database')

const app = express();

app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin : '*'}));

//Routes
app.use('/api/jugadores', require('./routes/jugadores.routes'));

//Server
app.listen(app.get('port'), () => {
    console.log('Servidor inicializado en puerto: '
     + app.get('port' /* port */ ));
});

