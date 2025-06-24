import React from 'react';
import  useLocalLibrary  from '../../hooks/useLocalStorage';

import './ButtonsBiblio.css';

function AgregarABiblioteca({ libro }) {
    const favoritos = useLocalLibrary("Favoritos");
    const leidos = useLocalLibrary("Leídos");
    const leyendo = useLocalLibrary("Leyendo");
    const recomendados = useLocalLibrary("Recomendados");


    return (
        <div className='agregar-biblioteca'>

            <div className="botones-biblioteca">
            <p>Agregar a : </p>
                <button onClick={() => favoritos.addToList({id: libro.id,...libro.volumeInfo})}>Favoritos</button>
                <button onClick={() => leidos.addToList({id: libro.id,...libro.volumeInfo})}>Leídos</button>
                <button onClick={() => leyendo.addToList({id: libro.id,...libro.volumeInfo})}>Leyendo</button>
                <button onClick={() => recomendados.addToList({id: libro.id,...libro.volumeInfo})}>Recomendados</button>
            </div>
        </div>
    );

}  

export default AgregarABiblioteca;