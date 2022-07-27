/*   ###   Buscando e contando dados em Arrays

    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

        * Contar o número de categorias e o número de livros em cada categoria
        * Contar o número de autores
        * Mostrar Livros do autor Augusto Cury
        * transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
        * 
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books:[
            {
                title: "Os segredos da mente milionária",
                autor: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                autor: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                autor: "Robert T. kiyosaki e sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                autor: "Augusto Cury",
            },
            {
                title: "Ansiedade - como enfrentar o mal do século",
                autor: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                autor: "Stephen R. Covey",
            },
        ],
    },


];

const totalCategories = booksByCategory.length

console.log(totalCategories);

for (let category of booksByCategory) {
    console.log('total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if(authors.indexOf(book.autor) == -1){
                authors.push(book.autor)
            }
            
        }
    }
    console.log("Total de autores: ", authors.length)
}

countAuthors();

function booksOfAugustoCury() {
    let books = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if(book.autor === 'Augusto Cury') {
                books.push(book.title)
            }
            
        }
    }
    console.log("Livros do autor: ", books)
}

booksOfAugustoCury()

function booksOfAuthor(autor) {
    let books = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if(book.autor === autor) {
                books.push(book.title)
            }
            
        }
    }
    console.log(` Livros do autor ${autor}:  ${books.join(", ")}`)
}

booksOfAuthor('Augusto Cury')