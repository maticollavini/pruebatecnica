import React from "react";

const Filters = ({ selectedGenre, setSelectedGenre, selectedYear, setSelectedYear, filterLibrary }) => (
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
);

export default Filters;