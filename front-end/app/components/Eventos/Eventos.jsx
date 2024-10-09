"use client";
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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

const Section = styled.div`
  margin-bottom: 40px; /* Adiciona distância entre as seções */

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media (min-width: 1920px) {
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

  @media (min-width: 1920px) {
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

  @media (min-width: 1920px) {
    font-size: 24px;
    margin-left: 150px;
  }
`;

const NavButtons = styled.div`
  display: flex;
  gap: 8px;
  position: absolute; /* Adiciona posição absoluta para o contêiner dos botões */
  right: 100px;

  @media (max-width: 768px) {
    position: static; /* Remove a posição absoluta */
    margin-top: 10px; /* Adiciona margem superior para separar do título */
  }

  @media (min-width: 1920px) {
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

  @media (min-width: 1920px) {
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

  @media (min-width: 1920px) {
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
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Adiciona box-shadow no hover */
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 1920px) {
    width: 300px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 120px;
  }

  @media (min-width: 1920px) {
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

  @media (min-width: 1920px) {
    font-size: 16px;
  }
`;

const eventosData = [
    {
      sectionTitle: "Venha agora fazer um curso",
      category: "programação",
      events: [
        {
          image: "https://via.placeholder.com/250x150",
          date: "Sex, 04 Out · 20:00",
          title: "Curso de React",
          location: "Multiplan Hall - ParkJacarepaguá - Rio de Janeiro, RJ"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Sáb, 05 Out · 14:00",
          title: "Curso de Node.js",
          location: "Multiplan Hall - ParkJacarepaguá - Rio de Janeiro, RJ"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Dom, 06 Out · 10:00",
          title: "Curso de Python",
          location: "Multiplan Hall - ParkJacarepaguá - Rio de Janeiro, RJ"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Seg, 07 Out · 18:00",
          title: "Curso de Data Science",
          location: "Multiplan Hall - ParkJacarepaguá - Rio de Janeiro, RJ"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Ter, 08 Out · 19:00",
          title: "Curso de Java",
          location: "Multiplan Hall - Recife, PE"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Qua, 09 Out · 18:00",
          title: "Curso de C#",
          location: "Multiplan Hall - Recife, PE"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Qui, 10 Out · 20:00",
          title: "Curso de Ruby",
          location: "Multiplan Hall - Recife, PE"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Sex, 11 Out · 17:00",
          title: "Curso de PHP",
          location: "Multiplan Hall - Recife, PE"
        }
      ]
    },
    {
      sectionTitle: "Venha agora participar da comunidade",
      category: "comunidade",
      events: [
        {
          image: "https://via.placeholder.com/250x150",
          date: "Ter, 08 Out · 19:00",
          title: "Encontro de Desenvolvedores",
          location: "TechHub - São Paulo, SP"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Qua, 09 Out · 18:00",
          title: "Meetup de JavaScript",
          location: "TechHub - São Paulo, SP"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Qui, 10 Out · 20:00",
          title: "Palestra sobre DevOps",
          location: "TechHub - São Paulo, SP"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Sex, 11 Out · 17:00",
          title: "Workshop de UX/UI",
          location: "TechHub - São Paulo, SP"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Sáb, 12 Out · 14:00",
          title: "Encontro de Pythonistas",
          location: "TechHub - Recife, PE"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Dom, 13 Out · 10:00",
          title: "Meetup de Ruby",
          location: "TechHub - Recife, PE"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Seg, 14 Out · 18:00",
          title: "Palestra sobre Agile",
          location: "TechHub - Recife, PE"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Ter, 15 Out · 19:00",
          title: "Workshop de Docker",
          location: "TechHub - Recife, PE"
        }
      ]
    },
    {
      sectionTitle: "Venha agora participar de um hackathon",
      category: "hackathon",
      events: [
        {
          image: "https://via.placeholder.com/250x150",
          date: "Sex, 12 Out · 09:00",
          title: "Hackathon de Inovação",
          location: "InovaHub - Curitiba, PR"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Sáb, 13 Out · 10:00",
          title: "Hackathon de Saúde",
          location: "InovaHub - Curitiba, PR"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Dom, 14 Out · 11:00",
          title: "Hackathon de Sustentabilidade",
          location: "InovaHub - Curitiba, PR"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Seg, 15 Out · 12:00",
          title: "Hackathon de Finanças",
          location: "InovaHub - Curitiba, PR"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Ter, 16 Out · 09:00",
          title: "Hackathon de Educação",
          location: "InovaHub - Recife, PE"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Qua, 17 Out · 10:00",
          title: "Hackathon de Transporte",
          location: "InovaHub - Recife, PE"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Qui, 18 Out · 11:00",
          title: "Hackathon de Energia",
          location: "InovaHub - Recife, PE"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Sex, 19 Out · 12:00",
          title: "Hackathon de Segurança",
          location: "InovaHub - Recife, PE"
        }
      ]
    },
    {
      sectionTitle: "Venha agora jogar games",
      category: "games",
      events: [
        {
          image: "https://via.placeholder.com/250x150",
          date: "Sex, 16 Out · 18:00",
          title: "Campeonato de eSports",
          location: "GameArena - Belo Horizonte, MG"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Sáb, 17 Out · 14:00",
          title: "Torneio de FIFA",
          location: "GameArena - Belo Horizonte, MG"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Dom, 18 Out · 10:00",
          title: "Competição de CS:GO",
          location: "GameArena - Belo Horizonte, MG"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Seg, 19 Out · 20:00",
          title: "Maratona de Jogos Indie",
          location: "GameArena - Belo Horizonte, MG"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Ter, 20 Out · 18:00",
          title: "Torneio de League of Legends",
          location: "GameArena - Recife, PE"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Qua, 21 Out · 14:00",
          title: "Campeonato de Fortnite",
          location: "GameArena - Recife, PE"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Qui, 22 Out · 10:00",
          title: "Competição de Valorant",
          location: "GameArena - Recife, PE"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Sex, 23 Out · 12:00",
          title: "Torneio de Overwatch",
          location: "GameArena - Recife, PE"
        }
      ]
    },
    {
      sectionTitle: "Venha agora aprender sobre hardware",
      category: "hardware",
      events: [
        {
          image: "https://via.placeholder.com/250x150",
          date: "Sex, 20 Out · 19:00",
          title: "Workshop de Arduino",
          location: "MakerSpace - Porto Alegre, RS"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Sáb, 21 Out · 15:00",
          title: "Curso de Raspberry Pi",
          location: "MakerSpace - Porto Alegre, RS"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Dom, 22 Out · 11:00",
          title: "Palestra sobre IoT",
          location: "MakerSpace - Porto Alegre, RS"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Seg, 23 Out · 17:00",
          title: "Oficina de Eletrônica",
          location: "MakerSpace - Porto Alegre, RS"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Ter, 24 Out · 19:00",
          title: "Workshop de Impressão 3D",
          location: "MakerSpace - Recife, PE"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Qua, 25 Out · 15:00",
          title: "Curso de Circuitos",
          location: "MakerSpace - Recife, PE"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Qui, 26 Out · 11:00",
          title: "Palestra sobre Robótica",
          location: "MakerSpace - Recife, PE"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Sex, 27 Out · 12:00",
          title: "Curso de Eletrônica Básica",
          location: "MakerSpace - Recife, PE"
        }
      ]
    },
    {
      sectionTitle: "Venha agora aprender sobre robótica",
      category: "robótica",
      events: [
        {
          image: "https://via.placeholder.com/250x150",
          date: "Sex, 24 Out · 18:00",
          title: "Competição de Robôs",
          location: "RoboArena - Brasília, DF"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Sáb, 25 Out · 14:00",
          title: "Workshop de Robótica",
          location: "RoboArena - Brasília, DF"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Dom, 26 Out · 10:00",
          title: "Palestra sobre IA",
          location: "RoboArena - Brasília, DF"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Seg, 27 Out · 20:00",
          title: "Curso de Robótica Educacional",
          location: "RoboArena - Brasília, DF"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Ter, 28 Out · 18:00",
          title: "Competição de Drones",
          location: "RoboArena - Recife, PE"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Qua, 29 Out · 14:00",
          title: "Workshop de Automação",
          location: "RoboArena - Recife, PE"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Qui, 30 Out · 10:00",
          title: "Palestra sobre Robôs Industriais",
          location: "RoboArena - Recife, PE"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Sex, 31 Out · 12:00",
          title: "Curso de Programação de Robôs",
          location: "RoboArena - Recife, PE"
        }
      ]
    },
    {
      sectionTitle: "Venha agora aprender sobre redes",
      category: "redes",
      events: [
        {
          image: "https://via.placeholder.com/250x150",
          date: "Sex, 28 Out · 19:00",
          title: "Curso de Redes Cisco",
          location: "NetHub - Recife, PE"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Sáb, 29 Out · 15:00",
          title: "Workshop de Segurança de Redes",
          location: "NetHub - Recife, PE"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Dom, 30 Out · 11:00",
          title: "Palestra sobre 5G",
          location: "NetHub - Recife, PE"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Seg, 31 Out · 17:00",
          title: "Oficina de Configuração de Redes",
          location: "NetHub - Recife, PE"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Ter, 01 Nov · 19:00",
          title: "Curso de Redes Wireless",
          location: "NetHub - Recife, PE"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Qua, 02 Nov · 15:00",
          title: "Workshop de Redes Mesh",
          location: "NetHub - Recife, PE"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Qui, 03 Nov · 11:00",
          title: "Palestra sobre Redes SDN",
          location: "NetHub - Recife, PE"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Sex, 04 Nov · 12:00",
          title: "Curso de Redes de Computadores",
          location: "NetHub - Recife, PE"
        }
      ]
    },
    {
      sectionTitle: "Venha agora aprender sobre banco de dados",
      category: "banco de dados",
      events: [
        {
          image: "https://via.placeholder.com/250x150",
          date: "Sex, 01 Nov · 19:00",
          title: "Curso de SQL",
          location: "DataHub - Salvador, BA"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Sáb, 02 Nov · 15:00",
          title: "Workshop de NoSQL",
          location: "DataHub - Salvador, BA"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Dom, 03 Nov · 11:00",
          title: "Palestra sobre Big Data",
          location: "DataHub - Salvador, BA"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Seg, 04 Nov · 17:00",
          title: "Oficina de Administração de Banco de Dados",
          location: "DataHub - Salvador, BA"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Ter, 05 Nov · 19:00",
          title: "Curso de MongoDB",
          location: "DataHub - Recife, PE"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Qua, 06 Nov · 15:00",
          title: "Workshop de PostgreSQL",
          location: "DataHub - Recife, PE"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Qui, 07 Nov · 11:00",
          title: "Palestra sobre Data Warehousing",
          location: "DataHub - Recife, PE"
        },
        {
          image: "https://via.placeholder.com/250x150",
          date: "Sex, 08 Nov · 12:00",
          title: "Curso de Administração de Banco de Dados",
          location: "DataHub - Recife, PE"
        }
      ]
    }
  ];
const Eventos = () => {
  const [currentPage, setCurrentPage] = useState(eventosData.map(() => 0));

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
        index === sectionIndex ? Math.min(page + 1, Math.ceil(eventsLength / 4) - 1) : page
      )
    );
  };

  return (
    <Container>
      {eventosData.map((section, sectionIndex) => {
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