import React from 'react';
import { Link } from 'react-router-dom'
import { useState, useLayoutEffect} from 'react';

import { FaAngleRight } from "react-icons/fa6";

import HeroBanner from './HeroBanner/HeroBanner'
import GridHome from './GridHome/GridHome';
import RandomBook from './RandomBook/RandomBook'
import './Home.css'

function Home (){

    const [max, setMax] = useState(8);

    useLayoutEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const newMax = width <= 1250 ? 6 : 8;

            setMax(prevMax => (prevMax !== newMax ? newMax : prevMax));
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return(
            <>
                <HeroBanner />
                <GridHome max = { max } />
                <RandomBook />
                <div className='home-link-biblio'>
                    <p>No te quedes con solo uno,</p>
                    <Link className='link-biblioteca' to='biblioteca'> explora nuestra biblioteca!<span><FaAngleRight /></span></Link>
                </div>
            </>
    )
}


export default Home ;

