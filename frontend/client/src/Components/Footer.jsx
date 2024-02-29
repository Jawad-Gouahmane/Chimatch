import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function () {
  return (
    <div>
      <footer>
        <div class="footer-content">
          <div class=" row contact-info">
            <div className="col-lg-6 col-md-6">
              <p> Contactez-nous : contact@chimatch.com</p>
              <p>Adresse : 123 Rue de match, Casablanca</p>
            </div>
            <div className="col-lg-6 col-md-6">
              <p> Telephone fixe : 0522974747</p>
              <p> Telephone portable : 0522974747</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <Link
              to="https://www.google.com/maps/dir/33.5892209,-7.6303681/Matu+Assurance,+215+Bd+Mohamed+Zerktouni,+Casablanca+20100/@33.5890381,-7.6311187,20z/data=!4m8!4m7!1m0!1m5!1m1!1s0xda7d2961d18fb81:0xde736dd5fc0145f6!2m2!1d-7.6340876!2d33.5887327?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              Voir Notre localisation sur GoogleMap
            </Link>
            <div className="social-footer ">
              <Link to="https://www.instagram.com">
                {" "}
                <FontAwesomeIcon icon={faInstagram} className="icons-social" />
              </Link>
              <Link>
                <FontAwesomeIcon icon={faFacebook} className="icons-social" />
              </Link>
              <Link>
                <FontAwesomeIcon icon={faLinkedin} className="icons-social" />
              </Link>
              <Link>
                <FontAwesomeIcon icon={faWhatsapp} className="icons-social" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
