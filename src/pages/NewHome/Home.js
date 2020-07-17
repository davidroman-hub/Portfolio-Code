import React,{Fragment, Component} from 'react'
import './newHome.scss'
import './list.css'
import { Link, animateScroll as scroll } from "react-scroll";
import resume from '../../shared/navbar/resume.pdf'
// images skills
import mongo from './images/mongo.png'
import next from './images/next.png'
import boots from './images/boots.png'

// images Protfolio
import marysol from './images/marysol.PNG'
import roger from './images/roger.PNG'
import auth from './images/auth.PNG'
import abi from './images/abi.PNG'
import ecom from './images/ecommerce.PNG'
import mine from './images/mine.PNG'
import lost from './images/lost.PNG'
import venecia from './images/venecia.PNG'
//import venecia from './images/venecia.PNG'

const NewHome  = () => { 
    return (
        <Fragment>

          {/* HEADER */}
         
        <header className="header-content "  id="header-content">
            <div className="header-text">   
                 <p className='Logo1'>      
              </p>
                    <h4 className="arrow">
                        Developing &  Web Design
                    </h4>
                        <hr/>
                    <div className="figure text-center"/>    
                    <h6 className="arrow-2"> We can build awesome things together</h6>    
                    <br/>
                    <Link 
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}         
                    className="botton1 btn btn-primary btn-xl js-scroll-trigger">READ MORE</Link>
            </div>
        
        </header>
     
             {/* ABOUT */}

         <div>
            <section className="container" id='about' >
              <br/>
                <h2 className="h2-subtitle" id='about-us'>
               I GOT JUST WHAT YOU NEED
                </h2>
           <hr/>
                <div className="About-container">
                    <div className="about-us text-center">
                    Fullstack JS, Frontend & Backend Developer,
                    Acuaculture Engineer & Web Designer. 
                    </div>
                    <hr/>
                    
                </div>
                <p className='text-after'>
                      Freelance, independent, creative , adaptative, multi-Tasking & able to achieve my goals.
                      <br/>
                      Detail & love to work as a Team.
                    </p>
                <br/>
                <div className='arrow-2 text-center'>
                <Link 
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}         
                    className="botton btn btn-xl">WHAT I DO?</Link>
               </div>
                <hr/>          
              </section>
        </div> 

    
     

            {/* SKILLS */}

        

        <h3 className="text-center mt-3" style={{fontFamily:'Open Sans Condensed,sans-serif'}}>PROJECTS</h3> 
        <div className='figure2'/>

        {/* PORTFOLIO */}
        <div className="portfolio" id='projects'>
            <div className="Projects">

              {/* //MarySol */}
                      <div className="marysol">
                          <img src="https://res.cloudinary.com/dm8dxwvix/image/upload/v1594912435/Portfolio/marysol_fxgzeh.png" className="img img-fluent" alt='Marysol'/>          
                      </div>
                      <div className="marysolLetter">
                      <h2 className=" text-center" style={{color:'#fff'}}> Restaurant <br/> Mar y Sol </h2>
                      <p className="marysolD text-center">
                      E-commerce MERN App, using Bootstrap 4, React.JS ,
                      MongoDB, Express.JS , Node.JS, Sass,  Google auth
                      Hosting in Digital Ocean.
                      <br/>
                      <a className="linkVisit" href="http://cevicheriamarysol.com" target='_blank' rel='noopener noreferrer'  >Visit</a>
                      
                      </p>  
                      
     
       </div>
      </div>
      <div className="Projects">

  {/* fusion */}

        <div className="lostFusion">
            <img src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1594914934/Portfolio/lost_t7k2sv.png' className="img img-fluent" alt='LostFusion'/>          
        </div>
        <div className="lostFusionLetter">
        <h2 className=" text-center" style={{color:'#fff'}}> Lost fusion Rock Band </h2>
        <p className="lostFusionD text-center">
          A React JS static App using Sass,Bootstrap 4 ,Flexbox & Netlify
        <br/>
        <a className="linkVisit" href="https://lostfusion.com.mx" target='_blank' rel='noopener noreferrer'  >Visit</a>
        
        </p>  
        

  </div>
  </div>

         {/* GITHUB SECTION */}
      
         <div className="github-section text-center">
          <br/>
                      <h4 className="text-center">
                        CHECK MY CODE ON GITHUB
                        </h4>
                        <div className="figure"/>  
                        <p className="text-git">I have specialized mainly in MERN applications, 
                          I invite you to visit my Github portfolio to see the process of each of my Rest API's and
                           Applications I have created, and see more projects I’ve done. 
                        </p>
                     
                        <i className="git-icon fab fa-github"></i>
                        <br/>
                        <a className="git-btn btn mb-4 "  href="https://github.com/davidroman-hub" target="_blank" rel="noopener noreferrer">Github</a>
                    
              </div>

      <div className="venecia">
            
            <div className="veneciaLetter">
            <h2 className="text-center" style={{color:'#000'}}> Events Room "Venecia" Mexico City </h2>
            <p className="veneciaD text-center">
             MERN App, using Bootstrap 4, React JS , MongoDB, Express , Node JS,<br/>
             Sass & Sendgrid service. Hosting in Digital Ocean.
                 <br/>
                   <a className="linkVisitWhite" href="http://salonvenecia.com.mx" target='_blank' rel='noopener noreferrer'  >Visit</a> 
                    </p>    
            </div>
            <div className="venecia-img">
                    <img src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1594984458/Portfolio/venecia_fo6lyg.png' className="" alt=''bodas/>          
                </div>
            </div>
            
  </div>
      <div className="Roger">
            <div className="img-roger">
            <img src="https://res.cloudinary.com/dm8dxwvix/image/upload/v1594986641/Portfolio/demo_y4mlo3.png" className="img img-fluent" alt='LostFusion'/>
            </div>
            <div className="desc">
            <h2 className="text-center" style={{color:'#000', fontFamily:'sans-serif'}}> Roger & Paq (DEMO) E-commerce </h2>
            <p className="veneciaD text-center">
                E-Commerce MERN App, using Bootstrap 4, React JS , MongoDB, Express , Node JS,<br/>
                Sass & Sendgrid service. Hosting in Digital Ocean. (DEMO)
                 <br/>
                   <a className="linkVisitWhite" href="http://68.183.135.73/shop" target='_blank' rel='noopener noreferrer'  >Visit</a> 
                    </p>    
            </div>
      </div>


