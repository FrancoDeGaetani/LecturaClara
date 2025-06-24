import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BookGrid.css'

function BookGrid ( {max, generos, filtrosActivos} ) {

    const [libros, setLibros] = useState([]);

    useEffect(() => {
        const cargarLibros = async () => {

        function palabrasClave(generos, filtrosActivos = [] ){
            if (filtrosActivos.length > 0) {
                return filtrosActivos
            }else{
                return generos
            }
        }

        const palabras = palabrasClave(generos, filtrosActivos);
        const palabra = palabras[Math.floor(Math.random() * palabras.length)];
        const randomIndex = Math.floor(Math.random() * 30); 
        
            try {
                const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
                params: {
                    q: palabra,
                    startIndex: randomIndex,
                    maxResults: max || 20,
                },
                });
        
                if (response.data.items) {
                setLibros(response.data.items);
                }
            } catch (error) {
                console.error('Error cargando libros:', error);
            }};
        
            cargarLibros();
        }, [max, filtrosActivos]);
        
        return (

            <div className="grid">
                {libros.map((libro) => { const info = libro.volumeInfo;
                    return (
                        <div key={libro.id} className="card">
                            <img src={info.imageLinks?.thumbnail} alt={info.title} />
                            <div className='card-info'>
                                <h3>{info.title}</h3>
                                <p>{info.authors?.[0] || 'Autor desconocido'}</p>
                                <Link to={`/book-info/${libro.id}`} className='biblio-button'> Ver mas!</Link>
                            </div>
                        </div>
                    );
                })}
            </div>

        );
    }

export default BookGrid;
