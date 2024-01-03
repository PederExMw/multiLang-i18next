import { Route, Routes, Outlet, BrowserRouter } from "react-router-dom";
import React from "react";
import Anasayfa from "./pages/Anasayfa";
import { baseUrl } from "./baseUrl";

export const Routers = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path={baseUrl + "/AnaSayfa"} element={<Anasayfa />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
