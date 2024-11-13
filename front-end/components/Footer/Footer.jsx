"use client"
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #007BFF;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 13px;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterText = styled.p`
  font-size: 12px;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink href="#terms">Termos</FooterLink>
        <FooterLink href="#signup">Cadastre-se</FooterLink>
        <FooterLink href="#login">Login</FooterLink>
        <FooterLink href="#create-event">Criar Evento</FooterLink>
      </FooterLinks>
      <FooterText>&copy; 2024 TechHub. Todos os direitos reservados.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
