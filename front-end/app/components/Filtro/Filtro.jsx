"use client";
import React from 'react';
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
  margin-left: 150px;

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
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #fdf9f9;
  color: rgb(0, 151, 255);
  transition: transform 0.3s, background-color 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    background-color: rgb(0, 151, 255);
    color: #fff;
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

const Filtro = () => {
  return (
    <Container>
      <InspirationalText>Explore o mundo da tecnologia!</InspirationalText>
      <FiltersContainer>
        <FilterWrapper>
          <FilterCard>
            <FilterIcon>
              <FaUsers />
            </FilterIcon>
          </FilterCard>
          <FilterName>Comunidade</FilterName>
        </FilterWrapper>
        <FilterWrapper>
          <FilterCard>
            <FilterIcon>
              <FaLaptopCode />
            </FilterIcon>
          </FilterCard>
          <FilterName>Hackathon</FilterName>
        </FilterWrapper>
        <FilterWrapper>
          <FilterCard>
            <FilterIcon>
              <FaGamepad />
            </FilterIcon>
          </FilterCard>
          <FilterName>Games</FilterName>
        </FilterWrapper>
        <FilterWrapper>
          <FilterCard>
            <FilterIcon>
              <FaBook />
            </FilterIcon>
          </FilterCard>
          <FilterName>Cursos</FilterName>
        </FilterWrapper>
        <FilterWrapper>
          <FilterCard>
            <FilterIcon>
              <FaMicrochip />
            </FilterIcon>
          </FilterCard>
          <FilterName>Hardware</FilterName>
        </FilterWrapper>
        <FilterWrapper>
          <FilterCard>
            <FilterIcon>
              <FaRobot />
            </FilterIcon>
          </FilterCard>
          <FilterName>Robótica</FilterName>
        </FilterWrapper>
        <FilterWrapper>
          <FilterCard>
            <FilterIcon>
              <FaNetworkWired />
            </FilterIcon>
          </FilterCard>
          <FilterName>Redes</FilterName>
        </FilterWrapper>
        <FilterWrapper>
          <FilterCard>
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