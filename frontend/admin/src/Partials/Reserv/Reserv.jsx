import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { api } from "../../helpers/api";

function Reserv() {

  

  const [Rerservations, setRerservations] = useState({});
  // const npage = Math.ceil(Rerservations.length / nbrLine);
  // const records = Rerservations.slice(firstIndex, lastIndex);
  // const numbers = [...Array(npage + 1).keys()].slice(1);

  const [show, setShow] = useState(false);

  useEffect(() => {
    api
      .get(`/resirvation/all`)
      .then((response) => {
        console.log("response ", response);
        setRerservations(response.data);
      })
      .catch((err) => {
        console.log(err);
        // setErr(err.response?.data?.message);
      });
  }, []);
  ////  variables pourbutton ajouter une reservation

  return (
    <div>
      <div class="  container ">
        <div className="crud shadow-lg p-2 mb-2 mt-2 bg-body rounded">
          <div class="row ">
            <div class="col-sm-3 mt-5 mb-4 text-gred">
              <div className="search">
                <form class="form-inline">
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search reservation"
                    aria-label="Search"
                  />
                </form>
              </div>
            </div>
            <div
              class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred"
              style={{ color: "green" }}
            >
              <h4>
                <b>Reservation Details</b>
              </h4>
            </div>
            <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
              {" "}
              <Button>
                <Link to="AddReservation">+ Reserver</Link>
              </Button>
            </div>
          </div>
          <div class="reserv row">
            <div class="table-responsive ">
              <table class="table table-striped table-hover table-bordered ">
                <thead>
                  <tr className="">
                    <th scope="col">Nom et Prenom</th>
                    <th scope="col">Telephone </th>
                    <th scope="col">Categorie</th>
                    <th scope="col">Date et heure</th>
                    <th scope="col">Stade</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(Rerservations) &&
                    Rerservations.map((Reservation, i) => (
                      <tr className="" key={Reservation?.id}>
                        <td>{Reservation.name}</td>
                        <td>{Reservation.phone}</td>
                        <td>{Reservation.categorie}</td>
                        <td>{Reservation.date}</td>
                        <td>{Reservation.stade}</td>
                        <td>
                          <Link
                            to={`DetailsReservation/${Reservation._id}`}
                            href="#"
                            class="view"
                            title="View"
                            data-toggle="tooltip"
                            style={{ color: "#10ab80" }}
                          >
                            <i class="material-icons">&#xE417;</i>
                          </Link>
                          <Link
                            to={`UpdateReservation/${Reservation._id}`}
                            href="#"
                            class="edit"
                            title="Edit"
                            data-toggle="tooltip"
                            style={{ color: "#f1c40f" }}
                          >
                            <i class="material-icons">&#xE254;</i>
                          </Link>
                          <Link
                            href="#"
                            class="delete"
                            title="Delete"
                            data-toggle="tooltip"
                            style={{ color: "red" }}
                          >
                            <i class="material-icons">&#xE872;</i>
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <nav>
                <ul className="pagination">
                  <li className="page-item">
                    {/* <Link onClick={prePage} className=" btnpages  page-link">
                      Precedent
                    </Link> */}
                    <Link className=" btnpages  page-link">Precedent</Link>
                  </li>

                  {/* {numbers.map((n, i) => (
                    <li
                      className={`page-item${
                        currentpage === n ? "active" : ""
                      }`}
                      key={i}
                    >
                      <Link
                        className="btnpages page-link"
                        onClick={() => changePage(n)}
                      >
                        {n}
                      </Link>
                    </li>
                  ))} */}

                  <li className="  page-item  ">
                    {/* <Link onClick={nextPage} className="btnpages  page-link">
                      Suivant
                    </Link> */}
                    <Link className="btnpages  page-link">Suivant</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* <!--- Model Box ---> */}
        </div>
      </div>
    </div>
  );
  // function prePage() {
  //   if (currentpage !== 1) {
  //     setCurrentPage(currentpage - 1);
  //   }
  // }
  // function nextPage() {
  //   if (currentpage !== npage) {
  //     setCurrentPage(currentpage + 1);
  //   }
  // }
  // function changePage(id) {
  //   setCurrentPage(id);
  // }
}

export default Reserv;
