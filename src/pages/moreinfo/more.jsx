import { useState,useEffect } from "react"
import { useRef } from "react";
import './more.css'

export const More = () => {
    const [reviews,setReviews] = useState([
        {
            name:"garcia edwards",
            img:"./rw1.png",
            review:"We hired tyler-karu to redesign our living room, which felt cramped and outdated. They listened to our desire for a more open and functional space while maintaining a sense of style. The end result is amazing! We now have a beautiful and inviting room that perfectly suits our family's needs."
        },
        {
            name:"sandra miller",
            img:"./rw2.png",
            review:"Working with tyler-karu was an absolute dream. They took my vague ideas and transformed them into a home that feels like it stepped out of a magazine. They were patient, creative, and incredibly professional throughout the entire process. I couldn't be happier with the final result!"
        },
        {
            name:"leroy james",
            img:"./rw3.png",
            review:"We were initially hesitant about hiring an interior designer, but tyler-karu put our minds at ease. They exceeded our expectations at every step. Their attention to detail and ability to source unique pieces truly elevated our space. We highly recommend them to anyone looking for a top-notch design experience"
        },
        {
            name:"brittany garcia",
            img:"./rw4.png",
            review:"tyler-karu made the entire design process incredibly collaborative and enjoyable. They were always open to our feedback and ensured we felt confident in every decision. Their expertise and trustworthiness were invaluable, and we wouldn't hesitate to recommend them to our friends and family."
        },
        {
            name:"julia stokes",
            img:"./rw5.png",
            review:"We were working with a tight budget, but tyler-karu still managed to create a stunning and functional design for our kitchen. They were incredibly resourceful in finding high-quality, affordable materials that fit our aesthetic. We're so grateful for their creativity and budget-conscious approach."
        },
    ])
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideCount = reviews.length;
    const slideRef = useRef(null)

    const handleNextSlide = () => {
        const nextSlide = currentSlide === slideCount - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(nextSlide);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextSlide();
        },10000);

        return () => clearInterval(interval);
    }, [currentSlide]); 


    return (
        <section id="moreInfo">

            <div id="info1">
            <div id="left">
                    <h1>Interior spaces Inspired solutions</h1>
                    <a>see our process</a>
            </div>
                <div id="right">
                    <img src="https://armandointerior.com/wp-content/uploads/2024/03/The-Luxury-And-Modern-CEO-Office-Interior-Design.jpg" />
                </div>
            </div>

            <div id="info2">
            <div id="left">
                    <img src="https://eng.smania.it/wp-content/uploads/2019/05/M1_O1_p1.jpg"/>
            </div>

            <div id="right">
                    <h1>over 100 interior design proects completed</h1>
                    <a>see our works</a>
                </div>
            </div>

            <div id="info3">
                <div id="slideContainer">
                <div className='slide' ref={slideRef}>
                <div id="simg">
                 <img src={reviews[currentSlide].img}/>
                </div>
                <h1>{reviews[currentSlide].name}</h1>
                <p>
                {reviews[currentSlide].review}
                </p>
               
                </div>
                </div>

                <div id="right">
                    <img src="https://www.migefurniture.com/wp-content/uploads/2023/09/PILOTAGE-4-e1695376300566.jpg"/>
                </div>
            </div>

            <div id="info4">
                <div id="left">
                    <img src="https://media.architecturaldigest.com/photos/6553d8773947b7f6f77b02c5/16:9/w_8688,h_4887,c_limit/Living%20room_%20Devon%20Grace%20Interiors_credit_%20Dustin%20Halleck_1.jpg"/>
                </div>
                <div id="right">
                    <h1>Shaping your living spaces together</h1>
                    <a>get in touch</a>
                </div>
            </div>

        </section>
    )
}