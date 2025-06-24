import { useState } from "react";

import "./SideBarBiblio.css";
import InputsBiblio from "../../../components/InputsBiblio/InputsBiblio";


function SideBarBiblio( { onFilterChange } ){

    return( 

        <div className="sidebar">
            <h2>Algo en particular que este buscando?</h2>
            <div className="filtros">
                <h3>Filtrar por:</h3>
                <InputsBiblio 
                    name = "Historia" 
                    type={"checkbox"} 
                    onChange={(e) => onFilterChange(e.target.name, e.target.checked)} 
                />
                <InputsBiblio 
                    name = "Fantasía" 
                    type={"checkbox"}
                    onChange={(e) => onFilterChange(e.target.name, e.target.checked)}
                />
                <InputsBiblio 
                    name = "Aventura" 
                    type={"checkbox"} 
                    onChange={(e) => onFilterChange(e.target.name, e.target.checked)}
                />
                <InputsBiblio 
                    name = "Novela" 
                    type={"checkbox"} 
                    onChange={(e) => onFilterChange(e.target.name, e.target.checked)}
                />
                <InputsBiblio 
                    name = "Ficción" 
                    type={"checkbox"} 
                    onChange={(e) => onFilterChange(e.target.name, e.target.checked)}
                />
                <InputsBiblio 
                    name = "Suspenso" 
                    type={"checkbox"} 
                    onChange={(e) => onFilterChange(e.target.name, e.target.checked)}
                />
                <InputsBiblio 
                    name = "Ciencia ficción" 
                    type={"checkbox"} 
                    onChange={(e) => onFilterChange(e.target.name, e.target.checked)}
                />
                <InputsBiblio 
                    name = "Romance" 
                    type={"checkbox"} 
                    onChange={(e) => onFilterChange(e.target.name, e.target.checked)}
                />
                <InputsBiblio 
                    name = "Autoayuda" 
                    type={"checkbox"} 
                    onChange={(e) => onFilterChange(e.target.name, e.target.checked)}
                />
                <InputsBiblio 
                    name = "Historia real" 
                    type={"checkbox"} 
                    onChange={(e) => onFilterChange(e.target.name, e.target.checked)}
                />
                <InputsBiblio 
                    name = "Ensayo" 
                    type={"checkbox"} 
                    onChange={(e) => onFilterChange(e.target.name, e.target.checked)}
                />
                <InputsBiblio 
                    name = "Poesía" 
                    type={"checkbox"} 
                    onChange={(e) => onFilterChange(e.target.name, e.target.checked)}
                />
                <InputsBiblio 
                    name = "Clásico" 
                    type={"checkbox"} 
                    onChange={(e) => onFilterChange(e.target.name, e.target.checked)}
                />
                <InputsBiblio 
                    name = "Thriller" 
                    type={"checkbox"} 
                    onChange={(e) => onFilterChange(e.target.name, e.target.checked)}
                />
                <InputsBiblio 
                    name = "Drama" 
                    type={"checkbox"} 
                    onChange={(e) => onFilterChange(e.target.name, e.target.checked)}
                />
                <InputsBiblio 
                    name = "Comedia" 
                    type={"checkbox"} 
                    onChange={(e) => onFilterChange(e.target.name, e.target.checked)}
                />
            </div>
        </div>
        
    )

}



export default SideBarBiblio;