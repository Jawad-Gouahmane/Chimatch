import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal, Input } from "react-bootstrap";
import { api } from "../../helpers/api";

function AddStade() {
  const [stade, setStade] = useState({});

  const navigate = useNavigate();

  //   const handlechange = (e) => {
  //     setStade( e.target.value
  //     );
  //   };

  const saveStade = (e) => {
    e.preventDefault();
    console.log("test");
    const data = {
      stade: stade,
    };

    // console.log("data", data);
    // const saveStade = (e) => {
    //   e.preventDefault();

    // const data = new FormData();
    // console.log("stadeeee");
    // data.append("stade", stade);
    console.log("data", data);

    api
      .post("/stade/add", data)
      .then((response) => {
        setStade(response);
        console.log("response", response);
        navigate("/Terrain");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log("stade", stade);

  return (
    <div className="">
      <div className="d-flex align-items-center justify-content-between ">
        <h2 className=" ms-5 mb-5">Ajouter un stade</h2>
        <div className="addreservation">
          <form onSubmit={saveStade} method="post">
            <div class="form-group ">
              <input
                className="mt-1 mb-2"
                name="stade"
                onChange={(e) => {
                  setStade(e.target.value);
                }}
                type="text"
                placeholder="Ajouter un stade "
              />
            </div>
            <Button type="submit" class="btn btn-success">
              Ajouter
            </Button>
          </form>

          {/* Model Box Finsihs */}
        </div>
      </div>
      );
    </div>
  );
}

export default AddStade;
