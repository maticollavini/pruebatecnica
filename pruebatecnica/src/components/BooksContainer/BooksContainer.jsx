    import React, { useState } from "react";
    import "./BooksContainer.css";
    import books from "./books.json";

    export const BooksContainer = () => {
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
        setCart((prevCart) => prevCart.filter((_, i) => i !== index));
        setLibrary((prevLibrary) => [...prevLibrary, returnedBook]);
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

        if (selectedYear !== "Todos") {
        filteredLibrary = filteredLibrary.filter(
            (book) => book.book.year.toString() === selectedYear
        );
        }

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
            {library.map((book, index) => (
                <div
                className="product"
                key={book.book.ISBN}
                onClick={() => addToCart(index)}
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
                </div>
            ))}
            </div>
            <div className="cart-container">
            <div className="cart">
                <h2>Lista de lectura ({cart.length})</h2>
            </div>
            <div className="cart-items-container">
                {cart.length === 0 ? (
                <h3>Aún no tienes ningún libro en tu lista de lectura...</h3>
                ) : (
                cart.map((book, index) => (
                    <div className="product" key={book.book.ISBN}>
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
