"use client"
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: rgb(76, 87, 108);
  color: #fff;
  padding: 20px 24px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (min-width: 1920px) {
    padding: 24px 48px;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 1920px) {
    font-size: 16px;
  }
`;

const FooterText = styled.p`
  font-size: 14px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 1920px) {
    font-size: 16px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink href="#terms">Termos e Condições</FooterLink>
        <FooterLink href="#signup">Cadastre-se</FooterLink>
        <FooterLink href="#login">Acesse Agora</FooterLink>
        <FooterLink href="#create-event">Crie Seu Evento</FooterLink>
      </FooterLinks>
      <FooterText>&copy; 2024 TechHub. Todos os direitos reservados.</FooterText>
    </FooterContainer>
  );
};

export default Footer;