import React from 'react'

import fifa from '../image/FIFA-.png'
import birthday from '../image/birth.jpg'
import player from '../image/player.png'

import { Link } from 'react-router-dom'

export default function 

() {
  return (
    <div>


<section className="hero">
            <div className="wrapper">
                <div className="grid" data-columns="2">
                    <div className="hero-img">
                        <img src={birthday} alt="" />
                    </div>
                    <div className=" font hero-info">
                        <h1>
                        ÉVÈNEMENTS

                        </h1>
                        <p  className= ' font  fs-5 pt-'>
                        À  ChiMatch, Vous pouvez organiser des évènements sur-mesure (Anniversaires, Goûters, Tournois privés, Tournois corporate et bien d’autres choses)
N’hésitez pas à nous contacter pour toute demande d’accompagnement ou de devis
                        </p>
                        <Link to={'/Contact'}  href="#" className="btn btn-primary"> Contact</Link>
                    </div>
                </div>
            </div>
        </section>



    </div>
  )
}
