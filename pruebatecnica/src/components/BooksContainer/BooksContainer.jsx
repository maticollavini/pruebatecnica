import React, { useState } from 'react';
import "./BooksContainer.css";
import books from "./books.json";

export const BooksContainer = () => {
    const [library, setLibrary] = useState(books.library);
    const [cart, setCart] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('Todos');
    const [selectedYear, setSelectedYear] = useState('Todos');

    const addToCart = (index) => {
        const selectedBook = library[index];
        setCart((prevCart) => [...prevCart, selectedBook]);
        setLibrary((prevLibrary) => prevLibrary.filter((_, i) => i !== index));
    };

    const returnToLibrary = (index) => {
        const returnedBook = cart[index];
        setCart((prevCart) => prevCart.filter((_, i) => i !== index));
        setLibrary((prevLibrary) => [...prevLibrary, returnedBook]);
    };

    const filterLibrary = () => {
        let filteredLibrary = books.library;

        if (selectedGenre !== 'Todos') {
            filteredLibrary = filteredLibrary.filter((book) => book.book.genre === selectedGenre);
        }

        if (selectedYear !== 'Todos') {
            filteredLibrary = filteredLibrary.filter((book) => book.book.year.toString() === selectedYear);
        }

        setLibrary(filteredLibrary);
    };

    const resetFilters = () => {
        setLibrary(books.library);
        setSelectedGenre('Todos');
        setSelectedYear('Todos');
    };

    return (
        <>
            <div className="home-container">
                <h2>Libros ({library.length} disponibles)</h2> <br />
                <div>
                    <label htmlFor="genreFilter">Filtrar por género:</label>
                    <select
                        id="genreFilter"
                        onChange={(e) => setSelectedGenre(e.target.value)}
                        value={selectedGenre}
                    >
                        <option value="Todos">Todos</option>
                        <option value="Fantasía">Fantasía</option>
                        {/* Otras opciones de género */}
                    </select>
                </div>
                <div>
                    <label htmlFor="yearFilter">Filtrar por año:</label>
                    <select
                        id="yearFilter"
                        onChange={(e) => setSelectedYear(e.target.value)}
                        value={selectedYear}
                    >
                        <option value="Todos">Todos</option>
                        {/* Otras opciones de año */}
                    </select>
                </div>
                <button onClick={filterLibrary}>Aplicar Filtro</button>
                <button onClick={resetFilters}>Resetear Filtros</button>
                <h4>
                    Haz clic en el libro que te guste para añadirlo a la lista de lectura
                </h4>
            </div>
            <div className="wrapper">
                <div className="book-container">
                    {library.map((book, index) => (
                        <div className="product" key={book.book.ISBN} onClick={() => addToCart(index)}>
                            <img src={book.book.cover} alt={book.book.title} />
                            <div>
                                <p>
                                    <span>Titulo</span> : {book.book.title}
                                </p>
                                <p>
                                    <span>Genero</span> : {book.book.genre}
                                </p>
                                <p>
                                    <span>Precio</span> : ${book.book.year}
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
                                <div className="product" key={book.book.ISBN} onClick={() => returnToLibrary(index)}>
                                    <img src={book.book.cover} alt={book.book.title} />
                                    <div>
                                        <p>
                                            <span>Titulo</span> : {book.book.title}
                                        </p>
                                        <p>
                                            <span>Genero</span> : {book.book.genre}
                                        </p>
                                        <p>
                                            <span>Precio</span> : ${book.book.year}
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