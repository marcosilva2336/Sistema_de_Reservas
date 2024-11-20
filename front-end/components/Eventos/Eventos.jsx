"use client";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { eventosData } from '../../constants/data';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  margin-top: 80px;

  @media (max-width: 768px) {
    padding: 0 16px;
    margin-top: 40px;
  }

  @media (min-width: 1920px) and (min-height: 1080px){
    padding: 0 48px;
    margin-top: 100px;
  }
`;

const Section = styled.div`
  margin-bottom: 40px; 

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media (min-width: 1920px) and (min-height: 1080px){
    margin-bottom: 60px;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  position: relative; 

  @media (max-width: 768px) {
    flex-direction: column; 
    margin-bottom: 10px;
  }

  @media (min-width: 1920px) and (min-height: 1080px) {
    margin-bottom: 30px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  color: #191F28;
  margin-bottom: 10px;
  margin-left: 100px;
  flex-grow: 1;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-left: 0;
    text-align: center;
  }

  @media (min-width: 1920px) and (min-height: 1080px){
    font-size: 24px;
    margin-left: 150px;
  }
`;

const NavButtons = styled.div`
  display: flex;
  gap: 8px;
  position: absolute; 
  right: 100px;

  @media (max-width: 768px) {
    position: static; 
    margin-top: 10px; 
  }

  @media (min-width: 1920px) and (min-height: 1080px) {
    right: 150px;
    top: -50px;
  }
`;

const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: ${({ disabled }) => (disabled ? '#ddd' : 'rgb(0, 151, 255)')};
  color: ${({ disabled }) => (disabled ? '#aaa' : '#fff')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ddd' : 'rgb(0, 120, 204)')};
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }

  @media (min-width: 1920px) and (min-height: 1080px) {
    width: 45px;
    height: 45px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 35px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (min-width: 1920px) and (min-height: 1080px) {
    gap: 50px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (min-width: 1920px) {
    width: 385px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 180px;
  }
`;

const CardContent = styled.div`
  padding: 16px;

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (min-width: 1920px) {
    padding: 20px;
  }
`;

const CardDate = styled.div`
  font-size: 14px;
  color: rgb(0, 151, 255);
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 1920px) {
    font-size: 16px;
  }
`;

const CardTitle = styled.h3`
  font-size: 18px;
  color: #191F28;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1920px) {
    font-size: 22px;
  }
`;

const CardLocation = styled.div`
  font-size: 14px;
  color: #4C576C;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 1920px) and (min-height: 1080px) {
    font-size: 16px;
  }
`;


const Eventos = ({ filters }) => {
  const [currentPage, setCurrentPage] = useState([]);

  // Filtramos os eventos dentro de cada seção com base nos filtros
  const filteredEventosData = eventosData.map((section) => {
    // Se não houver filtros, mantemos todos os eventos
    if (filters.length === 0) {
      return section;
    }
    // Se a categoria da seção corresponde ao filtro, mantemos a seção
    if (filters.includes(section.category)) {
      return section;
    }
    // Caso contrário, retornamos uma seção vazia
    return {
      ...section,
      events: [],
    };
  });

  // Removemos as seções que não têm eventos após a filtragem
  const nonEmptySections = filteredEventosData.filter(
    (section) => section.events.length > 0
  );

  useEffect(() => {
    if (nonEmptySections && nonEmptySections.length > 0) {
      setCurrentPage(nonEmptySections.map(() => 0));
    }
  }, [nonEmptySections]);

  if (!nonEmptySections || nonEmptySections.length === 0) {
    return <div>Não há eventos disponíveis.</div>;
  }

  const handlePrevClick = (sectionIndex) => {
    setCurrentPage((prevPages) =>
      prevPages.map((page, index) =>
        index === sectionIndex ? Math.max(page - 1, 0) : page
      )
    );
  };

  const handleNextClick = (sectionIndex, eventsLength) => {
    setCurrentPage((prevPages) =>
      prevPages.map((page, index) =>
        index === sectionIndex
          ? Math.min(page + 1, Math.ceil(eventsLength / 4) - 1)
          : page
      )
    );
  };

  return (
    <Container>
      {nonEmptySections.map((section, sectionIndex) => {
        const eventsPerPage = 4;
        const startIndex = currentPage[sectionIndex] * eventsPerPage;
        const endIndex = startIndex + eventsPerPage;
        const currentEvents = section.events.slice(startIndex, endIndex);

        return (
          <Section key={sectionIndex}>
            <SectionHeader>
              <SectionTitle>{section.sectionTitle}</SectionTitle>
              <NavButtons>
                <NavButton
                  disabled={currentPage[sectionIndex] === 0}
                  onClick={() => handlePrevClick(sectionIndex)}
                >
                  <FaChevronLeft />
                </NavButton>
                <NavButton
                  disabled={endIndex >= section.events.length}
                  onClick={() => handleNextClick(sectionIndex, section.events.length)}
                >
                  <FaChevronRight />
                </NavButton>
              </NavButtons>
            </SectionHeader>
            <CardsContainer>
              {currentEvents.map((event, idx) => (
                <Card key={idx}>
                  <CardImage src={event.image} alt={event.title} />
                  <CardContent>
                    <CardDate>{event.date}</CardDate>
                    <CardTitle>{event.title}</CardTitle>
                    <CardLocation>{event.location}</CardLocation>
                  </CardContent>
                </Card>
              ))}
            </CardsContainer>
          </Section>
        );
      })}
    </Container>
  );
};

export default Eventos;