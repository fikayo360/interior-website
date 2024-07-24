import './process.css'
import { Drop } from '../../components/navDrop/drop'
import { NavBar } from '../../components/nav/nav'
export const OurProcess = ({toggleDrop,dropOpen}) => {

    return (
        <section id='process'>
             <NavBar toggleDrop={toggleDrop} dropOpen={dropOpen} />
            <Drop dropOpen={dropOpen} toggleDrop={toggleDrop}/>
            <div className='p'>
            
                <h1>Our process</h1>
            
            <p>
            At tyler karu, we believe your home should be a reflection of your unique style and story. 
            That's why we've crafted a collaborative and comprehensive interior design process to guide you seamlessly from initial vision to a beautifully realized living environment.
            </p>

            <p>
            Our journey begins with understanding your aspirations. Through in-depth consultations, we'll delve into your lifestyle, functional needs,
             design preferences, and budget. We'll present mood boards, space planning proposals, and material samples to spark inspiration and ensure alignment.
            </p>

            <p>
            With your input, we'll translate your vision into a detailed design plan. This includes detailed floor plans, 3D renderings, 
            and a comprehensive material selection guide. We'll refine the design collaboratively, ensuring every detail reflects your personality and maximizes functionality.
            </p>
            </div>

            <div className='p'>
        
                <h1>Our team</h1>
    
            <p>
            Our team will meticulously oversee the transformation of your space. We'll ensure flawless 
            installation of all elements, adhering to the highest quality standards. We'll be your on-site resource, addressing any questions or concerns that may arise.
            </p>

            <p>
            The moment you've been waiting for! We'll unveil your breathtakingly transformed space. 
            We'll handle furniture placement, accessory styling, and final touches to create a cohesive and inviting environment you'll cherish.
            </p>

            <p>
            Our commitment extends beyond the transformation. We offer ongoing support to ensure your space continues to evolve with your needs. 
            We're passionate about creating lasting relationships, and we're here to help you maintain your dream home for years to come.
            </p>
            </div>

            <div id="team">
                <div className="member">
                    <img src='https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600' />
                    <div className='mBottom'>
                        <h1>Thomas</h1>
                        <h1>lead designer</h1>
                    </div>
                </div>

                <div className="member">
                    <img src='https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                    <div className='mBottom'>
                        <h1>james</h1>
                        <h1>senior partner</h1>
                    </div>
                </div>

                <div className="member">
                    <img src='https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=600' />
                    <div className='mBottom'>
                        <h1>brad</h1>
                        <h1>graphics designer</h1>
                    </div>
                </div>

                <div className="member">
                    <img src='https://images.pexels.com/photos/713520/pexels-photo-713520.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                    <div className='mBottom'>
                        <h1>Tyler</h1>
                        <h1>lead consultant</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}