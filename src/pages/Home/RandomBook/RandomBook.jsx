import React, { useEffect, useState} from 'react'; 
import axios from 'axios'
import './RandomBook.css'
import { Link } from 'react-router-dom'

const LOCAL_STORAGE_KEY = 'libroSemanal'
const ONE_WEEK = 7 * 24 * 60 * 60 * 1000

function weeklyBookRecomandation(){
    const [ book, setBooks] = useState(null)
    const [showBook, setShowBook] = useState(false);
    const savedBook = localStorage.getItem(LOCAL_STORAGE_KEY);

    useEffect(()=>{

        if(savedBook){
            const { data, timestamp } = JSON.parse(savedBook)
            const now = Date.now();

            if(now - timestamp < ONE_WEEK){
                setBooks(data)
                return
            }
        }

        getRAndomBook();

    }, [])

    const getRAndomBook = async() =>{

        try {
            const keywords = ['novela', 'libro', 'historia', 'aventura', 'fantasía'];
            const keyword = keywords[Math.floor(Math.random() * keywords.length)];
            const startIndex = Math.floor(Math.random() * 30);
    
            const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
            params: {
                q: keyword,
                startIndex,
                maxResults: 10,
                },
            });

            const books = response.data.items;
            if(books && books.length > 0 ){
                const randomBook = books [Math.floor(Math.random() * books.length)];
                setBooks(randomBook)

                localStorage.setItem(
                    LOCAL_STORAGE_KEY,
                    JSON.stringify({
                        data: randomBook,
                        timestamp: Date.now()
                    })
                );
            }

        }catch (error){
            console.error('Error obteniendo libro aleatorio:', error);
        }
    };

    if (!showBook) {
        return (

                <div className="random-book-weekly-false">
                    <h2>¿Querés ver nuetra recomendación semanal?</h2>
                    <button onClick={() => setShowBook(true)} className='random-book-weekly-false-button'>Ver mi próxima lectura</button>
                </div>
            
        );
    }


    if (!book) return <p>Cargando recomendación...</p>;

    const info = book.volumeInfo;

    return (

            <div className="random-book-weekly-true">
                <h2>Descubre un nuevo libro para esta semana!</h2>
                <div className="random-book-weekly-true-info">
                    <div className="random-book-weekly-true-info-text">
                        <h3>{info.title}</h3>
                        <p> Autor: {info.authors?.[0] || 'Autor desconocido'}</p>
                        <Link to={`book-info/${book.id}`} className='random-book-weekly-true-button'> Ver mas!</Link>
                    </div>
                    <div className='random-book-weekly-true-info-image'>
                        <img src={info.imageLinks?.thumbnail} alt={info.title} />
                    </div>
                </div>
            </div>
            
    );

}

export default weeklyBookRecomandation;