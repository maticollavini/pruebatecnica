import React from "react";

const BooksContainer = ({ library, addToCart }) => (
    <div className="book-container">
        {library.map((book, index) => (
        <div className="product" key={book.book.ISBN}>
            <img src={book.book.cover} alt={book.book.title} />
            <div>
            <p>
                <span>Título</span> : {book.book.title}
            </p>
            <p>
                <span>Género</span> : {book.book.genre}
            </p>
            <p>
                <span>Año</span> : {book.book.year}
            </p>
            </div>
            <button className="add-button" onClick={() => addToCart(index)}>
            Añadir
            </button>
        </div>
        ))}
    </div>
);

export default BooksContainer;