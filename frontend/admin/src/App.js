import "./App.css";
import Sidebar from "../src/Partials/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Terrain from "./Partials/Terrain/Terrain";
import Reserv from ".//Partials/Reserv/Reserv";
import Dashboard from "./Partials/Dashboard";
import Report from "./Partials/Report";
import DetailsReservation from "./Partials/Reserv/DetailsReservation";
import UpdateReservation from "./Partials/Reserv/UpdateReservation";
import AddReservation from "./Partials/Reserv/AddReservation";
import AddStade from "./Partials/Terrain/AddStade";
import UpdateStade from "./Partials/Terrain/UpdateStade";
import DetailsStade from "./Partials/Terrain/DetailsStade";
function App() {
  return (
    <BrowserRouter>
      <div className="d-flex ">
        <div className="col-auto ">
          <Sidebar />
        </div>
        <div>
          <Routes>
            <Route path="/Reserv" element={<Reserv />}></Route>
            <Route path="/Terrain" element={<Terrain />}></Route>
            <Route path="/Dashboard" element={<Dashboard />}></Route>
            <Route path="/Report" element={<Report />}></Route>
            <Route
              path="Reserv/detailsReservation/:id"
              element={<DetailsReservation />}
            ></Route>
            <Route
              path="Reserv/UpdateReservation/:id"
              element={<UpdateReservation />}
            ></Route>

            <Route
              path="Reserv/AddReservation"
              element={<AddReservation />}
            ></Route>

            <Route
              path="Terrain/DetailsStade/:id"
              element={<DetailsStade />}
            ></Route>
            <Route path="Terrain/AddStade" element={<AddStade />}></Route>
            <Route path="Terrain/UpdateStade/:id" element={<UpdateStade />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
