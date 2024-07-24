import './hero.css'
import { useState,useEffect,useRef } from 'react';
import { Drop } from '../../components/navDrop/drop';
import { NavBar } from '../../components/nav/nav';

export const Hero = ({dropOpen,toggleDrop}) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [images] = useState([
        './ph2.jpg',
        './ph3.jpg',
    ])

    const [mimages] = useState([
        './mph2.jpg',
        './mph3.jpg'
    ])

    const isMobile = () => window.innerWidth <= 768;

    const imageRef = useRef(null);

    const handleNext = () => {
        let nextIndex

        if(isMobile){
            nextIndex = (currentImage + 1) % mimages.length;
        }

        nextIndex = (currentImage + 1) % images.length;
        setCurrentImage(nextIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, isMobile()?20000:15000);

        return () => clearInterval(interval);
    }, [currentImage]); 

    return (
        <section id='hero'  style={{ backgroundImage: `url(${isMobile() ? mimages[currentImage] : images[currentImage]})`, backgroundSize: 'cover', backgroundPosition: 'center'}} 
        ref={imageRef} >
            <NavBar toggleDrop={toggleDrop} dropOpen={dropOpen} />
            <Drop dropOpen={dropOpen} toggleDrop={toggleDrop}/>
            <div id='hmain'>
                <h1>Elevate <span className='txtG'>your</span> living <span className='txtG'>space</span></h1>
                <p>
                Where Functionality Meets Beauty. Design for Every Lifestyle. Crafting Interiors that Reflect Your Personality.
                </p>
                <button>contact</button>
            </div>
        </section>
    )
}