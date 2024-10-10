"use client";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  margin-top: 80px;

  @media (max-width: 768px) {
    padding: 0 16px;
    margin-top: 40px;
  }

  @media (min-width: 1920px) {
    padding: 0 48px;
    margin-top: 100px;
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

  @media (min-width: 1920px) {
    margin-bottom: 30px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  color: #191F28;
  margin-bottom: 10px;
  margin-left: 90px;
  flex-grow: 1;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-left: 0;
    text-align: center;
  }

  @media (min-width: 1920px) {
    font-size: 24px;
    margin-left: 140px;
  }
`;

const SliderWrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

const SliderContent = styled(animated.div)`
  display: flex;
  flex-direction: row;
  width: ${({ length }) => length * 100}%;
  transition: transform 0.5s ease;
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1120px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CardImage = styled.img`
  width: 60%;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const CardContent = styled.div`
  width: 40%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardDate = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: rgb(0, 151, 255);
  margin-bottom: 8px;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  color: #191F28;
  font-weight: 600;
  margin-bottom: 10px;
`;

const CardLocation = styled.div`
  font-size: 14px;
  color: #4C576C;
`;

const DetailsButton = styled.button`
  position: relative;
  padding: 12px 16px;
  font-size: 12px;
  font-weight: 600;
  border: 1px solid rgb(0, 151, 255);
  color: rgb(0, 151, 255);
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;
  text-transform: uppercase;
  overflow: hidden;
  z-index: 1;
  transition: color 0.3s;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background-color: rgb(0, 151, 255);
    z-index: -1;
    transition: transform 0.8s;
    transform: translate(-50%, -50%) scale(0);
    border-radius: 50%;
  }

  &:hover:before {
    transform: translate(-50%, -50%) scale(1);
  }

  &:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 8px 12px; /* Reduz o tamanho do botão */
    margin-top: 10px; /* Adiciona margem superior */
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${({ $active }) => ($active ? '#007aff' : '#ddd')}; /* Usando $ para transient prop */
  cursor: pointer;
`;

const Destaques = () => {
    const eventos = [
        {
            image: 'https://via.placeholder.com/600x400',
            date: '18 OUT · 19 OUT',
            title: 'MEMÓRIAS DO VINHO',
            location: 'Sesc Palladium - Belo Horizonte, MG',
        },
        {
            image: 'https://via.placeholder.com/600x400',
            date: 'Sex, 20 Out · 14:00',
            title: 'Hackathon de Inovação',
            location: 'São Paulo, SP',
        },
        {
            image: 'https://via.placeholder.com/600x400',
            date: 'Sáb, 21 Out · 16:00',
            title: 'Campeonato de E-Sports',
            location: 'Rio de Janeiro, RJ',
        },
        {
            image: 'https://via.placeholder.com/600x400',
            date: 'Dom, 22 Out · 09:00',
            title: 'Workshop de Programação',
            location: 'Curitiba, PR',
        },
        {
            image: 'https://via.placeholder.com/600x400',
            date: 'Seg, 23 Out · 10:00',
            title: 'Feira de Tecnologia',
            location: 'Belo Horizonte, MG',
        },
    ];

    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPage((prevPage) => (prevPage + 1) % eventos.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [eventos.length]);

    const handleDotClick = (index) => {
        setCurrentPage(index);
    };

    return (
        <Container>
            <SectionHeader>
                <SectionTitle>Eventos em destaque na Techhub</SectionTitle>
            </SectionHeader>
            <SliderWrapper>
                <SliderContent
                    length={eventos.length}
                    style={{ transform: `translateX(-${currentPage * (100 / eventos.length)}%)` }}
                >
                    {eventos.map((evento, index) => (
                        <CardContainer key={index}>
                            <CardImage src={evento.image} alt={evento.title} />
                            <CardContent>
                                <div>
                                    <CardDate>{evento.date}</CardDate>
                                    <CardTitle>{evento.title}</CardTitle>
                                    <CardLocation>{evento.location}</CardLocation>
                                </div>
                                <DetailsButton>VER DETALHES</DetailsButton>
                            </CardContent>
                        </CardContainer>
                    ))}
                </SliderContent>
            </SliderWrapper>
            <DotsContainer>
                {eventos.map((_, index) => (
                    <Dot
                        key={index}
                        $active={index === currentPage}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </DotsContainer>
        </Container>
    );
};

export default Destaques;