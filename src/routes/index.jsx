import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Auth } from "../pages/Auth";
import { NotFound } from "../pages/NotFound";
import { ProductList } from "../pages/ProductsList";
import { Languages } from "../pages/Languages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/users" element={<ProductList />} />
      <Route path="/languages" element={<Languages />} />
      {/* <Route path="/genres" element={<ProductList />} />
      <Route path="/editorials" element={<ProductList />} /> */}
      <Route path="/login" element={<Auth />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
