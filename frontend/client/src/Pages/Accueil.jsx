// import React from 'react'
import video from '../video/video1.mp4'

import swiperCity from '../image/city.jpg'
import player from '../image/player.png'
import playerinterface from '../image/Player-3-1.png' 
import svg from '../image/svg.jpg' 
import ballon from '../image/FIFA-.png'
import kodas from '../image/kodas (3).png'
import event  from '../image/event.jpg'
import joueur  from '../image/joueur.png'
import { Data } from '../Components/Data'


import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import { Link } from 'react-router-dom'

export default function Accueil() {

  
  return (
    <div className=''>
      
      <div className='Appvideo  '>

<video autoPlay loop muted 
src={video}>

</video>
<div className='text-wrapper position-absolute top-50 start-50 translate-middle text-center text-light text-light'> 
 <h2>Bienvenue chez ChiMatch</h2>
  <h4>Reserver votre terrain</h4>
  <Link to={'/Reservation'} className=' btn btn-warning'>Reserver </Link>
</div>
<div>
</div>
</div> 

<section className='section-body '>
<section id="About" class="about section-padding">

     <div class="container">
      <div class="row">
          <div class="col-lg-4 col-md-12  col-12">
                <div class="about-img">
                    <img src={swiperCity} alt="" class="img-fluid"/>
                </div>
               
          </div>
          <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
            <div class="about-text">

              <h2> Nous fournissons le meilleur  <br />  service </h2>
              <p>Bienvenue sur ChiMatch, votre solution tout-en-un pour tout ce qui concerne le football, les activités de loisirs et les événements ! Chez FootHub, nous avons créé une plateforme unique qui s'adresse aux passionnés du plus beau sport du monde, aux personnes recherchant des activités de loisirs, et à ceux qui souhaitent rester informés sur les événements passionnants. De plus, notre boutique intégrée offre une expérience d'achat fluide pour tous vos besoins liés au football.</p>
           <Link  to={'/Contact'} className="btn btn-warning" > Contact </Link>
            </div>
          </div>
        </div>
     </div>
 </section> 
 <section className='section-services  ' >

      <div className='cards-services  '>
        <div className='Cards'>
 <div className="card">
   <div className="imgBx">
     <img src={joueur} alt="" />
   </div>
   <div className='content'>
     <h2 >Foot Loisirs</h2>
    <p>Chi Match Academy offre une opportunité unique à tous les passionnés de sport de partager les valeurs d’un grand club, reconnu pour son savoir-faire et la qualité de sa formation</p>
   </div>
 </div>
 <div className="card">
   <div className="imgBx">
     <img src= {event} alt="" />
   </div>
   <div className='content'>
     <h2>Evenements</h2>
     <p>
ÉVÈNEMENTS
À ChiMatch, Vous pouvez organiser des évènements sur-mesure (Anniversaires, Goûters, Tournois privés, Tournois corporate et bien d’autres choses)</p>
   </div>
 </div>
 <div className="card">
   <div className="imgBx">
     <img src={kodas} alt="" />
   </div>
   <div className='content'>
     <h2 >STORE</h2>
    <p> A Chi Match Store vous pouvez  commander ,  Acheter et louer des chaussures de foot et des euipements sportifs en ligne des articles de sport des grandes marques, livraison à domicile partout au Maroc.</p>
   </div>
 </div>
 

</div>

      </div>
      </section>

      </section>


      <div class="">
                         <div  class="col-md-12">
                          <div class="section-fin text-center " >
                            <h2> Ils nous font Confiance</h2>

                            <Swiper
      effect={'coverflow'}
      grabCursor={false}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={false}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper  "
     >

      {Data.map((result,index)=>(  <SwiperSlide key={index}>
        <  img src={result.img}  className='img-service  ' />

        <p className='text-services'>{result.title}</p>
      </SwiperSlide>))}
    
      
    </Swiper>
                          </div>
                    </div>
              </div>
 
 
 

 
    </div>
  )
}



{/* <div className=' section-swiper  container ' >

<div className='row'>
  <div className='col-lg-12 col-md-12'>
<Swiper
      effect={'coverflow'}
      grabCursor={false}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={false}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper  "
     >

      {Data.map((result,index)=>(  <SwiperSlide key={index}>
        <  img src={result.img}  className='img-service  ' />

        <p className='text-services'>{result.title}</p>
      </SwiperSlide>))}
    
      
    </Swiper>
    </div>
    </div>
    </div>
     */}
