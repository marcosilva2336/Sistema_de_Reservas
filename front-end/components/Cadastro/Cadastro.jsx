"use client"
import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaEnvelope, FaLock, FaUser, FaPhone, FaCalendarAlt, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import InputMask from 'react-input-mask';

const dismissEffect = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 650px;
  height: 450px;
  background: white;
  border-radius: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 30px rgba(0, 0, 0, .2);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: transform 0.5s ease, height 0.2s ease;
  ${({ $isClosing }) => $isClosing && css`
    animation: ${dismissEffect} 0.5s forwards;
  `}
`;

const IconClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 45px;
  background: rgb(0, 151, 255);
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
  font-size: 2.5em; 
  color: rgb(0, 151, 255); 
  text-align: center;
`;

const InputBox = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #A0A0A0; 
  margin: 30px 0;
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  color: #555555;
  font-weight: 600;
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
  color: #000; 
  font-weight: 600;
  padding: 0 35px 0 5px;

  &:focus ~ ${Label},
  &:valid ~ ${Label} {
    top: -5px;
    color:rgb(0, 151, 255);
  }
`;

const Icon = styled.span`
  position: absolute;
  right: 8px;
  font-size: 1.2em;
  color: rgb(0, 151, 255);
  line-height: 57px;
`;

const Button = styled.button`
  width: 48%;
  height: 45px;
  background: rgb(0, 151, 255); 
  border: none;
  outline: none;
  border-radius: 6px;
  cursor: pointer; 
  font-size: 1em;
  color: #fff;
  font-weight: 500;
  margin: 5px;

  &:hover {
    background: #005f9e; 
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9em;
  margin-top: -20px;
  margin-bottom: 20px;
`;

const Cadastro = () => {
  const [isClosing, setIsClosing] = useState(false);
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const router = useRouter();

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      router.push('/');
    }, 500);
  };

  const handleNext = () => {
    if (step === 2) {
      setStep(step + 1);
    } else if (step === 3 && password !== confirmPassword) {
      setPasswordError('As senhas não coincidem');
    } else {
      setPasswordError('');
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError('As senhas não coincidem');
      return;
    }
    // Lógica de envio do formulário
    console.log('Formulário enviado');
  };

  return (
    <Wrapper $isClosing={isClosing}>
      <IconClose onClick={handleClose}>
        <FaTimes />
      </IconClose>
      <FormBox>
        <Title>Cadastro</Title>
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <InputBox>
                <Input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Label>Nome</Label>
                <Icon>
                  <FaUser />
                </Icon>
              </InputBox>
              <InputBox>
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Label>Email</Label>
                <Icon>
                  <FaEnvelope />
                </Icon>
              </InputBox>
              <ButtonGroup>
                <Button onClick={handleNext}>Próximo</Button>
              </ButtonGroup>
            </>
          )}
          {step === 2 && (
            <>
              <InputBox>
                <InputMask
                  mask="99/99/9999"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  required
                >
                  {(inputProps) => <Input {...inputProps} type="text" />}
                </InputMask>
                <Label>Data de Nascimento</Label>
                <Icon>
                  <FaCalendarAlt />
                </Icon>
              </InputBox>
              <InputBox>
                <Input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Label>Telefone</Label>
                <Icon>
                  <FaPhone />
                </Icon>
              </InputBox>
              <ButtonGroup>
                <Button onClick={handlePrevious}>Anterior</Button>
                <Button onClick={handleNext}>Próximo</Button>
              </ButtonGroup>
            </>
          )}
          {step === 3 && (
            <>
              <InputBox>
                <Input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Label>Senha</Label>
                <Icon>
                  <FaLock />
                </Icon>
              </InputBox>
              <InputBox>
                <Input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Label>Confirmar Senha</Label>
                <Icon>
                  <FaLock />
                </Icon>
              </InputBox>
              {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
              <ButtonGroup>
                <Button onClick={handlePrevious}>Anterior</Button>
                <Button type="submit">Cadastrar</Button>
              </ButtonGroup>
            </>
          )}
        </form>
      </FormBox>
    </Wrapper>
  );
};

export default Cadastro;