// 11. forEach, Array.from y flatMap
// Con forEach, recorrer books e imprimir por consola una línea por libro con el formato "${title} (${year})" — sin construir ningún array nuevo.
// Con Array.from, crear un array bookNumbers de 5 elementos con los números del 1 al 5, usando la función mapeadora de Array.from (sin escribir el array a mano).
// Declarar const extraCatalog = [{ title: 'Libro extra', author: 'Anónimo', year: 2020, pages: 50, available: true }] y, con flatMap sobre [books, extraCatalog], armar un único array allBooks con todos los libros de ambos catálogos.
// Con Array.isArray, confirmar que allBooks es un array — y que, por ejemplo, allBooks[0].title no lo es.

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

books.forEach((book)=>{
    console.log(`- ${book.title} (${book.year})`)
})

const bookNumbers = Array.from({length:5}, (_,i) => i*1);

const extraCatalog = [{ title: 'Libro extra', author: 'Anónimo', year: 2020, pages: 50, available: true }]

const allBooks = [books,extraCatalog].flatMap(x=>x)

console.log(allBooks);
console.log("es array ?", Array.isArray(allBooks));