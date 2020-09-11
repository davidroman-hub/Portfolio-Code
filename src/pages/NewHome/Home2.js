import React,{Fragment, Component} from 'react'
import './ModernHome.scss'


/// import images
import developper from './images/developper.jpg'
import react from './images/react.png'
import code from './images/code.jpeg'
import mern from './images/mern.jpg'

const Header = () => (
    <header className=''>
        <div className='textos'/>
        <h1 className='titulo'>David Román</h1>
        <h3 className='subtitulo'>Full Stack JS & Front-End Developper</h3>
        <a href='/' className='boton'>READ MORE</a>
        <div className='sesgoAbajo'></div>
    </header>
)

const Main = () => (
    <main>
        <section className='acerca-de'>
            <div className='contenedor'>
                <h2 className='sobre-nosotros'>Sobre mi</h2>
                <h3 className='slogan'>Tirando codigo en la web</h3>
                <p className='parrafo'>
                    ¿Qué es Lorem Ipsum?

                    Lorem Ipsum es simplemente el texto de relleno 
                    de las imprentas y archivos de texto. Lorem Ipsum 
                    ha sido el texto de relleno estándar de las industrias
                    desde el año 1500, cuando un impresor 
                    (N. del T. persona que se dedica a la imprenta) 
                    desconocido usó una galería de textos y los mezcló 
                    de tal manera que logró hacer un libro de textos especimen. 
                    No sólo sobrevivió 500 años, sino que tambien ingresó como 
                    texto de relleno en documentos electrónicos, 
                    quedando esencialmente igual al original. 
                    Fue popularizado en los 60s con la creación de las hojas "Letraset", 
                    las cuales contenian pasajes de Lorem Ipsum, 
                    y más recientemente con software de autoedición, 
                    como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                </p>
                
                <a href='/' className='boton'>Suscribete</a>
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
                    <h2>David Roman</h2>
                    <div></div>
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


const SobreNosotros = () => (
    <section className='miembros'>
        <div className='contenedor'>
            <h2 className='sobre-nosotros'>Nuestro equipo</h2>
            <h3 className='slogan'>Conoce nuestro equipo de trabajo</h3>
            <div className='cards-modernHome'>
                <img src='/' alt='/'/>
                <h4>David Roman</h4>
                <p>Lorem4</p>
            </div>
            <div className='cards-modernHome'>
                <img src='/' alt='/'/>
                <h4>David Roman</h4>
                <p>Lorem4</p>
            </div>
            <div className='cards-modernHome'>
                <img src='/' alt='/'/>
                <h4>David Roman</h4>
                <p>Lorem4</p>
            </div>
        </div>
    </section>
)

const Fondo = () => (
    <section className='fondo'>
        {/* <div className='sesgoArriba'></div> */}
        <div className='contenedor'>
            <h2 className='titulo-patrocinadores'>Nuestros clientes</h2>
            <h3 className='subtitulo patrocinadores'> Conoce algunos de nuestros patrocinadores</h3>
            <div className='clientes'>
                <div className='cliente'>
                    <img src='/' alt='/'></img>
                </div>
                <h3 className='susbtitulo-patrocinadores'>Y muchos mas clientes</h3>
            </div>
        </div>
        {/* <div className='sesgoAbajo-unico'></div> */}
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
            <Header/>
            <Main/>
            <SobreNosotros/>
            <Fondo/>
            <Footer/>
        </>
    )
}



export default ModernHome