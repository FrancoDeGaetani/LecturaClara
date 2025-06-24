import {React, useState, useEffect} from 'react'; 


import './Biblioteca.css'; 
import SideBarBiblio from './SideBarBiblio/SideBarBiblio';
import BookGrid from './BookGrid/BookGrid';

function Biblioteca() {

    const [maxBooks, setMaxBooks] = useState(20);
    const [filtrosActivos, setFiltrosActivos] = useState([]);

    const generos = ['historia', 'fantasía', 'aventura', 'novela', 'ficción', 'misterio', 'suspenso', 'ciencia ficción', 'romance', 'biografía', 'autoayuda', 'historia real', 'ensayo', 'poesía', 'clásico', 'thriller', 'drama', 'comedia'];

    const pagination = (maxBooks) => {
        setMaxBooks( maxBooks => maxBooks + 8 );
    }

    const handleFilterChange = (filtro, isChecked) => {
        console.log(filtro, isChecked)
        if (isChecked) {
            setFiltrosActivos((prev) => [...prev, filtro]);
        } else {
            setFiltrosActivos((prev) => prev.filter((item) => item !== filtro));
        }
    };


    return (

            <div className="biblioteca">
                <SideBarBiblio onFilterChange ={ handleFilterChange }/>
                <div>
                    <h1 className= "biblioteca-titulo"> Encontra lo que estas buscando </h1>
                    <BookGrid  max = { maxBooks } generos = {generos} filtrosActivos={filtrosActivos}/>
                    <button onClick={ pagination } className="ver-mas-biblio" > Ver mas Libros! </button>
                </div>
            </div>
            
    )
}

export default Biblioteca;