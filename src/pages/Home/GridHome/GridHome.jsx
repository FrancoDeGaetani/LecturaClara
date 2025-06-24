import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './GridHome.css';

function GridHome ({ max }) {

    const [libros, setLibros] = useState([]);

    useEffect(() => {
        const cargarLibros = async () => {

            const palabras = ['historia', 'fantasía', 'aventura', 'novela', 'ficción', 'misterio', 'suspenso', 'ciencia ficción', 'romance', 'biografía', 'autoayuda', 'historia real', 'ensayo', 'poesía', 'clásico', 'literatura contemporánea', 'thriller', 'drama', 'comedia'];
            const palabra = palabras[Math.floor(Math.random() * palabras.length)];
            const randomIndex = Math.floor(Math.random() * 30); 
        
            try {
                const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
                    params: {
                        q: palabra,
                        startIndex: randomIndex,
                        maxResults: max || 8,
                    },
                });
        
                if (response.data.items) {
                setLibros(response.data.items);
                }
            } catch (error) {
                console.error('Error cargando libros:', error);
            }};

            cargarLibros();
            
        }, [max]);
        
        return (

            <div className="grid-home">
                {libros.map((libro) => { const info = libro.volumeInfo;
                    return (
                        <div key={libro.id} className="card-home">

                            <img src={info.imageLinks?.thumbnail} alt={info.title} />
                            <h3>{info.title}</h3>
                            <p>{info.authors?.[0] || 'Autor desconocido'}</p>
                            <Link to={`book-info/${libro.id}`} className='home-button'> Ver mas!</Link>
                            
                        </div>
                    );
                })}
            </div>

        );
    }

export default GridHome;