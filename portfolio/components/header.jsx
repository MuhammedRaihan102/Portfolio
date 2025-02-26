import React from 'react'
import Kaneki from '../src/assets/Best_Pfp_Kaneki.jpg'
const header = () => {
  return (
    <div>
      <header>
        <a href="#home" className='logo'>Muhammed <span className="spanclass">Raihan</span></a>
        <i class='bx bx-menu' id='menu-icon'></i>
        <nav>
            <a href="#home" >Home</a>
            <a href="#about" >About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
        </nav>
      </header>
      <section className='home' id='home'>
        <div className='home-img'>
            <img src={Kaneki} alt="mainimg" />
        </div>
        <div className='home-content'>
            <h1>Hi, It's <span className='name1'>Raihan</span> </h1>
            <h3 className='text-animation'>I'm a <span></span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro corporis, quas qui quidem amet vero excepturi ad nesciunt deserunt maxime modi voluptatem non enim nulla voluptas autem voluptates reprehenderit quibusdam!</p>
            <div className="social-icons">
                <a href=""><i class='bx bxl-linkedin' ></i></a>
                <a href=""><i class='bx bxl-github' ></i></a>
                <a href=""><i class='bx bxl-instagram-alt' ></i></a>
            </div>
            <a href="#" className='btn'>Hire Me</a>
        </div>

      </section>
    </div>
  )
}

export default header
