const express = require('express');
const app = express();
const PORT = 3001;
const usuarioRoute = require('./routes/usuarioRoute');
const db = require('./db/models');
app.use(express.json());
app.use("/usuarios", usuarioRoute);

app.listen(PORT, async () => {
    console.log('La app arranco en el puerto ${PORT}.');
    //await db.sequelize.sync({ force: true });
})


