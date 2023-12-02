import React from "react";

const CartContainer= ({ cart, returnToLibrary }) => (
    <div className="cart-container">
        <div className="cart">
        <h2>Lista de lectura ({cart.length})</h2>
        </div>
        <div className="cart-items-container">
        {cart.length === 0 ? (
            <h3>Aún no tienes ningún libro en tu lista de lectura...</h3>
        ) : (
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
                    <span>Título</span> : {book.book.title}
                </p>
                <p>
                    <span>Género</span> : {book.book.genre}
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
);

export default CartContainer;