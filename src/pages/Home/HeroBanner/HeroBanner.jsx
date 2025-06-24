import './HeroBanner.css';
import HeroBannerGirl from '../../../assets/imgs/HeroBannerGirl.png';



function HeroBanner (){

    const HERO_BANNER = HeroBannerGirl;

    return(
        
    <div className='hero-banner-container'>
        <div className='hero-banner-text'>
            <h1>Descubrí tu próxima lectura !</h1>
            <p>Explorá nuestra amplia selección de libros y encontrá tu gran aventura literaria.</p>
        </div>
        <img src={HERO_BANNER}></img>
    </div>

)}   

export default HeroBanner;