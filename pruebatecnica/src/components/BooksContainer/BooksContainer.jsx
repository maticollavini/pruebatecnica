    import React, { useState } from "react";
    import "./BooksContainer.css";
    import books from "./books.json";

    export const HomeContainer = () => {
    const [library, setLibrary] = useState(books.library); // Creo una variable para actualizar los estados de library
    const [cart, setCart] = useState([]); // Creo una variable para actualizar los estados de el carrito
    const [selectedGenre, setSelectedGenre] = useState("Todos"); // Creo una variable para actualizar los estados de el filtro de genero
    const [selectedYear, setSelectedYear] = useState("Todos"); // Creo una variable para actualizar los estados de el filtro de año

    // Creo una funcion para agregar productos al carrito
    const addToCart = (index) => {
        const selectedBook = library[index];
        setCart((prevCart) => [...prevCart, selectedBook]);
        setLibrary((prevLibrary) => prevLibrary.filter((_, i) => i !== index));
    };

    // Creo una funcion para devolver prodcutos a la libreria
    const returnToLibrary = (index) => {
        const returnedBook = cart[index];
    
        // Verificar si el libro pertenece a la categoría seleccionada en library
        const isInSelectedCategory = selectedGenre === 'Todos' || returnedBook.book.genre === selectedGenre;
    
        // Agregar el libro a library solo si pertenece a la categoría seleccionada
        if (isInSelectedCategory) {
            setLibrary((prevLibrary) => [...prevLibrary, returnedBook]);
        }
    
        // Eliminar el libro del carrito
        setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    };

    // Creo una funcion para poder filtrar los productos en la libreria en genero y año
    const filterLibrary = () => {
        let filteredLibrary = books.library;

        // Si el genero seleccionado es distinto a "Todos", entonces filtra los productos que tengan el genero seleccionado, sacando los productos que ya estan en el carrito
        if (selectedGenre !== "Todos") {
            filteredLibrary = filteredLibrary.filter((book) => {
                const isInCart = cart.some(
                    (cartBook) => cartBook.book.ISBN === book.book.ISBN
                );
                return book.book.genre === selectedGenre && !isInCart;
            });
        }
        
        // Si el genero seleccionado es distinto a "Todos", entonces filtra los productos que tengan el año seleccionado, sacando los productos que ya estan en el carrito
        if (selectedYear !== "Todos") {
            filteredLibrary = filteredLibrary.filter((book) => {
                const isInCart = cart.some(
                    (cartBook) => cartBook.book.ISBN === book.book.ISBN
                );
                return book.book.year.toString() === selectedYear && !isInCart;
            });
        }
        
        // Si los filtros seleccionados son todos, mostra todos los libros disponibles, exceptuando los que estan en el carrito
        if (selectedGenre === "Todos" && selectedYear === "Todos") {
        filteredLibrary = filteredLibrary.filter((book) => {
            return !cart.some((cartBook) => cartBook.book.ISBN === book.book.ISBN);
        });
        }

        setLibrary(filteredLibrary);
    };

    return (
        <>
        <div className="home-container">
            {/* Muestro la cantidad de productos disponibles en la libreria */}
            <h2>Libros ({library.length} disponibles)</h2>
            <h4>
            Haz clic en el libro que te guste para añadirlo a la lista de lectura
            </h4>
            <br />
            <div className="filters-container">
            <div className="filters">
                {/* Creo una seccion para filtrar a los libros por genero y año */}
                <label htmlFor="genreFilter">Filtrar por género: </label>
                <select
                id="genreFilter"
                onChange={(e) => setSelectedGenre(e.target.value)}
                value={selectedGenre}
                onClick={filterLibrary}
                >
                <option value="Todos">Todos</option>
                <option value="Fantasía">Fantasía</option>
                <option value="Ciencia ficción">Ciencia ficción</option>
                <option value="Zombies">Zombies</option>
                <option value="Terror">Terror</option>
                </select>
            </div>
            <div className="filters">
                <label htmlFor="yearFilter">Año de publicación: </label>
                <select
                id="yearFilter"
                onChange={(e) => setSelectedYear(e.target.value)}
                value={selectedYear}
                onClick={filterLibrary}
                >
                <option value="Todos">Todos</option>
                <option value="1818">1818</option>
                <option value="1897">1897</option>
                <option value="1928">1928</option>
                <option value="1949">1949</option>
                <option value="1953">1953</option>
                <option value="1954">1954</option>
                <option value="1965">1965</option>
                <option value="1977">1977</option>
                <option value="1979">1979</option>
                <option value="1984">1984</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="2001">2001</option>
                </select>
            </div>
            </div>
        </div>
        <div className="wrapper">
            <div className="book-container">
                {/* Creo una seccion de libros, que mapea los libros del json y los muestra identificandolos con una id a cada uno llamada ISBN */}
            {library.map((book, index) => (
                <div
                className="product"
                key={book.book.ISBN}
                >
                <img src={book.book.cover} alt={book.book.title} />
                <div>
                    <p>
                    <span>Titulo</span> : {book.book.title}
                    </p>
                    <p>
                    <span>Genero</span> : {book.book.genre}
                    </p>
                    <p>
                    <span>Año</span> : {book.book.year}
                    </p>
                    
                </div>
                {/* Creo un boton para hacer que el usuario sea capaz de añadir el producto a su carrito */}
                <button className="add-button" onClick={() => addToCart(index)}>
                Añadir
                </button>
                </div>
            ))}
            </div>
            <div className="cart-container">
            <div className="cart">
                {/* Muestro la cantidad de libros posicionados en el carrito */}
                <h2>Lista de lectura ({cart.length})</h2>
            </div>
            <div className="cart-items-container">
                {/* Creo una funcion que hace que si no hay ningun producto en el carrito, se muestre un mensaje de que no tiene ningun producto en el carrito */}
                {cart.length === 0 ? (
                <h3>Aún no tienes ningún libro en tu lista de lectura...</h3>
                ) : (
                    // Mapeo la variable cart, para mostrar todos los productos que se agregaron al carrito, identificandolos con una id que se llama ISBN
                cart.map((book, index) => (
                    <div className="product-cart" key={book.book.ISBN}>
                    <div className="erase-product-container">
                        <span
                        className="erase-product"
                        onClick={() => returnToLibrary(index)}
                        >
                        ❌
                        </span>
                    </div>
                    <img src={book.book.cover} alt={book.book.title} />
                    <div>
                        <p>
                        <span>Titulo</span> : {book.book.title}
                        </p>
                        <p>
                        <span>Genero</span> : {book.book.genre}
                        </p>
                        <p>
                        <span>Año</span> : {book.book.year}
                        </p>
                    </div>
                    </div>
                ))
                )}
            </div>
            </div>
        </div>
        </>
    );
    };
