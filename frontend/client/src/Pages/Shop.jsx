import React from 'react'
import shop from '../image/kodasat.jpg' 

export default function Shop() {
  return (
    <div>

<section class="about_section layout_padding">
<div class="container ">
 <div class="row">
  <div class="col-md-6 px-0">
    <div class="img_container">
     <div class="img-box">
       <img src={shop} alt="" />
           </div>
            </div>
        </div>
        <div class="col-md-4 px-0">
          <div class="detail-box">
            <div class="heading_container ">
              <h2>
               STORE
              </h2>
            </div>
            <p>
            Bienvenue chez ChiMatch store – Votre destination ultime pour des équipements sportifs de qualité supérieure !

Chez nous, nous comprenons la passion pour le sport et l'importance d'avoir les meilleurs équipements pour optimiser vos performances. Que vous soyez un athlète chevronné ou que vous débutiez dans une nouvelle activité sportive, notre magasin est conçu pour répondre à tous vos besoins.


            </p>
            <div class="btn-box">
              <a href="">
               Découvrir
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

<section className='produits'>
  
</section>
    </div>
  )
}
