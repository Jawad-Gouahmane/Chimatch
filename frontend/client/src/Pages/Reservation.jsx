import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import chimatch from "../image/city.jpg";

import reservation from "../image/reservation.avif";
import image2 from "../image/hero.jpg";
import image3 from "../image/stade.avif";
// import image0 from '../image/FIFA-.png'
import image5 from "../image/player.png";

import five from "../image/five.png";
import seven from "../image/seven.png";
import eleven from "../image/onze.png";
import alarme from "../image/alarm-clock.png";

export default function Reservation() {
  // const [reserve, setReserve] = useState();
  // function update() {
  //   setReserve(alert("Welcome"));
  // }
  return (
    <div>
      <div className=" ">
        <Carousel>
          <Carousel.Item>
            <img
              className=" img-carousel-reservation d-block w-100"
              src={chimatch}
            />
            <Carousel.Caption className="">
              <h3>ChiMatch</h3>
              <p>
                OFFRE UN LARGE PANEL DE SERVICES POUR PERMETTRE À SES VISITEURS
                DE VIVRE UNE EXPÉRIENCE UNIQUE DANS UN LIEU OÙ FOOTBALL ET
                PLAISIR NE FONT QU’UN !
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" img-carousel-reservation d-block w-100"
              src={reservation}
            />
            <Carousel.Caption>
              <h3>ChiMatch</h3>
              <p>
                OFFRE UN LARGE PANEL DE SERVICES POUR PERMETTRE À SES VISITEURS
                DE VIVRE UNE EXPÉRIENCE UNIQUE DANS UN LIEU OÙ FOOTBALL ET
                PLAISIR NE FONT QU’UN !{" "}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <section className=" section-planning">
        <div className="container ">
          <div className="row">
            <div className="col-lg-4 col-md-12 pt-2 ">
              <img src={image5} alt="" className=" image5 pe-5 pt-5" />
            </div>
            <div className="col-lg-8 col-md-12 pt-5  ">
              <h3 className=" foot-passion text-center mb-5  text-decoration-underline ">
                LE FOOT EN PASSION
              </h3>
              <div className=" terrain d-flex">
                <img src={five} alt="" />

                <img src={seven} alt="" />
                <img src={eleven} alt="" />
              </div>
              <div className="stadium d-flex fs-4">
                <p className=" foot-passion ">10 terrains 5vs5</p>
                <p className=" foot-passion ">2 terrains 7vs7</p>
                <p className=" foot-passion ">1 grand terrain 11vs11</p>
              </div>
            </div>
          </div>
          <div className="time text-white p-4">
            <h3 className="  font text-center     "> Tarrifs :</h3>
            <h3 className="font ">
              {" "}
              Terrain 5vs5 :{" "}
              <span className="text-warning ms-5"> 500 DHS </span>{" "}
            </h3>
            <h3 className="font ">
              {" "}
              Terrain 7vs7 :{" "}
              <span className="text-warning ms-5"> 750 DHS </span>{" "}
            </h3>
            <h3 className="font ">
              {" "}
              Terrain 11vs11 :{" "}
              <span className="text-warning ms-5"> 1200 DHS </span>{" "}
            </h3>
          </div>

          <div className="">
            <h1 className="font text-center">
              {" "}
              <img src={alarme} alt="" className="alarme" /> OUVERT TOUS LES
              JOURS DE <span className="text-warning"> 10H À 00H</span>{" "}
            </h1>
          </div>
        </div>
      </section>

      <section className="planning">
        <h2 className=" font text-center pt-4 pb-4">Reservez-Ici  </h2>
        <div className="">
          <div className="col-lg-12 col-md-12  ">
            {/* <table className=  "table text-center ">
  
  
    </table> */}

            <section class="">
              <form className="d-flex align-items-center flex-column mt-2  mb-4">
                <div class="form-group mb-3 ">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Entrer Nom "
                  />
                </div>
                <div class="form-group mb-3  ">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="  telephone"
                  />
                </div>
                <div className="mb-3 me-5">
                  <select id="" class="form-select" name="">
                    <option selected hidden disabled>
                      Categorie Terrain
                    </option>

                    <option>5 vs 5 </option>
                    <option>7 vs 7</option>
                    <option>11 vs 11 </option>
                  </select>
                </div>

                <div class="form-group mb-3 ms-5   ">
                  <label htmlFor="">Date et Heure</label>
                  <input
                    className="datetime ms-3  "
                    type="datetime-local"
                    id="meeting-time"
                    name="meeting-time"
                  />
                </div>

                <button
                  type="submit"
                  class="btn btn-success ms-3  "
                 
                >
                  Reserver
                </button>
              </form>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
