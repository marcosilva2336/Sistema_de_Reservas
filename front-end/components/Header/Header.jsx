"use client";
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch, FaBars } from 'react-icons/fa';

const FixedContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: transparent;
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 36px;
`;

const Logo = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: rgb(0, 151, 255);
`;

const SearchContainer = styled.div`
  transform: translate3d(0px, 0px, 0px);
  backface-visibility: hidden;
  border: 1px solid rgb(189, 194, 201);
  transition: border 0.3s;
  position: relative;
  box-shadow: rgba(25, 31, 40, 0.15) 0px 1px 2px 0px;
  border-radius: 8px;
  padding: 8px;
  height: 48px;
  box-sizing: border-box;
  display: flex;
  flex: 0 1 50%; 
  background-color: rgb(255, 255, 255);
  z-index: 20;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  border: none;
  width: 100%;
  padding: 0px 8px;
  font-size: 16px;
  outline: none;
`;

const SearchButton = styled.button`
  padding: 5px 10px;
  font-size: 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AccountContainer = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LoginLink = styled.a`
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  font-weight: 600;
  color: rgb(0, 151, 255);
  border: 1px solid transparent;
  background-color: transparent;
  padding: 12px 16px;
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: none;
`;

const SignupButton = styled.button`
  position: relative;
  padding: 12px 16px;
  font-size: 12px;
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
    transition: transform 0.3s;
    transform: translate(-50%, -50%) scale(0);
    border-radius: 50%;
  }

  &:hover:before {
    transform: translate(-50%, -50%) scale(1);
  }

  &:hover {
    color: #fff;
  }
`;

const CreateEventLink = styled.a`
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  font-weight: 600;
  color: rgb(0, 151, 255);
  border: 1px solid transparent;
  background-color: transparent;
  padding: 12px 16px;
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: none;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 26px;
  border-radius: 5px;
  color: rgb(0, 151, 255);

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  position: absolute;
  top: 50px;
  right: 0;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 999;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  overflow: hidden;

  ${SearchContainer} {
    display: flex;
    margin: 16px 0;
  }

  ${AccountContainer} {
    display: flex;
    flex-direction: column;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu toggled. Current state:", !isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <FixedContainer>
      <HeaderContainer>
        <Logo>TechHub</Logo>
        <MenuButton onClick={toggleMenu}>
          <FaBars />
        </MenuButton>
        <SearchContainer>
          <SearchButton>
            <FaSearch style={{ color: 'rgb(0, 151, 255)' }} />
          </SearchButton>
          <SearchInput type="text" placeholder="Pesquisar..." />
        </SearchContainer>
        <AccountContainer>
          <CreateEventLink href="/create-event">Crie seu evento</CreateEventLink>
          <LoginLink href="/login">Acesse sua conta</LoginLink>
          <SignupButton onClick={() => window.location.href = '/cadastro'}>Cadastre-se</SignupButton>
        </AccountContainer>
      </HeaderContainer>
      <MobileMenu $isOpen={isMenuOpen}>
        <SearchContainer>
          <SearchButton>
            <FaSearch style={{ color: 'rgb(0, 151, 255)' }} />
          </SearchButton>
          <SearchInput type="text" placeholder="Pesquisar..." />
        </SearchContainer>
        <AccountContainer>
          <CreateEventLink href="/create-event">Crie seu evento</CreateEventLink>
          <LoginLink href="/login">Acesse sua conta</LoginLink>
          <SignupButton onClick={() => window.location.href = '/cadastro'}>Cadastre-se</SignupButton>
        </AccountContainer>
      </MobileMenu>
    </FixedContainer>
  );
};

export default Header;