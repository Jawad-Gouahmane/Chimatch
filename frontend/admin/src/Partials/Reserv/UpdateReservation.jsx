import React from "react";
import { Button, Modal, Input } from "react-bootstrap";

function UpdateReservation() {
  return (
    <div>
        <div>
         <div className="text-center ">
      <h2 className="mt-5 ">Ajouter une reservation</h2>
      <div className="addreservation">
        <form>
          <div class="form-group ">
            <input
          
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Entrer Nom "
            />
          </div>
          <div class="form-group mt-3 mb-3">
            <input
        
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="  telephone"
            />
          </div>
          <div>
            <select id="" class="form-select" name="">
              <option selected hidden disabled>
                Categorie Terrain
              </option>

              <option>5 vs 5 </option>
              <option>7 vs 7</option>
              <option>11 vs 11 </option>
            </select>
          </div>

          <div class="form-group mt-3 ">
            <label htmlFor="">Date et Heure</label>
            <input
           
              className="datetime"
              type="datetime-local"
              id="meeting-time"
              name="meeting-time"
            />
          </div>
          <div className="mt-3">
            <select id="" class="form-select" name="">
              <option selected hidden disabled onChange={'id stad'}>
                Stade
              </option>
              
              <option>Emirates</option>
              <option>Ettihad</option>
              <option>Old Traforld </option>
              <option>Anifield </option>
              <option>Stanmford bridge </option>
            </select>
          </div>
        </form>

        {/* Model Box Finsihs */}
      </div>
      <Button type="submit" class="btn btn-success mt-4">
        Ajouter
      </Button>
    </div>
    </div>
    </div>
  );
}

export default UpdateReservation;
