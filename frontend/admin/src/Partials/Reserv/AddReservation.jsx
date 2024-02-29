import React, { useState, useEffect } from "react";
import { Button, Modal, Input } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../helpers/api";

function AddReservation() {
  const [reserv, setReserv] = useState({});
  const [Stade, setStade] = useState([]);
  const navigate = useNavigate();

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

  console.log("Stadeeeet", Stade);

  const handlechange = (e) => {
    setReserv({
      ...reserv,
      [e.target.name]: e.target.value,
    });
  };

  console.log("reservvvv", reserv);

  const saveReserv = (e) => {
    e.preventDefault();
    console.log("test");
    // const data = {
    //   name: reserv?.name,
    // };

    const data = new FormData();
    console.log("stadeeee");
    data.append("name", reserv.name);
    data.append("phone", reserv.phone);
    data.append("date", reserv.date);
    data.append("stade", reserv.stade);

    console.log("data", data);

    api
      .post("/resirvation/add", data)
      .then((response) => {
     
        console.log("response resev", response);
        console.log("response data", response.data);

        // navigate("/Terrain");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="text-center ">
      <h2 className="mt-5 ">Ajouter une reservation</h2>
      <div className="addreservation">
        <form onSubmit={saveReserv}>
          <div class="form-group ">
            <input
              name="name"
              onChange={handlechange}
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Entrer Nom "
            />
          </div>
          <div class="form-group mt-3 mb-3">
            <input
              name="phone"
              onChange={handlechange}
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="  telephone"
            />
          </div>
          {/* <div>
            <div className="mt-3">
              <select id=""  class="form-select" name="" onChange={handlechange}>
                <option>5 VS 5</option>
                <option>7 VS 7</option>
                <option>11 VS 11</option>
              </select>
            </div>
          </div> */}

          <div class="form-group mt-3 ">
            <label htmlFor="">Date et Heure</label>
            <input
              name="date"
              onChange={handlechange}
              className="datetime"
              type="datetime-local"
              id="meeting-time"
            />
          </div>
          <div className="form-group mt-3 ">
          <input
              name="stade"
              onChange={handlechange}
              className="datetime"
              type="text"
              id="meeting-time"
            />
            {/* <select
              id=""
              class="form-select"
              name="stade"
              onChange={handlechange}
            >
              {Stade?.map((stade) => (
                <option value={stade?.id} key={stade?.id}>
                  {stade?.stade}
                </option>
              ))}
            </select> */}
          </div>
          <Button type="submit" class="btn btn-success mt-4">
            Ajouter
          </Button>
        </form>

        {/* Model Box Finsihs */}
      </div>
    </div>
  );
}

export default AddReservation;
