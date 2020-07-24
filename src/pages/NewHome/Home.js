import React,{Fragment, Component} from 'react'
import './newHome.scss'
import './list.css'
import { Link, animateScroll as scroll } from "react-scroll";
import resume from '../../shared/navbar/resume.pdf'
import {bounce}  from "react-animations"
import styled, {keyframes} from 'styled-components'
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

const Bounce = styled.div`animation: 4s ${keyframes`${bounce}`} infinite`


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
          <a href="http://cevicheriamarysol.com" target='_blank' rel='noopener noreferrer' >
            <img src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1594912435/Portfolio/marysol_fxgzeh.png' className="img img-fluent" alt='LostFusion'/>          
          </a>
        </div>
        <div className="marysolLetter">
        <h2 className=" text-center" style={{color:'#fff'}}> Restaurant Mar y Sol  </h2>
        <p className="marysolD text-center">
        E-commerce MERN App, using Bootstrap 4, React.JS , MongoDB,<br/> Express.JS , Node.JS, Sass, Google auth Hosting in Digital Ocean.
        <br/>
        <a className="linkVisit" href="http://cevicheriamarysol.com" target='_blank' rel='noopener noreferrer'  >Visit</a>
        
        </p>  
        

  </div>
      </div>
      <div className="Projects">

  {/* fusion */}

        <div className="lostFusion">
          <a href="https://lostfusion.com.mx" target='_blank' rel='noopener noreferrer' >
            <img src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1594914934/Portfolio/lost_t7k2sv.png' className="img img-fluent" alt='LostFusion'/>          
          </a>
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
              <a  href="http://salonvenecia.com.mx" target='_blank' rel='noopener noreferrer' >
                    <img src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1594984458/Portfolio/venecia_fo6lyg.png' className="" alt=''bodas/>          
              </a>  
                </div>
            </div>
            
  </div>
      <div className="Roger">
            <div className="img-roger">
            <a href="http://68.183.135.73/shop" target='_blank' rel='noopener noreferrer' >
              <img src="https://res.cloudinary.com/dm8dxwvix/image/upload/v1594986641/Portfolio/demo_y4mlo3.png" className="img img-fluent" alt='LostFusion'/>
            </a>   
            </div>
            <div className="desc">
            <h2 className="text-center" style={{color:'#000', fontFamily:'sans-serif'}}> Roger & Paq (DEMO) E-commerce </h2>
            <p className="veneciaD text-center">
                E-Commerce MERN App, using  React JS , Braintree ,Bootstrap 4 ,MongoDB , Express , Node JS,<br/>
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

</div>


            {/* RESUME */}

      <div className="resume">
        <br/>
        <h4 className="info5 text-center mt-4">WOULD YOU LIKE TO CHECK OUT MY RESUME?</h4>
        <div className="figure"/>
      <div className="spacer3"/>
       <a className="botton btn btn-xl" href={resume} download={resume} >YEAH!</a>
          <h4 className='mt-3'>OR</h4>
         <div className='social-networks'>
           <div className='linkedin'>
           <a  href="https://www.linkedin.com/in/job-david-roman-b7a2b217a/?locale=fr_FR" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
           </div>
           <div className="githubS">
             <Bounce>
                  <a  href="https://github.com/davidroman-hub" target="_blank" rel="noopener noreferrer">
                    <i className='fab fa-github' ></i>
                  </a>
             </Bounce>
           
           </div>
         </div>

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
                
             </div> 
             
        
        
    </Fragment>
    )
}

export default NewHome