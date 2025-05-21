import express from 'express';
import bookRouter from './routes/books.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_, res) =>{
    res.json({ mensaje : 'Api de libros - OPEN LIBRARY ┌⁠(⁠・⁠。⁠・⁠)⁠┘'})
});

app.use('/', bookRouter);

app.use((req, res)=>{
    res.status(404).json({error : 'Ruta no encontrada'});

});

app.listen(PORT, ()=>{
     console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});