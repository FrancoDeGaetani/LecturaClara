import { useState, useEffect } from 'react';
import useLocalLibrary from '../../../hooks/useLocalStorage';
import './TuBibliotecaTab.css';

const categorias = ['Favoritos', 'Leídos', 'Leyendo', 'Recomendados'];

function BibliotecaTabs() {
    const [categoriaActiva, setCategoriaActiva] = useState('Favoritos');
    const { list, removeFromList } = useLocalLibrary(categoriaActiva);

    
        return (
            <div className="biblioteca-container">
                <div className="tabs">
                    {categorias.map(cat => (
                        <button
                        key={cat}
                        onClick={() => setCategoriaActiva(cat)}
                        className={categoriaActiva === cat ? 'active-tab' : 'tab'}
                        >
                        {cat}
                        </button>
                    ))}
                </div>
        
                <div className="libros-grid">
                    {list.length === 0 && <p className='libros-grid-empty'>No hay libros en la categoría de <span>{categoriaActiva}</span>.</p>}
                    {list.map(libro => (
                        <div key={libro.id} className="libro-card">
                            <img src={libro.imageLinks?.thumbnail} alt={libro.title} />
                            <h4>{libro.title}</h4>
                            <p>{libro.authors?.[0] || 'Autor desconocido'}</p>
                            <button onClick={() => removeFromList(libro.id)}>Eliminar</button>
                        </div>
                    ))}
                </div>
            </div>
        );
}

export default BibliotecaTabs;
