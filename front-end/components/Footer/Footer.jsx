"use client";
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #007BFF;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
  width: 100%;
  margin-top: auto;
`;

const FooterText = styled.p`
  font-size: 12px;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 TechHub. Todos os direitos reservados.</FooterText>
    </FooterContainer>
  );
};

export default Footer;