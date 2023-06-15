import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Auth } from "../pages/Auth";
import { NotFound } from "../pages/NotFound";
import { ProductList } from "../pages/ProductsList";
import { Languages } from "../pages/Languages";
import { Genres } from "../pages/Genres";
import { Editorials } from "../pages/Editorials";
import { Users } from "../pages/Users";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/users" element={<Users />} />
      <Route path="/languages" element={<Languages />} />
      <Route path="/genres" element={<Genres />} />
      <Route path="/editorials" element={<Editorials />} />
      <Route path="/login" element={<Auth />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
