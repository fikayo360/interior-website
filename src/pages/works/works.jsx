import './works.css'
import { Drop } from '../../components/navDrop/drop'
import { NavBar } from '../../components/nav/nav'
export const Works = ({toggleDrop,dropOpen}) => {
    return (
        <section id='works'>
             <NavBar toggleDrop={toggleDrop} dropOpen={dropOpen} />
            <Drop dropOpen={dropOpen} toggleDrop={toggleDrop}/>
            <h1>our past works</h1>
            <div id='wrks'>
              
                <div className="works">
                    <img src='https://www.decorpot.com/images/blogimage1361284108interior-designs-for-master-bedroom.jpg'/>
                    <span className='wrkT'>wrk name</span>
                </div>
                <div className="works">
                    <img src='https://asset.skoiy.com/9b80a6f781ff336f/yrwwqpnyb7ys.jpg?w=970&q=90'/>
                    <span className='wrkT'>wrk name</span>
                </div>
                <div className="works">
                    <img src='https://asset.skoiy.com/9b80a6f781ff336f/pucmxyigsdij.jpg?w=970&q=90'/>
                    <span className='wrkT'>wrk name</span>
                </div>
                <div className="works">
                    <img src='https://images.squarespace-cdn.com/content/v1/5f401610829d211aa16190e7/5cd3dcf5-4715-4b8d-9495-faff82c770fa/helen-green-luxury-interior-designer-london.jpg'/>
                    <span className='wrkT'>wrk name</span>
                </div>
                <div className="works">
                    <img src='https://fancyhouse-design.com/wp-content/uploads/2023/11/In-this-large-living-room-interior-design-stone-cladding-adds-a-rustic-charm-to-the-space.jpg'/>
                    <span className='wrkT'>wrk name</span>
                </div>
                <div className="works">
                    <img src='https://ansainteriors.com/wp-content/uploads/2022/03/ncr-interior-design.jpg' />
                    <span className='wrkT'>wrk name</span>
                </div>
                <div className="works">
                    <img src='https://www.milindpai.com/wp-content/uploads/2023/03/maxresdefault.jpg' />
                    <span className='wrkT'>wrk name</span>
                </div>
                <div className="works">
                    <img src='https://www.carpentry.sg/wp-content/uploads/2023/02/Jalan-Songket-Landed-Property-Watermark-7.jpg' />
                    <span className='wrkT'>wrk name</span>
                </div>
                <div className="works">
                    <img src='https://housing.com/news/wp-content/uploads/2022/11/image7-64.png' />
                    <span className='wrkT'>wrk name</span>
                </div>
                <div className="works">
                    <img src='https://media.designcafe.com/wp-content/uploads/2024/01/24175345/modern-luxury-bedroom-design-ideas.jpg' />
                    <span className='wrkT'>wrk name</span>
                </div>
                <div className="works">
                    <img src='https://ansainteriors.com/wp-content/uploads/2020/08/ultra-luxury-bedroom-design-667x400.jpg' />
                    <span className='wrkT'>wrk name</span>
                </div>
                <div className="works">
                    <img src='https://housing.com/news/wp-content/uploads/2022/11/image7-64.png' />
                    <span className='wrkT'>wrk name</span>
                </div>
            </div>
        </section>
    )
}