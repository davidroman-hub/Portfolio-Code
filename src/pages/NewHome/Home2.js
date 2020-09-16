import React,{Fragment, Component} from 'react'
import './ModernHome.scss'
import { Link, animateScroll as scroll } from "react-scroll"

/// import images
import developper from './images/developper.jpg'
import react from './images/react.png'
import code from './images/code.jpeg'
import mern from './images/hub.png'
import David from './images/david.jpg'
// images skills
import mongo from './images/mongo.png'
import next from './images/next.png'
import boots from './images/boots.png'


const Header2 = () => (
    <div className='headernew'>
        <div className='description'>
            <span className='first'>
            Hello!
            <br/>
                <span style={{color:'#d04f46'}}> I’m David</span>, Front-end
            <br/>    
                Web Developer
            </span>
        </div>
        <div className='david'>
            <img src={David} alt='/'/>
        </div>
    </div>
)

const Header = () => (
    <header className=''>
        <div className='textos'/>
        {/* <h1 className='titulo'>David Román</h1> */}
        <h3 className='subtitulo'>David Román</h3>
        <div className="figure text-center"/>    
        <h6 className="arrow-2"> We can build awesome things together</h6>
        <br/>
        <Link 
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}         
            className="boton" style={{cursor:'pointer'}}>READ MORE</Link>    
        {/* <a href='/' className='boton'>READ MORE</a> */}
        <div className='sesgoAbajo'></div>
    </header>
)

const Main = () => (
    <main>
        <section className='acerca-de' id='about'>
            <div className='contenedor'>
                <h2 className='sobre-nosotros'>I GOT JUST WHAT YOU NEED</h2>
                {/* <h3 className='slogan'>Tirando codigo en la web</h3> */}
                
                <p className='parrafo'>
                <div className="About-container">
                        <div className="about-us text-center">
                        Fullstack JS, Frontend & Backend Developer,
                        Acuaculture Engineer & Web Designer. 
                        </div>
                    <hr/>
                </div>
                <br/>
                <p className='text-after'>
                    Freelance, independent, creative , adaptative, multi-Tasking & able to achieve my goals.
                </p>
                <p className='text-after'>
                    Detail & love to work as a Team.
                </p>
                </p>
                <div className='arrow-2 text-center'>
                <Link 
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}         
                    className="botton btn btn-xl">WHAT I DO?</Link>
                </div>
                
            </div>    
        </section>
        <section className='galeria'>
            <div className='sesgoArriba'></div>
            <div className='imagenes'>
                <img src={developper} alt='develop'/>
            </div>
            <div className='imagenes'>
                <img src={mern} alt='react'/>
                <div className='encima'>
                <a  href="https://github.com/davidroman-hub" target="_blank" rel="noopener noreferrer">
                    <h2>GitHub</h2>
                    <div></div>
                </a>
                </div>
            </div>
            
            <div className='imagenes'>
                <img src={code} alt=''/>
                
            </div>
            <div className='imagenes'>
                <img src={react} alt=''/>
            </div>
            <div className='sesgoAbajo'></div>
        </section>
    </main>
)

const Skills = () => (
    <div className="services" id='skills'>
                <br/>
                <h4 className='text-center mb-4 '>Frameworks and Platform skills</h4> 
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
                    <p className='H-icons'>
                        <i className="frame fab fa-js"></i>
                        <h5 className="text-center">JavaScript</h5>
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
)

const Projects = () => (
    <section className='projects'>
        <h1 className='ml-5'> <span style={{color:''}}>P</span>rojects  </h1>
        <div className='container'>
            <div className='project-photos'>
                <div style={{color:'white'}}>
                    1
                </div>
                <div style={{color:'white'}}>
                    <div>
                        2
                    </div>
                    <div>
                        3
                    </div>
                </div>
            </div>    
        </div>
    </section>
)

const SobreNosotros = () => (
    <section className='miembros'>
        <div className='contenedor'>
            <h2 className='sobre-nosotros'>Nuestro equipo</h2>
            <h3 className='slogan'>Conoce nuestro equipo de trabajo</h3>
            <div className='cards-modernHome'>
                <div className='card-modernHome'>
                    <img src='/' alt='/'/>
                    <h4>David Roman</h4>
                    <p>Lorem4</p>
                </div>
                <div className='card-modernHome'>
                    <img src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1594912435/Portfolio/marysol_fxgzeh.png' alt='/'/>
                    <h4>David Roman</h4>
                    <p>Lorem4</p>
                </div>
                <div className='card-modernHome'>
                    <img src='/' alt='/'/>
                    <h4>David Roman</h4>
                    <p>Lorem4</p>
                </div>
            </div>
        </div>
    </section>
)

const Fondo = () => (
    <section className='fondo'>
        <div className='sesgoArriba'></div>
        <div className='contenedor'>
            <h2 className='titulo-patrocinadores'>PROJECTS</h2>
            <h3 className='subtitulo patrocinadores'> Conoce algunos de nuestros patrocinadores</h3>
            <div className='clientes'>
                <div className='cliente'>
                    <img src='/' alt='/'></img>
                </div>
                <h3 className='susbtitulo-patrocinadores'>Y muchos mas clientes</h3>
            </div>
        </div>
        <div className='sesgoAbajo-unico'></div>
    </section>
)

const Footer = () => (
    <footer>
        <div className='contenedor'>
            <h2 className='titulo-footer'>Contactanos</h2>
            <h3 className='subtitulo-footer'>Lo apreciariamos mucho</h3>
            <div> Alguna cosasssssssssssss</div>
        </div>
    </footer>
)


const ModernHome = () => {
    return(
        <>
            <Header2/>
            <Main/>
            <Skills/>
            {/* <Projects/> */}
            {/* <SobreNosotros/> */}
            {/* <Fondo/> */}
            {/* <Footer/>  */}
        </>
    )
}



export default ModernHome