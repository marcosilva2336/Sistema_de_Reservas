"use client";

import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const FixedContainer = styled.div`
  position: fixed;
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
  padding: 10px 36px;
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
  flex: 0 1 60%; 
  background-color: rgb(255, 255, 255);
  z-index: 20;
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
  padding: 12px 16px;
  font-size: 12px;
  border: 1px solid rgb(0, 151, 255);
  color: rgb(0, 151, 255);
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  background-color: transparent;
  color: rgb(0, 151, 255);
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: rgb(0, 151, 255);
    color: #fff;
  }
`;

const Header = () => {
  return (
    <FixedContainer>
      <HeaderContainer>
        <Logo>TechHub</Logo>
        <SearchContainer>
          <SearchButton>
            <FaSearch style={{ color: 'rgb(0, 151, 255)' }} />
          </SearchButton>
          <SearchInput type="text" placeholder="Pesquisar..." />
        </SearchContainer>
        <AccountContainer>
          <LoginLink href="/login">Acesse sua conta</LoginLink>
          <SignupButton>Cadastre-se</SignupButton>
        </AccountContainer>
      </HeaderContainer>
    </FixedContainer>
  );
};

export default Header;