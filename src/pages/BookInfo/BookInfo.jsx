import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./BookInfo.css";
import ButtonsBiblio from "../../components/ButtonsBiblio/ButtonsBiblio";

function BookInfo() {
    const { id } = useParams();
    const [libro, setLibro] = useState(null);

    useEffect(() => {
        const cargarLibro = async () => {
        try {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
            setLibro(response.data);
        } catch (error) {
            console.error('Error cargando libro:', error);
        }
        };
        cargarLibro();
    }, [id]);

    function text (){
        if (!info.description) {
            return "No disponible.";
        }else{
            return info.description.replace(/<\/?[^>]+(>|$)/g, "");
        }
    }

    if (!libro) return <div className="carrying-book-container"><p className="carrying-book">Cargando el Libro...</p></div>;
    const info = libro.volumeInfo;

    return (

        <div className="book-info">
            <h1>{info.title}</h1>
            <div className="book-details">
                <div className="book-image">
                    <img src={info.imageLinks?.thumbnail} alt={info.title} />
                </div>
                <div className="book-details-text">
                    <h2>Detalles del Libro:</h2>
                    <p><strong>Autor:    </strong> {info.authors?.join(", ") || "Desconocido"}</p>
                    <p><strong>Categorías:    </strong> {info.categories?.join(", ") || "Sin categoría"}</p>
                    <p><strong>Fecha de publicación:    </strong> {info.publishedDate || "No disponible"}</p>
                    <p><strong>Paginas:    </strong>{info.pageCount || "No disponible."}</p>
                </div>
            </div>
            <div className="book-description">
                <h3>Descripción:</h3>
                <p>{text()}</p>
            </div>
            <ButtonsBiblio libro={libro} />
        </div>

    );
}

export default BookInfo;
