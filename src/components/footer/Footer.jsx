import './footer.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <section id='footer'>
            <div id='fWrap'>
                    <h1 id='fLead' className='fitems' >useful links</h1>

                    <div className='fitems'>
                        <h1>sitemap</h1>
                    <ul>
                    <li key="works">
                    <Link to="/">home</Link>
                    </li>
                    <li key="works">
                    <Link to="/works">works</Link>
                    </li>
                    <li key="process">
                    <Link to="/process">process</Link>
                    </li>
                    <li key="contact">
                    <Link to="/contact" >contact</Link>
                    </li>
                    </ul>
                    </div>
                   
               
                    <div className='fitems'>
                        <h1>socials</h1>
                    <ul>
                        <li><a>instagram</a></li>
                        <li><a>facebook</a></li>
                        <li><a>twitter</a></li>
                        <li><a>linkedin</a></li>
                        <li><a>pinterest</a></li>
                    </ul>
                    </div>

                    <div className='fitems'>
                    <h1>contact us</h1>
                    <p>
                    Contact us today for a free consultation and embark on a journey of transforming your space into a haven that reflects your unique personality.
                    Tyler Karu &copy; 2024 all rights reserved 
                    </p>
                    </div>
                
                 
            </div>
        </section>
    )
}