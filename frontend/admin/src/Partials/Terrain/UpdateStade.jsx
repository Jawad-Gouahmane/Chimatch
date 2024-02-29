import React, { useEffect, useState } from "react";
import { Button, Modal, Input } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../helpers/api";

export default function UpdateStade() {
  const params = useParams();
  const [stade, setStade] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const id = params.id;
    console.log("id", id);
    api.get(`/stade/get/${id}`).then((response) => {
      setStade(response);
    });
  }, []);
  console.log("stad", stade);

  const updateStade = (e) => {
    e.preventDefault();
    console.log("test");
    const data = {
      stade: stade,
    };
    console.log("dataaaa", data);

    console.log("idddd ", params.id);
    api
      .put(`/stade/update/${params.id}`, data)
      .then((response) => {
        console.log("response", response);
        navigate("/Terrain");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="">
        <div className="d-flex align-items-center justify-content-between ">
          <h2 className=" ms-5 mb-5"> Mise à jour le stade </h2>
          <div className="addreservation">
            <form method="post" onSubmit={updateStade}>
              <div class="form-group ">
                <input
                  className="mt-1 mb-2"
                  value={stade?.data?.stade}
                  name="stade"
                  type="text"
                  placeholder="Ajouter un stade "
                  onChange={(e) => {
                    setStade(e.target.value);
                  }}
                />
              </div>
              <Button type="submit" class="btn btn-success ">
                Mise à jour
              </Button>
            </form>

            {/* Model Box Finsihs */}
          </div>
        </div>
        );
      </div>
    </div>
  );
}