<div>
<div className="services" id='skills'>
                <br/>
                <h4 className='text-center mb-4'>FRAMEWORKS AND PLATFORMS SKILLS</h4> 
                <div className='figure2'/>
                <div className="Hobbies-icon">
                    <p className='H-icons'>
                      <i className="frame fab fa-react"></i>
                        <h5 className="text-center">React</h5>
                    </p>
                    <p className='H-icons'>
                      <i className="frame fab fa-node-js"></i>
                      <h5 className="text-center">Node JS</h5>
                    </p>
                   
                    <p className='H-icons'>
                      <i className="frame fab fa-digital-ocean ml-4"></i>
                      <h5 className="text-center">Digital Ocean</h5>
                    </p>
                    {/* <p className='H-icons '>
                      <i className="frame fab fa-aws"></i>
                      <h5 className="text-center">Amazon Web S.</h5>
                    </p>  */}
                    <p className='H-icons'>
                      <i className="frame fab fa-sass"></i>
                      <h5 className="text-center">Sass</h5>
                    </p>
                    <br/>
                     <p className='mongo '>
                      <img src={mongo} alt='/' />
                      <h5 className="text-center">Mongo DB</h5>
                    </p>
                    <p className='mongo '>
                      <img src={next} alt='/' />
                      <h5 className="text-center">Next JS</h5>
                    </p> 
                    <p className='mongo '>
                    <img src={boots} alt='/' className="text-center"/>
                      <h5 className="text-center">Bootstrap 4</h5>
                    </p>
                </div>
        </div> 

{/* <h3 className="text-center mt-3" style={{fontFamily:'Open Sans Condensed,sans-serif'}}>ANOTHER PROJECTS</h3> 
        <div className='figure2'/> */}


