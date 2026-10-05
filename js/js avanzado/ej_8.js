// Usando slice, obtener un array firstThree con los primeros tres libros del catálogo, sin modificar books.
// Usando concat, construir un array extendedCatalog que sea books más dos libros nuevos, sin modificar books.
// Confirmar con console.log que books no cambió en ninguno de los dos pasos.
// Opcional (si tu versión de Node lo soporta, ver node -v en el apunte): repetí el punto 1 del ejercicio 9 (ordenar por year) pero con toSorted() en vez de spread + sort(), y comparalo — ¿cuál preferís?

const books = [
  {
    "title": "deserunt est adipisicing",
    "author": "Nunez Hardy",
    "year": 2021,
    "pages": 626,
    "available": false
  },
  {
    "title": "do in sint",
    "author": "Harrison Carney",
    "year": 2008,
    "pages": 706,
    "available": false
  },
  {
    "title": "ex excepteur aute",
    "author": "Nadine Nunez",
    "year": 2013,
    "pages": 822,
    "available": false
  },
  {
    "title": "ut amet sint",
    "author": "Franco Cross",
    "year": 1970,
    "pages": 492,
    "available": true
  },
  {
    "title": "voluptate aliquip nisi",
    "author": "Eva Sawyer",
    "year": 1963,
    "pages": 223,
    "available": true
  },
  {
    "title": "ad aliqua dolore",
    "author": "Joanna Adams",
    "year": 1971,
    "pages": 433,
    "available": false
  },
  {
    "title": "commodo adipisicing mollit",
    "author": "Coleman Shannon",
    "year": 1980,
    "pages": 875,
    "available": false
  }
]

const firstThree = books.slice(0,3);
console.log(firstThree);

const extendedCatalog = books.concat([{
    "title": "dolor aute minim",
    "author": "Shannon Johnston",
    "year": 1944,
    "pages": 392,
    "available": true
  },
  {
    "title": "qui quis reprehenderit",
    "author": "Mary Roberson",
    "year": 1954,
    "pages": 720,
    "available": false
  }])

  

  console.log(extendedCatalog);