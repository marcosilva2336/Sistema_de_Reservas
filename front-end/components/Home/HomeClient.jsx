"use client";
import React, { useState } from 'react';
import Filtro from "../Filtro/Filtro"; 
import Destaques from "../Destaques/Destaques";
import Eventos from "../Eventos/Eventos";



const HomeClient = () => {
  const [filters, setFilters] = useState([]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <Filtro onFilterChange={handleFilterChange} />
      <Destaques />
      <Eventos filters={filters} />
    </>
  );
};

export default HomeClient;