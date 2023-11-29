// import { useEffect, useState } from "react"
import "./BooksContainer.css"
import books from "./books.json"

export const BooksContainer = () => {
    return (

        <>
        <div className="home-container">
            <h2>Libros ({books.library.length} disponibles)</h2> <br />
            <h4>Hacé click en el libro que te guste para añadirlo a la lista delectura</h4>
        </div>
        <div className="wrapper">
            <div className="book-container">
                {
        books.library.map(books => 
                                            
                                                <div className="product" key={books.book.ISBN}> 
                                            <img className="" src={books.book.cover}/>
                                            <div className="">
                                                <p><span>Titulo</span> : {books.book.title}</p>
                                                <p><span>Genero</span> : {books.book.genre}</p>
                                                <p><span>Precio</span> : ${books.book.year}</p>

                                            </div>
                                            </div>
                                        
            )
        }
            </div>
            <div className="cart-container">
                <div className="cart">
                    <h2>Lista de lectura</h2>
                    <h3>Aún no tenés ningun libro en tu lista de lectura...</h3>
                </div>
            </div>
        </div>
    </>
)}