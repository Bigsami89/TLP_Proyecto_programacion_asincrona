import axios from 'axios';

const OL_BASE = 'https://openlibrary.org';

/**
 * Busca libros que contengan la cadena en el título.
 */
export async function searchBooksByTitle(query) {
  const searchUrl = `${OL_BASE}/search.json?title=${encodeURIComponent(query)}`;

  const { data } = await axios.get(searchUrl, { timeout: 7000 });

  console.log('[search] numFound:', data.numFound, 'docs.length:', data.docs?.length);

  return data.docs.map((d) => ({
    titulo: d.title,
    autor: d.author_name?.join(', '),
    anio_publicacion: d.first_publish_year,
    work_key: d.key,    
  }), '\n');
}

/**
 * Detalles del primer libro cuyo título coincide exactamente.
 * 
 * 
 */
export async function getBookDetailsByTitle(title) {
  const searchUrl = `${OL_BASE}/search.json?title=${encodeURIComponent(title)}`;
  const { data } = await axios.get(searchUrl, { timeout: 7000 });

  const match = data.docs.find(
    (d) => d.title.toLowerCase() === title.toLowerCase()
  );
  if (!match) return null;

  const workKey = match.key;                  
  const workUrl = `${OL_BASE}${workKey}.json`;

  const { data: work } = await axios.get(workUrl, { timeout: 7000 });

  return {
    titulo:        work.title,
    descripcion:   work.description?.value || work.description || 'Sin descripción',
    temas:         work.subjects,
    fecha_creado:  work.created?.value,
    ultima_edicion: work.latest_revision,
    enlaces: {
      openlibrary: `${OL_BASE}${workKey}`
    }
  };
}
