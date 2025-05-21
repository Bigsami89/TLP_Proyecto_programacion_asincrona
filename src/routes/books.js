import { Router } from "express";
import{
    searchBooksByTitle,
    getBookDetailsByTitle
} from '../services/openLibraryService.js';
import { error } from "console";


const router = Router();
router.get('/buscar', async(req, res) =>{
    const {texto} = req.query;

    if(!texto){
        return res
        .status(400)
        .json({error: 'debe de proporcionar texto'});
    }

    
    try{
        const resultados = await searchBooksByTitle(texto);
        res.json(resultados);
        return res
        .type('json')
        .send(JSON.stringify(detalle, null, 2));
    }catch(error){
        res.status(502).json({error : error.message});
    }


});

// --- src/routes/books.js ---
router.get('/libro', async (req, res) => {
  const { titulo } = req.query;

  if (!titulo) {
    return res
      .status(400)
      .json({ error: 'Debe proporcionar el parámetro titulo' });
  }

  try {
    const detalle = await getBookDetailsByTitle(titulo);

    if (!detalle) {
      // ↓↓↓  ¡return para salir ya!
      return res.status(404).json({ error: 'Libro no encontrado' });
    }

    // pretty-print opcional
    if ('pretty' in req.query) {
      return res
        .type('json')
        .send(JSON.stringify(detalle, null, 2));  
    }

    return res.json(detalle);                
  } catch (error) {
    // igual aquí retornamos para no seguir
    return res.status(502).json({ error: error.message });
  }
});



export default router;