{/* <div class="tasks">
  <input id='label-1' type='checkbox' />
  <label for='label-1'>
    <h2>Ultimate Auth
      <span>MERN-application for login, with account activation using sendgrid, google, facebook,Bootstrap 4, React JS , MongoDB, Express , Node JS & Sass.</span>
      <a className="linkList" href="http://68.183.135.73/shop" target='_blank' rel='noopener noreferrer'  >Visit</a>          
    </h2>   
  </label>

  <input id='label-2' type='checkbox' />
  <label for='label-2'>
    <h2>e-mail processing 
      <span>art&amp;&amp;code, personal</span>
    </h2>   
  </label>
 
  <input id='label-3' type='checkbox'/>
  <label for='label-3'>
    <h2>Meditation
      <span>out of my mind</span>
    </h2>   
  </label>

  <input id='label-4' type='checkbox'/>
  <label for='label-4'>
    <h2>Code, Code, Code
      <span>hit f12 &amp; let's get wasted</span>
    </h2>   
  </label>
 
  <input id='label-5' type='checkbox'/>
  <label for='label-5'>
    <h2>Watch Screencast
      <span>Ruby on Rails, yeah!</span>
    </h2>   
  </label>
</div> */}

</div>




{/* 
  <div className="portfolio" id='projects'>
    <hr/>

     <div className="Hobbies-icon">   
          
        
        <div className='container-card'>
           <div className="card">
              <img src={auth} alt='/' />
              <h6 className="mb-1 mt-2">Ultimate Auth</h6>
                      <div className="figure2"/>
                      <p className="description-t mb-1">MERN-application for login , with account activation using sendgrid, google, facebook,Bootstrap 4, React JS , MongoDB, Express , Node JS & Sass. </p>
                        <a href="http://206.189.227.84/" target='_blank' rel='noopener noreferrer'>Read more</a>
            </div>
        </div>
        <div className='container-card'>
           <div className="card">
              <img src={ecom} alt='/' />
              <h6 className="mb-1 mt-2">Simple E-commerce</h6>
                      <div className="figure2"/>
                      <p className="description-t mb-1">E-commerce MERN App, using Bootstrap 4, React JS , MongoDB, Express , Node JS, Sass & BRAINTREE service. </p>
                        <a href="https://github.com/davidroman-hub/ecommerce-front" target='_blank' rel='noopener noreferrer'>Read more</a>
            </div>
        </div>
        <div className='container-card'>
           <div className="card">
              <img src={mine} alt='/' />
              <h6 className="mb-1 mt-2">My Personal page</h6>
                      <div className="figure2"/>
                      <p className="description-t mb-5">A React JS App using Bootstrap 4, Sass, Netlify and Node Js  </p>
                        <a href="https://github.com/davidroman-hub/Real-portafolio" target='_blank' rel='noopener noreferrer'>Read more</a>
            </div>
        </div>
        
        <div className='container-card'>
           <div className="card">
              <img src={abi} alt='/' />
              <h6 className="mb-1 mt-2">Contemporary Artist Blog</h6>
                      <div className="figure2"/>
                      <p className="description-t mb-5">A React JS App using Sass & Netlify</p>
                        <a href="https://romantic-sammet-63ec69.netlify.app/" target='_blank' rel='noopener noreferrer'>Read more</a>
            </div>
        </div>
       
        </div>
      </div>         */}

            {/* RESUME */}

      <div className="resume">
        <br/>
        <h4 className="info5 text-center">WOULD YOU LIKE TO CHECK OUT MY RESUME?</h4>
        <div className="figure"/>
      <div className="spacer3"/>
       <a className="botton btn btn-xl" href={resume} download={resume} >YEAH!</a>
      </div>


          {/* Contact */}

      <div >
                 <div id='contact'></div>
             </div>
           
            <div className="info">
                 Get in touch with me!
            </div>
            <div className='figure2 mb-5'/>
            <div className="font-figures">
              
                 <div className="mailes">
                    <i class="fas fa-envelope-open">
             
                       {/* <p className="text-p">Jobroman83@gmail.com</p> */}
                      <a  className='mail' href="mailto:david.roman.works">Jobroman83@gmail.com</a>
                      <br/>
                     
                      </i>
                 </div>
                 
                    <i class="fas fa-phone mt-4 ml-5">
                     
                      <p className="text-p">+33 7 87 42 20 67 FR <br/>
                      +52 55 18 52 64 12 MX
                      </p>
                     
                      <br/>
                     
                      </i>
                 
                 {/* <i class="fab fa-whatsapp-square">
                      <p>Phone</p>
                      <p className="text-p">+33 7 87 42 20 67 (only calls- France)</p>
               
                   </i> */}

             </div> 
        
        
    </Fragment>
    )
}

export default NewHome