import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../authentication/Login";
import Navbar from "../components/navbar";
import { AddEmployees, EditEmployees, Employees } from "../page/Employees";
import { AddPosition, EditPosition, Position } from "../page/Position";
import { AddSallarys, EditSallarys, Sallarys } from "../page/Sallarys";
import { ProtectRouteOutlet } from "./PrivateRoute";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectRouteOutlet />}>
          <Route path="/" element={<Navbar />}>
            {/* Position */}
            <Route index={true} element={<Position />} />
            <Route
              path="position/edit-position/:_id"
              element={<EditPosition />}
            />
            <Route path="position/add-position" element={<AddPosition />} />

            {/* Employees */}
            <Route path="employees" element={<Employees />} />
            <Route
              path="employees/edit-employees/:_id"
              element={<EditEmployees />}
            />
            <Route path="employees/add-employees" element={<AddEmployees />} />

            {/* Sallarys */}
            <Route path="sallarys" element={<Sallarys />} />
            <Route
              path="sallarys/edit-sallarys/:_id"
              element={<EditSallarys />}
            />
            <Route path="sallarys/add-sallarys" element={<AddSallarys />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
