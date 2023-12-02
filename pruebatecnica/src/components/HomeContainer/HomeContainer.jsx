import React, { useState } from "react";
import "./HomeContainer.css";
import BooksContainer from "../BooksContainer/BooksContainer";
import CartContainer from "../CartContainer/CartContainer";
import Filters from "../Filters/Filters";
import books from "./books.json";;

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
        <header>
            <div className="home-container">
            <h2>Libros ({library.length} disponibles)</h2>
            <h4>Haz clic en el libro que te guste para añadirlo a la lista de lectura</h4>
            <br />
            <Filters
                selectedGenre={selectedGenre}
                setSelectedGenre={setSelectedGenre}
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
                filterLibrary={filterLibrary}
            />
            </div>
        </header>
        <main>
            <div className="wrapper">
            <BooksContainer library={library} addToCart={addToCart} />
            <CartContainer cart={cart} returnToLibrary={returnToLibrary} />
            </div>
        </main>
        </>
    );
};

export default HomeContainer;