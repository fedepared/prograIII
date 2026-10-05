// Ordenar una copia del catálogo (¡no mutar books! copiarlo primero con spread) por year ascendente, usando una función comparadora.
// Ordenar otra copia por pages descendente.
// Ordenar una tercera copia por author alfabéticamente, usando localeCompare.

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

const books2 = [...books];
books2.sort((a,b)=> a.year - b.year);
console.log(books2);

const books3 = [...books];
books3.sort((a,b)=> b.year - a.year);
console.log(books3);

const books4 = [...books];
books4.sort((a,b)=> a.author.localeCompare(b.author));
console.log(books4);
