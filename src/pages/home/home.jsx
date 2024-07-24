import { About } from "../about/about"
import { Hero } from "../hero/hero"
import { More } from "../moreinfo/more"
import {Faq} from "../Faq/Faq"
import { useEffect } from "react"
import './home.css'

export const Home = ({dropOpen,toggleDrop}) => {
   
    return(
        <div id="home">
        <Hero dropOpen={dropOpen} toggleDrop={toggleDrop}/>
        <About />
        <More />
        <Faq />
        </div>
    )
}