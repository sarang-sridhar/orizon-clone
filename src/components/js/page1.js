import '../css/page1.css'
import bar from '../images/bar.jpeg'
function Page1(){
   return(
       <>
       <div className="Logodiv"></div>
       <div className="Orizon">Orizon</div>
       <div className="contact-div">Contact us</div>
       
       <div className="menu-div"><img id="I1"src={bar}></img><img id="I2"src={bar}></img></div>
       <div className="noofproj">100+ projects completed</div>
       <div className="illustration-1"></div>
       <div className="introtext">We make <div id="blackintro">apps,websites and brands</div></div>
       <div id="desc-line"></div>
       <div id="desc">Orizon is a leading design agency based in Canada. We help startups & Fortune 500 companies delight humans on the other side of the screen</div>
       <div id="play-button"></div>
       <div id="showreel-button"></div>
       <div id="showreel">VIEW SHOWREEL</div>
       <div id="featured">FEATURED PROJECTS</div>
       <div id="featured-line"></div>
       </>
   )
}
export default Page1;