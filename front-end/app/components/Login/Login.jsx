"use client"
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaEnvelope, FaLock, FaTimes } from 'react-icons/fa';

const dismissEffect = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);  /* Diminui o modal até desaparecer completamente */
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  height: 440px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: transform 0.5s ease, height 0.2s ease;
  animation: ${({ isClosing }) => (isClosing ? dismissEffect : 'none')} 0.5s forwards;
`;

const IconClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 45px;
  background: #272727;
  font-size: 2em;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 20px;
  cursor: pointer;
  z-index: 1;
  transition: color 0.5s ease;

  &:hover {
    color: rgb(255, 0, 0);
  }
`;

const FormBox = styled.div`
  width: 100%;
  padding: 40px;
`;

const Title = styled.h2`
  font-size: 2em;
  color: #fff;
  text-align: center;
`;

const InputBox = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #fff;
  margin: 30px 0;
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  color: #fff;
  font-weight: 500;
  pointer-events: none;
  transition: 0.5s;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1em;
  color: #fff;
  font-weight: 600;
  padding: 0 35px 0 5px;

  &:focus ~ ${Label},
  &:valid ~ ${Label} {
    top: -5px;
  }
`;

const Icon = styled.span`
  position: absolute;
  right: 8px;
  font-size: 1.2em;
  color: #fff;
  line-height: 57px;
`;

const RememberForgot = styled.div`
  font-size: 0.9em;
  color: #fff;
  font-weight: 500;
  margin: -15px 0 15px;
  display: flex;
  justify-content: space-between;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;

  input {
    accent-color: rgb(0, 151, 255); /* Usando a cor azul */
    margin-right: 3px;
  }
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 45px;
  background: rgb(0, 151, 255); /* Usando a cor azul */
  border: none;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1em;
  color: #fff;
  font-weight: 500;

  &:hover {
    background: #005f9e; /* Sombra mais escura do azul para hover */
  }
`;

const LoginRegister = styled.div`
  font-size: 0.9em;
  color: #fff;
  text-align: center;
  font-weight: 500;
  margin: 25px 0 10px;

  p a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoginModal = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 500); // Tempo da animação de fechamento
  };

  return (
    <Wrapper isClosing={isClosing}>
      <IconClose onClick={handleClose}>
        <FaTimes />
      </IconClose>
      <FormBox>
        <Title>Login</Title>
        <InputBox>
          <Input type="text" required />
          <Label>Email</Label>
          <Icon>
            <FaEnvelope />
          </Icon>
        </InputBox>
        <InputBox>
          <Input type="password" required />
          <Label>Password</Label>
          <Icon>
            <FaLock />
          </Icon>
        </InputBox>
        <RememberForgot>
          <CheckboxLabel>
            <input type="checkbox" /> Remember me
          </CheckboxLabel>
          <Link href="#">Forgot password?</Link>
        </RememberForgot>
        <Button>Login</Button>
        <LoginRegister>
          <p>
            Don't have an account? <Link href="#">Register</Link>
          </p>
        </LoginRegister>
      </FormBox>
    </Wrapper>
  );
};

export default LoginModal;
