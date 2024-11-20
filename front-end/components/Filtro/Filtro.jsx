"use client";
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUsers, FaLaptopCode, FaGamepad, FaBook, FaMicrochip, FaRobot, FaNetworkWired, FaDatabase } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px;
  margin-top: 80px;
`;

const InspirationalText = styled.h1`
  font-size: 20px;
  color: #191F28;
  margin-bottom: 20px;
  margin-left: 100px;

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }
`;

const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
`;

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 115px;
  height: 115px;
  border-radius: 50%;
  background-color: ${({ selected }) => (selected ? 'rgb(0, 151, 255)' : '#fdf9f9')};
  color: ${({ selected }) => (selected ? '#fff' : 'rgb(0, 151, 255)')};
  transition: transform 0.3s, background-color 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    background-color: rgb(0, 151, 255);
    color: #fff;
  }

  @media (min-width: 1920px) and (min-height: 1080px) {
    width: 154px;
    height: 154px;
  }
`;

const FilterIcon = styled.div`
  font-size: 32px;
  text-align: center;
`;

const FilterName = styled.span`
  font-size: 14px;
  color: rgb(76, 87, 108);
  text-align: center;
  margin-top: 10px; 
`;

const Filtro = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const toggleFilter = (filter) => {
    const newFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((f) => f !== filter)
      : [...selectedFilters, filter];

    setSelectedFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <Container>
      <InspirationalText>Explore o mundo da tecnologia!</InspirationalText>
      <FiltersContainer>
        <FilterWrapper onClick={() => toggleFilter('comunidade')}>
          <FilterCard selected={selectedFilters.includes('comunidade')}>
            <FilterIcon>
              <FaUsers />
            </FilterIcon>
          </FilterCard>
          <FilterName>Comunidade</FilterName>
        </FilterWrapper>
        <FilterWrapper onClick={() => toggleFilter('hackathon')}>
          <FilterCard selected={selectedFilters.includes('hackathon')}>
            <FilterIcon>
              <FaLaptopCode />
            </FilterIcon>
          </FilterCard>
          <FilterName>Hackathon</FilterName>
        </FilterWrapper>
        <FilterWrapper onClick={() => toggleFilter('games')}>
          <FilterCard selected={selectedFilters.includes('games')}>
            <FilterIcon>
              <FaGamepad />
            </FilterIcon>
          </FilterCard>
          <FilterName>Games</FilterName>
        </FilterWrapper>
        <FilterWrapper onClick={() => toggleFilter('programação')}>
          <FilterCard selected={selectedFilters.includes('programação')}>
            <FilterIcon>
              <FaBook />
            </FilterIcon>
          </FilterCard>
          <FilterName>Programação</FilterName>
        </FilterWrapper>
        <FilterWrapper onClick={() => toggleFilter('hardware')}>
          <FilterCard selected={selectedFilters.includes('hardware')}>
            <FilterIcon>
              <FaMicrochip />
            </FilterIcon>
          </FilterCard>
          <FilterName>Hardware</FilterName>
        </FilterWrapper>
        <FilterWrapper onClick={() => toggleFilter('robótica')}>
          <FilterCard selected={selectedFilters.includes('robótica')}>
            <FilterIcon>
              <FaRobot />
            </FilterIcon>
          </FilterCard>
          <FilterName>Robótica</FilterName>
        </FilterWrapper>
        <FilterWrapper onClick={() => toggleFilter('redes')}>
          <FilterCard selected={selectedFilters.includes('redes')}>
            <FilterIcon>
              <FaNetworkWired />
            </FilterIcon>
          </FilterCard>
          <FilterName>Redes</FilterName>
        </FilterWrapper>
        <FilterWrapper onClick={() => toggleFilter('banco de dados')}>
          <FilterCard selected={selectedFilters.includes('banco de dados')}>
            <FilterIcon>
              <FaDatabase />
            </FilterIcon>
          </FilterCard>
          <FilterName>Banco de Dados</FilterName>
        </FilterWrapper>
      </FiltersContainer>
    </Container>
  );
};

export default Filtro;