import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../helpers/api";

function DetailsReservation() {
  const params = useParams();
  console.log("params", params);
  const [detailreserv, setDetailReserv] = useState("");
  useEffect(() => {
    console.log(params._id);
    api
      .get(`/resirvation/get/${params.id}`)
      .then((response) => {
        console.log("responsejfhjhf ", response);
        setDetailReserv(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {console.log("detailreserv", detailreserv)}
      {/* <h1> Nom et prenom :{detailreserv.name}</h1> */}
      <div className="d-flex  align-items-center flex-column mt-5 ">
        <h4> Nom et prenom : {detailreserv.name} </h4>
        <h4> Telephone : {detailreserv.phone} </h4>
        <h4> categorie : {detailreserv.categorie} </h4>

        <h4> Date : {detailreserv.date} </h4>
        <h4> Stade : {detailreserv.stade} </h4>
      </div>
    </div>
  );
}

export default DetailsReservation;
