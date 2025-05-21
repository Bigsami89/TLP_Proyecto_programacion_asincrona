# TLP_Proyecto_programacion_asincrona

# 📚 API de Libros – Open Library + Express

Aplicación Node.js que expone dos endpoints REST para **buscar libros** y **obtener detalles** de una obra a través de la API pública de [Open Library](https://openlibrary.org/).

## ¿Qué hace?

| Endpoint                         | Descripción                                                                                             |
| -------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **GET `/buscar?texto=<cadena>`** | Devuelve la lista de libros cuyo *título* contenga la cadena indicada.                                  |
| **GET `/libro?titulo=<título>`** | Devuelve la ficha completa del primer libro cuyo título coincida exactamente (insensible a mayúsculas). |

Todas las respuestas se entregan en **JSON**.

---

## Instalación

1. **Clona** este repositorio y entra a la carpeta:

   ```bash
   git clone https://github.com/<TU_USUARIO>/mi-api-libros.git
   cd mi-api-libros
   ```

2. **Instala** las dependencias (requiere Node ≥ 18):

   ```bash
   npm install
   ```

3. **Arranca** el servidor:

   ```bash
   # modo desarrollo (reinicia al guardar cambios)
   npm run dev

   # ó modo producción simple
   npm start
   ```

El servicio quedará escuchando en **[http://localhost:3000](http://localhost:3000)**.


¡Listo! Con eso ya puedes probar:


# Buscar títulos que contengan “dune”
url "http://localhost:3000/buscar?texto=dune"

# Detalles exactos de “Cien años de soledad”
url "http://localhost:3000/libro?titulo=Cien%20años%20de%20soledad"