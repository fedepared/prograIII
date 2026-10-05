// Con find, obtener el primer libro disponible (available: true).
// Con findIndex, obtener la posición de un libro por su title exacto.
// Con some, verificar si hay al menos un libro publicado antes de 1950.
// Con every, verificar si todos los libros tienen más de 100 páginas.

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


const disponible = books.find(x=>x.available);
const adAliqua = books.findIndex(x=>x.title == "ad aliqua dolore");
const alguno = books.some(x=> x.year<1940);
const every = books.every(x=> x.pages>100);

console.log(every);