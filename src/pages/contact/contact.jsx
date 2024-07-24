import './contact.css'
import { Drop } from '../../components/navDrop/drop'
import { NavBar } from '../../components/nav/nav'
export const Contact = ({dropOpen,toggleDrop}) => {
    return (
        <section id='contact'>
                 <NavBar toggleDrop={toggleDrop} dropOpen={dropOpen} />
                <Drop dropOpen={dropOpen} toggleDrop={toggleDrop}/>
                <div id='left'>
                    <img src='https://fancyhouse-design.com/wp-content/uploads/2023/12/A-large-living-room-with-its-lavish-interior-design.jpg'/>
                </div>

                <form>
                    <h1>contact us</h1>
                    <div id='nameField'>
                        <input placeholder="first name" />
                        <input placeholder="last name" />
                    </div>
                    <input type="email" placeholder="email address" />
                    <textarea placeholder="describe your proect" />
                    <input type="number" placeholder="your budget" />
                    <button type="submit">submit</button>
                </form>
        </section>
    )
}