import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { api } from "../../helpers/api";

function Terrain() {
  const [Stade, setStade] = useState({});

  useEffect(() => {
    api
      .get(`/stade/all`)
      .then((response) => {
        console.log("response ", response);
        setStade(response.data);
      })
      .catch((err) => {
        console.log(err);
        // setErr(err.response?.data?.message);
      });
  }, []);

  const deleteStade = (id) => {
    console.log("iddd", id);
    api
      .delete(`/stade/deleteStade/${id}`)
      .then((response) => {
        let result = Stade.filter((cat) => cat._id !== id);
        console.log(result);
        setStade(result);
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                    placeholder="Search stade"
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
                <b>Stade Details</b>
              </h4>
            </div>
            <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
              {" "}
              <Button>
                <Link to="AddStade">+ Ajouter stade</Link>
              </Button>
            </div>
          </div>
          <div class="reserv row">
            <div class="table-responsive ">
              <table class="table table-striped table-hover table-bordered ">
                <thead>
                  <tr className="">
                    <th scope="col">Stade</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(Stade) &&
                    Stade.map((stade, i) => (
                      <tr className="" key={stade?.id}>
                        <td>{stade.stade}</td>
                        <td>
                          <Link
                            to={`DetailsStade/${stade._id}`}
                            href="#"
                            class="view"
                            title="View"
                            data-toggle="tooltip"
                            style={{ color: "#10ab80" }}
                          >
                            <i class="material-icons">&#xE417;</i>
                          </Link>
                          <Link
                            to={`UpdateStade/${stade._id}`}
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
                            onClick={()=>{
                              deleteStade(stade._id)
                            }}
                          >
                            <i class="material-icons">&#xE872;</i>
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* <!--- Model Box ---> */}
        </div>
      </div>
    </div>
  );
}

export default Terrain;
