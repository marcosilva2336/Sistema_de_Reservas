"use client";
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-top: 80px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 650px;
  background: white;
  border-radius: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 0 4px 8px  rgba(0, 0, 0, .2);
  padding: 20px;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 30px;
  color: rgb(0, 151, 255);
  margin-bottom: 20px;
  text-align: center;
`;

const Label = styled.label`
  font-size: 14px;
  color: #4C576C;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 16px;
  outline: none;

  &:focus {
    border-color: rgb(0, 151, 255);
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 16px;
  outline: none;
  resize: vertical;

  &:focus {
    border-color: rgb(0, 151, 255);
  }
`;

const Select = styled.select`
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 16px;
  outline: none;

  &:focus {
    border-color: rgb(0, 151, 255);
  }
`;

const Button = styled.button`
  padding: 12px;
  font-size: 14px;
  color: #fff;
  background-color: rgb(0, 151, 255);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgb(0, 120, 204);
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    eventValue: '',
    eventDescription: '',
    eventType: '',
    eventDate: '',
    eventTime: '',
    eventLogoUrl: '',
    eventCoverUrl: '',
    eventSpeakers: '',
    eventAddress: '',
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados do evento
    console.log(formData);
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Crie seu evento</Title>
        {currentStep === 1 && (
          <>
            <Label htmlFor="eventName">Nome do evento</Label>
            <Input
              type="text"
              id="eventName"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              required
            />
            <Label htmlFor="eventValue">Valor</Label>
            <Input
              type="text"
              id="eventValue"
              name="eventValue"
              value={formData.eventValue}
              onChange={handleChange}
              required
            />
            <Label htmlFor="eventDescription">Descrição do evento</Label>
            <TextArea
              id="eventDescription"
              name="eventDescription"
              value={formData.eventDescription}
              onChange={handleChange}
              rows="4"
              required
            />
          </>
        )}
        {currentStep === 2 && (
          <>
            <Label htmlFor="eventType">Tipo de evento</Label>
            <Select
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              required
            >
              <option value="">Selecione o tipo de evento</option>
              <option value="comunidade">Comunidade</option>
              <option value="hackathon">Hackathon</option>
              <option value="games">Games</option>
              <option value="programação">Programação</option>
              <option value="hardware">Hardware</option>
              <option value="robótica">Robótica</option>
              <option value="redes">Redes</option>
              <option value="banco de dados">Banco de Dados</option>
            </Select>
            <Label htmlFor="eventDate">Data do evento</Label>
            <Input
              type="date"
              id="eventDate"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              required
            />
            <Label htmlFor="eventTime">Hora do evento</Label>
            <Input
              type="time"
              id="eventTime"
              name="eventTime"
              value={formData.eventTime}
              onChange={handleChange}
              required
            />
          </>
        )}
        {currentStep === 3 && (
          <>
            <Label htmlFor="eventLogoUrl">URL da logo do evento</Label>
            <Input
              type="url"
              id="eventLogoUrl"
              name="eventLogoUrl"
              value={formData.eventLogoUrl}
              onChange={handleChange}
              required
            />
            <Label htmlFor="eventCoverUrl">URL da capa do evento</Label>
            <Input
              type="url"
              id="eventCoverUrl"
              name="eventCoverUrl"
              value={formData.eventCoverUrl}
              onChange={handleChange}
              required
            />
            <Label htmlFor="eventSpeakers">Nome dos palestrantes</Label>
            <Input
              type="text"
              id="eventSpeakers"
              name="eventSpeakers"
              value={formData.eventSpeakers}
              onChange={handleChange}
              required
            />
            <Label htmlFor="eventAddress">Endereço do evento</Label>
            <Input
              type="text"
              id="eventAddress"
              name="eventAddress"
              value={formData.eventAddress}
              onChange={handleChange}
              required
            />
          </>
        )}
        <NavigationButtons>
          {currentStep > 1 && <Button type="button" onClick={prevStep}>Voltar</Button>}
          {currentStep < 3 && <Button type="button" onClick={nextStep}>Próximo</Button>}
          {currentStep === 3 && <Button type="submit">Criar evento</Button>}
        </NavigationButtons>
      </Form>
    </Container>
  );
};

export default CreateEvent;